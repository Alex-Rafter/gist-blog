// Libs
import { Router } from 'preact-router';
import { h, render, createContext } from "preact";
import { useEffect, useState } from "preact/hooks";
import { createHashHistory } from 'history';

// Components
import { Previews } from './components/Previews';
import { Article } from "./pages/Article";

// Global State
export const BlogContext = createContext()

// Component
const Main = () => {
    const [previewData, setPreviewData] = useState([]);

    useEffect(() => {
        getPreviewData();
    }, []);

    async function getPreviewData() {
        let url =
            "https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog";
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not OK");
        const json = await response.json();
        const gistBlogData = await json.gistBlog;
        setPreviewData(gistBlogData)
    }

    const rmHashTagsAndSlugify = description => String(description).replace(/\s/g, '-').replace(/\-#.*/, '')

    return (
        <div class={(previewData.length > 0) ? '' : 'd-none'}>
            <BlogContext.Provider value={previewData}>
                <Router history={createHashHistory()}>
                    <Previews path="/" data={previewData} />
                    {previewData.map(article => <Article path={`/${rmHashTagsAndSlugify(article.description)}`} {...article} />)}
                </Router>
            </BlogContext.Provider>
        </div>
    )
}

// Render
const root = document.querySelector("#root");
render(<Main />, root);
// Libs
import { Router } from 'preact-router';
import { h, render, createContext } from "preact";
import { useEffect, useState } from "preact/hooks";
import { createHashHistory } from 'history';

// My Helpers
import { jsonFromSheets } from "./helpers/json-from-sheets";
import { apiUrl } from "./helpers/api-urls";

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

    const getPreviewData = async () => setPreviewData(await jsonFromSheets(apiUrl))
    
    const rmHashTagsAndSlugify = description => String(description).replace(/\s/g, '-').replace(/\-#.*/, '')

    return (
        <div class={(previewData.length > 0) ? '' : 'd-none'}>
            <BlogContext.Provider value={previewData}>
                <Router history={createHashHistory()}>
                    <Previews path="/" data={previewData} />
                    {previewData.map(article => <Article path={`/${rmHashTagsAndSlugify(article.description)}`} id={article.id} />)}
                </Router>
            </BlogContext.Provider>
        </div>
    )
}

// Render
const root = document.querySelector("#root");
render(<Main />, root);
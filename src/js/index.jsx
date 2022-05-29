import { Router } from 'preact-router';
import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { Previews } from './components/Previews';
import { Article } from "./pages/Article";
/** @jsx h */
export const BlogContext = createContext()

const Main = () => {

    const [data, setData] = useState([]);
    const [rootDisplay, setRootDisplay] = useState('d-none')

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        let url =
            "https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog";
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not OK");
        const json = await response.json();
        const Data = await json.gistBlog;
        setData(Data)
        setRootDisplay('');
    }
   const x = item =>  String(item.description).replace(/\s/g, '-').replace(/\-#.*/, '')
    return (        
        <BlogContext.Provider value={data}>
        <div class={`container-fluid px-0 overflow-hidden ${rootDisplay}`}>
            <Nav />
            <Router>
                <Previews path="/" data={data}/>
                {data.map((article) => <Article path={`/${x(article)}`} {...article}/>)}
            </Router>
            <Footer />
        </div>
        </BlogContext.Provider>

    )
}

const root = document.querySelector("#root");
render(<Main />, root);
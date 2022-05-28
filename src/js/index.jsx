import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { Previews } from "./components/Previews";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header"
import { Footer } from "./components/Footer";

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

    return (
        <BlogContext.Provider value={data}>
            <div class={`container-fluid px-0 overflow-hidden ${rootDisplay}`}>
                <Nav />
                <Previews data={data}/>
                <Footer />
            </div>
        </BlogContext.Provider>
    )
}

const root = document.querySelector("#root");
render(< Main />, root);
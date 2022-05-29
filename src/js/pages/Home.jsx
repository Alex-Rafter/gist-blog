import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { Previews } from "../components/Previews";

export const BlogContext = createContext()

export const Home = () => {
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
            <Previews data={data} />
        </BlogContext.Provider>
    )
}

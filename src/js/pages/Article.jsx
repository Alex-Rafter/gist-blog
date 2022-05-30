import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { parse } from "preact-parser";

export function Article({ id }) {
    const [rootDisplay, setRootDisplay] = useState('d-none')
    const [data, setData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        let url =
            `https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog/${id}`;
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not OK");
        const json = await response.json();
        const Data = await json.gistBlog;
        setData(Data)
        setRootDisplay('');
    }

    return (
        <div class={`container-fluid px-0 overflow-hidden ${rootDisplay}`}>
            <Nav />
            <div class="container">
                {parse(data.content)}
            </div>
            <Footer />
        </div>
    );
}

import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { Previews } from "./components/Previews";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header"
import { Footer } from "./components/Footer";

const Main = () => {

const [rootDisplay, setRootDisplay] = useState('d-none')
    useEffect(() => {
            setRootDisplay('')        
      }, []);

    return (
        <div class={`container-fluid px-0 overflow-hidden ${rootDisplay}`}>
            <Nav />
            <Previews />
            <Footer />
        </div>
    )
}

const root = document.querySelector("#root");
render(< Main/>, root);
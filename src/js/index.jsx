import { Router } from 'preact-router';
import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { Nav } from "./components/Nav"
import { Footer } from "./components/Footer"
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
/** @jsx h */
export const BlogContext = createContext()

const Main = () => {

    return (
        <div class={`container-fluid px-0 overflow-hidden`}>
            <Nav />
            <Router>
                <Home path="/" />
                <Article path="/article" />
            </Router>
            <Footer />
        </div>
    )
}

const root = document.querySelector("#root");
render(<Main />, root);
import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { Previews } from "../components/Previews";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
import { BlogArticle } from "../components/BlogArticle"

export const Article = () => {
    useEffect(() => {
        getData();
    }, []);

    return (
        <BlogArticle />
    )
}

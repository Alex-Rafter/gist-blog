import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";

export function Article({ content }) {
    return (
        <div class="container">
            {parse(content)}
        </div>
    );
}

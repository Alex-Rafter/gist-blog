import { h, render, Component, createContext } from "preact";

export function Nav() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a href="/" class="flex-grow-1 text-decoration-none"><h1 class="fw-bolder h1 text-white text-center">NOTADVICE</h1></a>
            </div>
        </nav>
    )
}
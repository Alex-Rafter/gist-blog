// Libs
import { h } from "preact";
import { useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";

// My Helpers
import { jsonFromSheets } from "../helpers/json-from-sheets";
import { apiUrl } from "../helpers/api-urls";

// Components
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";


export function Article({ id }) {

    const [articleData, setArticleData] = useState([]);
    const [storedArticle] = useState(sessionStorage.getItem("article"));

    useEffect(() => {
        (storedArticle !== undefined) ? getStoredArticleData() : getRemoteArticleData();
    }, []);

    const getStoredArticleData = async () => setArticleData(JSON.parse(storedArticle))
    const getRemoteArticleData = async () => setArticleData(await jsonFromSheets(`${apiUrl}${id}`))

    return (
        <div class={`container-fluid px-0 overflow-hidden`}>
            <Nav />
            <div class="container">
                {parse(articleData.content)}
            </div>
            <Footer />
        </div>
    );
}

import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";

export function PrevSingle({ createdAt, description, url, id, index }) {
  const [data, setData] = useState([]);
  const x = String(description).replace(/\s/g, '-').replace(/\-#.*/, '')
  const [fetched, setFetched] = useState(false);
  const previousFetchedValue = useRef("");

  useEffect(() => {
    previousFetchedValue.current = fetched;
  }, [fetched]);


  async function getBlogItem() {
    if (fetched === true) return
    setFetched(true)
    let url =
      `https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog/${id}`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not OK");
    const json = await response.json();
    const Data = await json.gistBlog;
    if (sessionStorage.getItem("article")) sessionStorage.removeItem("article") 
    sessionStorage.setItem("article", JSON.stringify(Data));
  }

  return (
    <div className="card mb-4" onMouseOver={getBlogItem}>
      <div className="card-body">
        <div className="small text-muted">{createdAt}</div>
        <h2 className="card-title">{description}</h2>
        <a className="btn btn-primary" href={`/${x}/`}>
          Read more →
        </a>
      </div>
    </div>
  );
}

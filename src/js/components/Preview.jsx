import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";

// main();


export function Preview() {

const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let url =
      "https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not OK");
    const json = await response.json();
    const Data = await json.gistBlog[0];
    console.log(Data);
    setData(Data);
  }

  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="small text-muted">{data.createdAt}</div>
        <h2 className="card-title">{data.description}</h2>
        <p className="card-text">
        {parse(data.content)}
        </p>
        <a className="btn btn-primary" href="#!">
          Read more →
        </a>
      </div>
    </div>
  );
}

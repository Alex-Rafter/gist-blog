import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";

export function Article() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let url =
      "https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog";
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not OK");
    const json = await response.json();
    const Data = json.gistBlog[0]
    // const Data = await json.gistBlog.map(item => item.description(descPassed))[0]
    console.log('running')
    setData(Data);
  }

  return (
    <div class="container">
      {parse(data.content)}
    </div>
  );
}

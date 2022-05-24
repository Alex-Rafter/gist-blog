import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";
import { PrevSingle } from "./PrevSingle";
// main();

function Featured({data}) {
  console.log(data);
  return <PrevSingle content="html here" createdAt={data.createdAt} description={data.description}/>
}

export function Previews() {
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
      const Data = await json.gistBlog;
      // console.log(Data);
      setData(Data);
    }

   console.log(Array.isArray(data))

  return (
    <div class="row">
    <div class="col-lg-8 offset-lg-2" >
      <Featured data={data}/>
        <div class="row">
      <div class="col-lg-6">
        <PrevSingle content="html here" createdAt="20.20.20" description="A desc here."/>
        <PrevSingle content="html here" createdAt="20.20.20" description="A desc here."/>
      </div>
      <div class="col-lg-6">
        <PrevSingle content="html here" createdAt="20.20.20" description="A desc here."/>
        <PrevSingle content="html here" createdAt="20.20.20" description="A desc here."/>
      </div>
    </div>
    </div>
</div>

  );
}

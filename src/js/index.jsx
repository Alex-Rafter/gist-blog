import { h, render, Component, createContext } from "preact";
import { useContext } from "preact/hooks";
import { parse } from "preact-parser";
// import {Preview} from "./components/Preview";
import {Previews} from "./components/Previews";

// async function main() {
//   let url = "https://api.sheety.co/7016cabf6b37601c93f0bcbd5ec85980/gistsToSheets/gistBlog"
//   const response = await fetch(url);
//   if (!response.ok) throw new Error('Network response was not OK')
//   const json = await response.json();
//   const Data = await createContext(json.gistBlog[0].content);

//   function Markdown({ className }) {
//     const MD = marked.parse(useContext(Data));
//     const HTML = parse(MD);
//     return (
//       <div id="topLevel" className={className}>
//         {HTML}
//       </div>
//     );
//   }

//   function Component1() {
//     return <Markdown className="tst" />;
//   }

//   const root = document.querySelector("#root");
//   render(<Component1 />, root);
// }

// main();

const root = document.querySelector("#testLocation");
render(<Previews/>, root);
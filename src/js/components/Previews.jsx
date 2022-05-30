import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { PrevSingle } from "./PrevSingle";
import { BlogContext } from "../index"

export function Previews() {
  const [rootDisplay, setRootDisplay] = useState('d-none')
  const [featuredData, ...notFeatured] = useContext(BlogContext);
  const returnCorrectEls = (index, pos, el) => (index < pos) && el

    useEffect(() => {    
  }, []);

  if (featuredData) setRootDisplay('');

  return (
    <div class={`container-fluid px-0 overflow-hidden ${rootDisplay}`}>
      <Nav />
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <PrevSingle {...featuredData} />
          <div class="row">
            <div class="col-lg-6">
              {notFeatured.map((item, i) => returnCorrectEls(i, 1, <PrevSingle {...item} />))}
            </div>
            <div class="col-lg-6">
              {notFeatured.map((item, i) => returnCorrectEls(i, 1, <PrevSingle {...item} />))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

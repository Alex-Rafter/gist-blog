import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";
import { PrevSingle } from "./PrevSingle";
import { showBodyEl } from "../helpers/show-body-el";
import { BlogContext } from "../index";

export function Previews() {
  const [featuredData, ...notFeatured] = useContext(BlogContext);

  // (data.length > 0) && showBodyEl()
  const returnCorrectEls = (index, pos, el) => (index < pos) && el

  return (
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
  );
}

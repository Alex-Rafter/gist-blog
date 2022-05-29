import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";

// main();


export function PrevSingle({createdAt, description, index}) {
  const x = String(description).replace(/\s/g, '-').replace(/\-#.*/, '')
  return (
    <div className="card mb-4">
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

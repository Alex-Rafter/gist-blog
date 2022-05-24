import { h, render, Component, createContext } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";
import { parse } from "preact-parser";

// main();


export function PrevSingle(props) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <div className="small text-muted">{props.createdAt}</div>
        <h2 className="card-title">{props.description}</h2>
        <p className="card-text">
        {props.content}
        </p>
        <a className="btn btn-primary" href="#!">
          Read more →
        </a>
      </div>
    </div>
  );
}

// Libs
import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";

// My Helpers
import { jsonFromSheets } from "../helpers/json-from-sheets";
import { apiUrl } from "../helpers/api-urls";
import { rmHashTagsAndSlugify } from "../helpers/rm-hash-tags-slugify";

// Styles
import "../../css/PrevSingle.css"

export function PrevSingle({ createdAt, description, id }) {
  const [fetched, setFetched] = useState(false);
  const previousFetchedValue = useRef("");

  useEffect(() => {
    previousFetchedValue.current = fetched;
  }, [fetched]);

  async function getBlogItem() {
    if (fetched === true) return
    setFetched(true)
    const Data = await jsonFromSheets(`${apiUrl}${id}`)
    sessionStorage.setItem("article", JSON.stringify(Data))
  }

  return (
    <div className="card mb-4" onMouseOver={getBlogItem}>
      <div className="card-body">
        <div className="small text-muted">{createdAt}</div>
        <h2 className="card-title">{description}</h2>
        <a className="btn btn-primary" href={`/${rmHashTagsAndSlugify(description)}/`}>
          Read more →
        </a>
      </div>
    </div>
  );
}

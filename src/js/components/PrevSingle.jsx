// Libs
import { h } from "preact";
import { useEffect, useState, useRef } from "preact/hooks";

// My Helpers
import { jsonFromSheets } from "../helpers/json-from-sheets";
import { apiUrl } from "../helpers/api-urls";
import { rmHashTagsAndSlugify } from "../helpers/rm-hash-tags-slugify";

// Styles
import "../../css/PrevSingle.scss"

export function PrevSingle({ createdAt, description, id }) {
  const [fetched, setFetched] = useState(false);
  const previousFetchedValue = useRef("");
  const descEdited = String(description).replace(/#.*$/,'')
  const dateEdited = String(createdAt).replace(/T.*$/,'')

  useEffect(() => {
    previousFetchedValue.current = fetched;
  }, [fetched]);

  async function getBlogItem(e) {
    if (fetched === true) return
    setFetched(true)
    const Data = await jsonFromSheets(`${apiUrl}${id}`)
    sessionStorage.setItem("article", JSON.stringify(Data))
    console.log(e.target)
    e.target.closest('div.preview').classList.toggle('filter')
    const body = document.querySelector('#body')
    body.classList.add('blurry')
  }

  return (
    <div className="preview mb-4" onMouseOver={(e) => getBlogItem(e)}>
        <a className="text-decoration-none" href={`/${rmHashTagsAndSlugify(description)}/`}>
          <h2 className="text-dark mb-1 text-lowercase">{descEdited}</h2>
        </a>
        <p className="small text-muted">{dateEdited}</p>
    </div>
  );
}

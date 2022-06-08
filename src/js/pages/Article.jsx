// Libs
import { h } from 'preact'
/* @jsx h */
import { useEffect, useState } from 'preact/hooks'
import { parse } from 'preact-parser'

// My Helpers
import { jsonFromSheets } from '../helpers/json-from-sheets'
import { apiUrl } from '../helpers/api-urls'

// Components
import { Nav } from '../components/Nav'
import { Footer } from '../components/Footer'

// CSS
import '../../css/article.scss'

export function Article ({ id }) {
  const [articleData, setArticleData] = useState([])
  const [storedArticle] = useState(window.sessionStorage.getItem('article'))
  const getRemoteArticleData = async () => await jsonFromSheets(`${apiUrl}${id}`)

  useEffect(() => {
    setArticleData((storedArticle !== undefined) ? JSON.parse(storedArticle) : getRemoteArticleData())
  }, [])

  return (
    <div class='container-fluid px-0 overflow-hidden'>
      <Nav />
      <div class='article container py-4'>
        <div class='row'>
          <div class='col-12 col-lg-8 offset-lg-2'>
            {parse(articleData.content)}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

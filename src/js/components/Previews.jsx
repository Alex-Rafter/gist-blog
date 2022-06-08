// libs
import { h } from 'preact'
/* @jsx h */

import { useContext } from 'preact/hooks'

// Helpers
import { BlogContext } from '../index'

// components
import { Nav } from './Nav'
import { Footer } from './Footer'
import { PrevSingle } from './PrevSingle'

export function Previews () {
  const [, ...notFeatured] = useContext(BlogContext)
  const returnCorrectEls = (index, pos, el) => (index < pos) && el

  return (
    <div class='container-fluid px-0 overflow-hidden'>
      <Nav />
      <div className='previews container py-5'>
        <div class='row'>
          <div class='col-12 col-lg-8 offset-lg-2'>
            {notFeatured.map((item, i) => returnCorrectEls(i, notFeatured.length, <PrevSingle {...item} />))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

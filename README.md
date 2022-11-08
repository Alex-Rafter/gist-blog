# Gist Blog Readme

[Gist Blog MVP](https://monkfish-app-abpdm.ondigitalocean.app/)

## Problem
I write a lot but my writing is often done on the spur of the moment and fits more in the category of journaling rather than a planned article. To this end I often create Gists for little notes, ideas, reflections on my work, and snippets.

I want to collate the best parts of this writing and publish it in a way that has the coherence and customisable of any other blog. I want to be able to do this quickly and with minimum fuss from the Gists themselves. While there are a few options they're all almost good but not quite there. [Gistlog](https://gistlog.co/) is so close but is very bare-bones and lacks customisation, [Hashnode](https://hashnode.com/) is another really good option, except that the customizing some parts of the blog is a breaking of TOS.

Leaving them purely as Gists is fine is less welcoming to non-devs and lacks tools like categorisation, customisation, or a custom domain.

## Goals 
- Use raw journal notes stored as Gists as the top of a funnel of content ideas for a personal blog.
- Make the process of turning Gists into blog posts on a personal site extremely quick and easy. 
- Be able to manage Gist-blog articles from the command line, [Leptop](https://github.com/hackjutsu/Lepton), of [GH Gist](https://gist.github.com/)
- Not have to turn to another app or platform to manage - eg copy and pasting into a rich text editor for [WP](https://wordpress.com/) or [Ghost](https://ghost.org/) etc
- No recompiling of a static site or having to switch to another process to have Gists show on the blog.
- Make it fast to load articles - performance and page weight key design constraints

## Intro
Gist blog is a lightweight tool for using Gists as the content for a blog. It works using a simple tag set in the Gist description to add or remove content from the site's database. Using this system articles can be added, updated, or removed from the blog quickly using only GH CLI, or a Gist manager like Lepton.

## Solution 
The heart of the solution is a Google Apps Script, a markdown parser hacked and bundled to work on the Apps Script platform, a Google Sheet, and lightweight Front End built with Preact. 
The Front End is built so as to require no maintenance and no recompiling as would be necessary with a static site generator option. 

### How does it work
A scheduled, automated, request is made by Apps Script to the Github API, and a list of all Gists is pulled into the script. 
The list items are then filtered based on the presence of a tag of #article within the Gist's description. 
All Gists with the #article tag are then requested by the script. Each Gist's markdown content is parsed using [Marked](https://github.com/markedjs/marked)  before the resulting html is stored, along with xxxx, inside a Google Sheet.  This is done to remove the need to parse the markdown client side, and saves us from adding the markdown parser to the js bundle; making for a lighter and faster solution. 
The front end code can be served from any static file hosting. It consists of only two basic pages for this mvp :  a list page, and a blog article page. Routing is handled by Preact Router.  
The article list page requests a list of all the articles stored in the database and the urls for blog article pages are created dynamically, based on the available blog items stored within the mini-database.
To get closer towards the experience that would be found with a compiled static site, [Quicklink](https://github.com/GoogleChromeLabs/quicklink) is used to prefetch articles while on list page - via a mouseover event (debounce to bring down server resource usage). 
And that's it! The site is stored on free hosting, the backend is also free, and article updates are free of hassle. 


## Tech 

## Features


## How to Use Gist Blog



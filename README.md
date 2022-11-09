# Gist Blog Readme

[Gist Blog MVP](https://monkfish-app-abpdm.ondigitalocean.app/)

Gist blog is a lightweight tool for using Gists as the content for a blog. It works using a simple tag set in the Gist description to add or remove content from the site's database. Using this system articles can be added, updated, or removed from the blog quickly using only GH CLI, or a Gist manager like [Lepton](https://github.com/hackjutsu/Lepton).


## Problem Statement
I write a lot but my writing is often done on the spur of the moment and fits more in the category of journaling rather than writing planned articles. To this end i often create Gists for little notes, ideas, reflections on my work, and snippets.

I wanted to be able to collate the best parts of this writing and publish it in a way that has the coherence and customisability of any other blog. I wanted to be able to do this quickly, and with minimum fuss, from the Gists themselves.

While there are a few options out there, they _almost_ fit my needs but are not quite there. [Gistlog](https://gistlog.co/) is so close in terms of convenience but its is very bare-bones and lacks customisation, [Hashnode](https://hashnode.com/) is another really good option, except that the customising some key parts of the blog is a against their TOS.

Leaving them purely as Gists is convenient but less welcoming to non-devs, lacks customisation of ui, and lacks ability to use a custom domain.

## Goals 
- Use raw journal notes stored as Gists as the top of a funnel of content ideas for a personal blog.
- Make the process of turning Gists into blog posts on a personal site extremely quick and easy. 
- Be able to manage Gist-blog articles from the command line, [lepton](https://github.com/hackjutsu/Lepton), or [GH Gist](https://gist.github.com/)
- Not have to turn to another app or platform to manage - eg copy and pasting into a rich text editor for [WP](https://wordpress.com/) or [Ghost](https://ghost.org/) etc
- No recompiling of a static site or having to switch to another process to have Gists show on the blog.
- Make it fast to load articles - performance and page weight key design constraints

## Solution 
The heart of the solution is a [Google Apps Script](https://developers.google.com/apps-script), [a markdown parser](https://github.com/markedjs/marked) i have bundled with [esbuild](https://esbuild.github.io/) to work on the Apps Script platform, a Google Sheet, and lightweight Front End built with [Preact](https://github.com/preactjs/preact). 

The Front End is built so as to require no maintenance and no recompiling as would be necessary with a static site generator. The scripts written for the Google Workspace are managed using [Google's Clasp CLI](https://github.com/google/clasp) to allow for local development and version control while using Apps Script.

### How does it work
- A scheduled, automated, request is made by Apps Script to the Github API, and a list of all Gists is pulled into the script. 
- The list items are then filtered based on the presence of a tag of #article within the Gist's description. 
- All Gists with the #article tag are then requested by the script. Each Gist's markdown content is parsed using [Marked](https://github.com/markedjs/marked)  before the resulting html, and summary details, are stored inside a Google Sheet.  This is done remove the need to parse the markdown client side, and save us from adding the markdown parser to the js bundle served; making for a lighter and faster site. 
- The front end code can be served from any static file hosting. It consists of only two basic pages for this mvp :  a list page, and a blog article page. Routing is handled by Preact Router.
- The article list page requests a list of all the articles stored in the database and the urls for blog article pages are created dynamically, based on the available blog items stored within the mini-database.
- To improve user experience, [Quicklink](https://github.com/GoogleChromeLabs/quicklink) is used to prefetch articles while on the list page. This is done via a mouseover event in tandem with a debounce function to reduce server resource usage. 
- And that's it! The site is stored on free hosting, the back-end is also free to run on G Workspace, and the blog article updates are automated and free of hassle. 



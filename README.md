# blog_api_visitor-TOP

> [!NOTE]
> The styling of this project is basically a carbon copy of [Anil Dash's blog](https://www.anildash.com/). I don't know them and/or about them, just thought the visual style of the blog was pretty and that I maybe would be able to replicate it.

> [!IMPORTANT]
> This is only the 	**frontend for visitors** part of the project. Be sure to also visit [backend](https://github.com/Isutomu/blog_api_backend-TOP) and [frontend admin](https://github.com/Isutomu/blog_api_admin-TOP).

> [!CAUTION]
> This project is purely meant to be used as a tool for self-improvement, so I sincerely recommend you to not use this. But, in case you do decide to use it either way, please do credit me.

This is the frontend for visitors of the blog of the project [Blog API](https://www.theodinproject.com/lessons/node-path-nodejs-blog-api) from TOP.
The notable abscence of commits is due to the fact that this project was originally hosted on this [GitHub Repository](https://github.com/Isutomu/blog_api-TOP).

## Pointlessly long preface
I ended up splitting the previously mentioned respository on three because deploying was considerably easier this way, and so it was maintaining it to be honest (try to be on the level of a junior programmer and deal with essentially three projects in one VSCODE window).\
I also decided to transpose this into a new repository by directly uploading the files, as at the time this seemed like the easiest way to do it.

This project is gonna be further expanded beyond the scope of the original TOP especification (also catch up with some aspects that I deliberately did not implement at the time).
The issues with the current code are going to be on the "issues" tab, so here I am going to limit myself to disclosure the future features.\
Both (README and issues) are going to be updated as the times goes on, so if you've arrived here in different points in times that is why they seem bigger than before.

There is no particular reason why I chose this project to maintain besides this being my 1st fullstack project.

## Future features

> [!IMPORTANT]
> Modifiers ("not priority" and the like) don't imply importance. Most of the time they simply mean that I thought they were too difficult to tackle for now.

- Add a "search posts by terms" feature
- Add a "categories page" that contains all the tags that were used in posts and redirects upon click to a "search posts by tag" page (this last page was already implemented)
- (Not priority) Expand the search feature to enable time period filtering
- Add loading placeholder components (pages where feature was enabled are going to be listed below)
- Add error placeholder components (pages where feature was enabled are going to be listed below)
- Add "no data" placeholder components (pages where feature was enabled are going to be listed below)
- (Not priority) Add proper error handling for the application
- Adjust (specially) image containers so that their sizes don't wildly change between the states "not loaded", "loaded" and "error" (pages where feature was enabled are going to be listed below)
- (Really not a priority) Change visual style
- (Not priority) Implement the states components (loading, error, no data) as a transition between pages feature (maybe even leave the original implementation but do this as an extra?)
- Implement sign up available to all visitors
- (Not priority) Allow users to sign up with external services (e.g. google)
- (Not priority) Allow users to sign in with external services (e.g. google)
- Implement login
- Implement logout
- Implement proper "session" expiration
- Add in "login" a "reset password" feature
- Allow users to comment on posts (the user must be logged in)
- Show comments on the post (lazy loading?)
- Implement a minimum user dashboard available to logged users with functions such as password change
- (Not priority) Add on the dashboard a function that allows the user to see all comments that they posted
- (Not priority) Allow users to favorite a posts
- (Not priority) Add on the dashboard a function that allows the user to see all favorited posts
- Refactor folder structure
  - Not just a simple rearranging, e.g. components are going to be in subfolder of pages (or containers), only being available in a "generic components" folder when they are actually reutilized and not just separated for better readability
- (Really not a priority) Convert to Typescript
- Validate form inputs (HTML5)
- (Not priority) Implement testing (unit testing? integration testing?)
- (Not really a priority) SEO

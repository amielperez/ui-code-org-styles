# Modules split across files
* Each JS is loaded via individual `<script>` tags
* Each CSS is loaded via individual `<link>` tags
* Each component is in its own file - this is great for working with other developers, but can be bad because it will blow up the number of HTTP requests that need to be made.

## Instructions
* Each structure is in its own branch
* Switch to a branch you want to demo, e.g., using `git fetch` and `git checkout`
* Run `node server` to run this on port 8080, or `node server XXXX` to run it in some other port `XXXX`
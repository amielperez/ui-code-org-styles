# Front-end structure, old school way
* Each JS is loaded via individual `<script>` tags
* Each CSS is loaded via individual `<link>` tags
* Development is done on separate files (which is good for teams)
* These files are minified and concatenated in a single file, which is good for deployment

## Instructions
* Each structure is in its own branch
* Switch to a branch you want to demo, e.g., using `git fetch` and `git checkout`
* Run `npm run build` first to build the project
* Run `node server` to run this on port 8080, or `node server XXXX` to run it in some other port `XXXX`
* Or, you can just run `npm start` to do a build and server run, but this only binds to port 8080
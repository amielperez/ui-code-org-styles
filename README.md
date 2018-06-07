# 101* ways to organize your front-end project
(_* - Not really_) 
* Components are written in vanilla JS to make this as stripped-down as possible
* JS codes are all written in ES6 to take advantage of new features/syntactical sugar

## Instructions
* Each structure is in its own branch
* Switch to a branch you want to demo, e.g., using `git fetch` and `git checkout`
* Run `node server` to run this on port 8080, or `node server XXXX` to run it in some other port `XXXX`

## Branches
* `bare-bones-js` - The old school way of doing things. Hello early 2000's!
* `modules-as-namespaces` - Attempt to modularize stuff so global namespace is not polluted
* `namespaces-with-file-split` - same modularization, but split into files for collaboration
* `minify-and-concat` - differentiate between source files (split for collaboration) and distributable files/bundles, which are concatenated and minified for efficiency
* `webpack-and-es6-modules-jsonly` - use a more modern tool like webpack for modularization and bundling. Hello late 2010's!
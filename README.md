How I use this

- Add this repo as a git submodule: `git submodule add https://github.com/ericminio/yop-eslint.git`
- update your `./.vscode/settings.json` with relative path to the submodule
- update your `./package.json` with relative path
- update your CI script with `git submodule update --init` after clone

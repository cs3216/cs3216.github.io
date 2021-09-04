# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator based on React and MDX.

## Docusaurus Commands

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

## CS3216-specific

### Writing Content

The current Docusaurus site uses [MDX](https://mdxjs.com/) which allows writing JSX in Markdown. However, a block of contents in an MDX file can either be Markdown or JSX but not both. Hence you might see some places in the markdown files have quite a number of newlines which seems redundant but it is actually to indicate to the compiler to switch between Markdown and JSX parsing. **Don't remove newlines in the Markdown files unless you know what you are doing!**. It's recommended that you install the Prettier extension for your editor and let it format the files for you (turn on the "Format on Save" option).

### Adding Students

Do the following to add photos of students for new AYs:

1. Add the list of students to `students/students.json`
1. Add images in the `static/img/students/<year>/<id of student>.jpg`
1. Add a new Markdown file to `students/<year>.md` (this step would not be necessary if we wrote a Docusaurus plugin that generates each page)

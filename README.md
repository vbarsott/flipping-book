# Guide Notes

## Link to the project

https://flippingbook.vanessabarsotti.com/

## Description

This is an example of a css animation for a flipping book using react and scss.

## If cloning the project:

- git clone https://github.com/vbarsott/flipping-book.git
- npm install
- npm run dev

## If creating from scratch:

- Run: `npx create-react-app flippingbook`
- Clean up extra files
- Include information on .gitignore (ex: exclude docs folder)
- Start: `npm start`
- Code: start coding

## Install modules:

### Router

- Router: `npm i react-router-dom`

### Styling

- Sass: `npm i sass --save-dev`
- Import inside App.js: `import './styles/css/styles.css';`
- Include script on package.json:
  `"scripts": { "sass": "sass src/styles/scss:src/styles/css --watch --no-source-map" }`
- Run sass: `npm run sass`
- Create directories inside src folder:
  - styles
    - css
    - scss => styles.scss file
- Bootstrap: `npm i bootstrap`
- React Bootstrap: `npm i react-bootstrap`
- React icons: `npm i react-icons`

### Setup to run all together (npm start and npm run sass)

- Install: `npm i concurrently --save-dev`
- Include script on package.json (DON'T DELETE WHAT WAS INSTALLED BEFORE):
  `"scripts": { "dev": "concurrently --kill-others \"npm start\" \"npm run sass\"" }`
- Run dev: `npm run dev`

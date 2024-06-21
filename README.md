# Base Template

I created this template repo to hold the base markup/styling/js files I use for most web projects.

## Getting started with npm and Parcel

Install npm:

`npm install`

Install Parcel:

`npm install --save-dev parcel`

Set the entry file:

`npx parcel src/html/index.html`

Add the following to the top of the package.json file:

```
{
  "name": "my-project",
  "source": "src/html/index.html",
  "scripts": {
    "start": "parcel",
    "build": "parcel build"
  },
  "devDependencies": {
    "@parcel/transformer-sass": "^2.12.0",
    "parcel": "^2.12.0"
  }
}
```

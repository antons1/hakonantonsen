# hakonantonsen.no

This is my personal web page, written in react, using Parcel as packaging and babel as transpiler.

## Structure

Currently the site only consists of a frontend react app, which resides in `app`.
Eventually an api server will exist in the `server` folder.

The `app` folder contains the react entry file (`main.js`), as well as a `components` folder. In `components`, you will find two files, and four folders. `Routes.jsx`, which uses React-Router and is the component which is added to the dom by `main.js`. Also, `common-style-variables.less` contains less variables used by the different component styles, such as breakpoints, colors and fonts.

The four folders are `organisms`, `molecules`, `atoms` and `routes`, representing the four different classes of components used in the application.

`routes` contains the components that are mounted by React-Router, and should only consist of a few high-level organisms.

The three other folders contain components following the atomic design principles.
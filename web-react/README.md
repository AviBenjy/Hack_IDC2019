# React-Web README

## `In the project`

### `assets folder`
Where we will save images and icons for the project.  **Note that you need to import from assets and not set directly the src element**.
``` js
import logo from './assets/icons/logo.png'
```
```html
<!-- Good -->
<img src={logo} alt="Logo" />
<!-- Not -->
<img src='./assets/icons/logo.png' alt="Logo" />

<!-- This ensures that when the project is built, Webpack will correctly move the images into the build folder, and provide us with correct paths. -->
```

### `Style rules`
**index.css** is the only css file, to design the app layout of the application and not design for a specific component in some page so that there will be no overrides and unexpected appearance.

### `Eslint (just for convention)`
- Tabs (4 spaces)
- No semicolon (pleas..)
- Single qute
- Space before curly brackets and after
```javascript
// Example for Space before curly brackets and after
// Good! :)
import { someImport } from './bla'
const component = ({ prop1, prop2 }) => { }

// try not
import {someImport} from './bla'
const component = ({prop1, prop2}) => { }
```

### `Libraries`
- redux
- material ui
- emotion js
- thunk-redux
- axios (not mandatory can use fetch - instead)
- reselect (useful to select part from the redux store)
- react-router-dom
- prop-types


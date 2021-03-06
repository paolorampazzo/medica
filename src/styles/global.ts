import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

* {
margin: 0;
padding: 0;
outline: 0;
box-sizing: border-box;
}

*:focus {
  outline: 0;
}

html, body, #root {
  height: 100%;
  /* background: ${lighten(0.5, '#225588')}; */
  background: #ebf8ff;
}

body {
  -webkit-font-smoothing: antialised;
}

body, input, button {
  font: 14px 'Roboto', sans-serif;
}

input {
  background: transparent;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}
`;

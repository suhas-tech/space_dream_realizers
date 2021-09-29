import { createGlobalStyle, keyframes } from "styled-components";

export const placeholderShimmer = keyframes`
    0% {
        background-position: -320px 0;
    }
    100% {
        background-position: 320px 0;
    }
`;

export const GlobalStyle = createGlobalStyle`
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  word-break: break-word;
}

small {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  font-size: 0.8rem;
  vertical-align: baseline;
  word-break: break-word;
}
/****** Elad Shechter's RESET *******/
/*** box sizing border-box for all elements ***/
/* *,
*::before,
*::after{box-sizing:border-box;} */

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}
button {
  background-color: transparent;
  color: inherit;
  border-width: 0;
  padding: 0;
  cursor: pointer;
}

button:active {
  outline: none;
  border: none;
}
button:focus {
  outline: none;
  border: none;
}

figure {
  margin: 0;
}
input::-moz-focus-inner {
  border: 0;
  padding: 0;
  margin: 0;
}
ul,
ol,
dd {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-size: inherit;
  font-weight: inherit;
}
p {
  margin: 0;
}
cite {
  font-style: normal;
}
fieldset {
  border-width: 0;
  padding: 0;
  margin: 0;
}

html {
  overflow-y: scroll;
  box-sizing: border-box;
  font-weight: 400;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}

    * {
        padding: 0;
        margin: 0;
    }

    body {
        background: #fff;
        font-family: Nunito, sans-serif !important;
        font-size: 16px;
        font-weight: 400;
        line-height: 1.4;
        overflow: hidden !important;
        // overflow-y: scroll !important;
        -webkit-font-smoothing: antialiased;
    }

    .shimming {
        animation-duration: 1.5s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: ${placeholderShimmer};
        animation-timing-function: linear;
        background-size: 1500px 104px;
    }

    a {
        text-decoration: none;

        :hover {
            opacity: 0.6;
        text-decoration: underline;

        }
    }

    .primaryBorderOnHover {
        border: 1px solid #D6D8D9;
    }

    .ellipsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .question {
        border-radius: 50%;
        background-color: #fff;
        color: #000;
        font-weight: 500;
        width: 16px;
        height: 16px;
        font-size: 11px;
        line-height: 16px;
        text-align: center;
        display: inline-block;
        border: 1px solid #000;
        box-shadow: 0 0 1px 0 rgba(0,0,0,.2);
        vertical-align: middle;
        margin: 0 2px 0 8px;
        cursor: pointer;
    }

    .shown {
        height: auto;
    }
    
    .link {
       color: inherit;
    }

    div[class|=styles__HeaderContainer] {
       overflow-x: auto;
    }
`;

// src/styles/GlobalStyles.js
import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
    body {
      font-family: 'Clash Display', sans-serif;
    }

    * {
    // scroll behaviour
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch; // only supported by iOS

    // noinspection CssInvalidMediaFeature
    @media screen and (prefers-reduced-motion: reduce) {
      scroll-behavior: auto;
    }

    // width
    ::-webkit-scrollbar {
      background: transparent;
      width: 15px;
      height: 15px;
    }

    // track
    ::-webkit-scrollbar-track {
      background: transparent;
      width: 5px;
      height: 5px;
    }

    // handle
    ::-webkit-scrollbar-thumb {
      background-color: grey;
      border: 5px solid transparent;
      border-radius: 1rem;
      background-clip: padding-box;
    }

    ::-webkit-scrollbar-corner {
      background: transparent;
    }
  }
`;

const GlobalStyles = () => (
	<>
		<BaseStyles />
		<CustomStyles />
	</>
);

export default GlobalStyles;

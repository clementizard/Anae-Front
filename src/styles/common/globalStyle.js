import { createGlobalStyle } from 'styled-components';

import Helvetica from '../../static/fonts/Helvetica/Helvetica.otf';
import HelveticaSvg from '../../static/fonts/Helvetica/Helvetica.svg';
import HelveticaBold from '../../static/fonts/Helvetica/Helvetica-Bold.otf';
import HelveticaBoldSvg from '../../static/fonts/Helvetica/Helvetica-Bold.svg';
import HelveticaLight from '../../static/fonts/Helvetica/Helvetica-Light.otf';
import HelveticaLightSvg from '../../static/fonts/Helvetica/Helvetica-Light.svg';
import HelveticaOblique from '../../static/fonts/Helvetica/Helvetica-Oblique.otf';
import HelveticaObliqueSvg from '../../static/fonts/Helvetica/Helvetica-Oblique.svg';

export default createGlobalStyle`
	@font-face {
		font-family: "Helvetica";
		src:
		  url(${HelveticaSvg}) format("svg"),
		  url(${Helvetica}) format("opentype");
    font-display: swap;
	}
	@font-face {
		font-family: "HelveticaBold";
		src:
		  url(${HelveticaBoldSvg}) format("svg"),
		  url(${HelveticaBold}) format("opentype");
    font-display: swap;
	}
	@font-face {
		font-family: "HelveticaLight";
		src:
		  url(${HelveticaLightSvg}) format("svg"),
		  url(${HelveticaLight}) format("opentype");
    font-display: swap;
	}
	@font-face {
		font-family: "HelveticaOblique";
		src:
		  url(${HelveticaObliqueSvg}) format("svg"),
		  url(${HelveticaOblique}) format("opentype");
    font-display: swap;
	}
  body {
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    min-width: 100vw;
    min-height: 100vh;
    font-family: 'Helvetica', "Arial", sans-serif;
  }
`;

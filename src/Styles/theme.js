import { css } from 'styled-components';

export const flexSet = (justifyContent, alignItems) => css`
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const animationDuration = () =>
  css`
    transition: all 300ms linear;
  `;

const Theme = {
  background: '#FFFEFC',
  white: '#FFFFFF',
  vermilion: '#ff7425',
  orange: '#FF9900',
  opacityOrange: 'rgba(242,153,74,0.5)',
  yellow: '#FFD66C',
  grey: 'rgba(196,196,196,0.3)',
  middleGrey: 'rgba(65,65,65,0.4)',
  deepGrey: '#828282',
  lightOrange: 'rgba(255,195,170,0.3)',
  fontColor: '#2D2B2B',
  fontTitle: "'Alata', sans-serif;",
  fontContent: "'Noto Sans KR', sans-serif;",
  flexSet,
};

export default Theme;

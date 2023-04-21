import { setMode } from '@stencil/core';

declare global {
  interface Window {
    eclTheme:any;
  }
}

export default () => {
  const themeResolver = (elm: HTMLElement) => {
    const theme = window.eclTheme || (elm as any).theme || elm.getAttribute('theme');
    if (theme) {
      return theme;
    } else if (!elm.parentElement) {
      return 'ec';
    } else {
      return themeResolver(elm.parentElement);
    }
  };
  
  setMode((elm: HTMLElement) => {
    return themeResolver(elm);
  });
};
import { setMode } from '@stencil/core';

export default () => {
  const themeResolver = (elm: HTMLElement) => {
    const theme = (elm as any).theme || elm.getAttribute('theme');
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
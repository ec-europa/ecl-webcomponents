import { setMode } from '@stencil/core';

declare global {
  interface Window {
    eclTheme?: string;
    __eclThemeCssInjected?: boolean;
    __eclCurrentTheme?: string;
  }
}

function injectWebtoolsLoad(): void {
  const scriptId = 'webtools-loader';

  if (!document.getElementById(scriptId)) {
    const script = document.createElement('script');
    script.id = scriptId;
    script.src = 'https://webtools.europa.eu/load.js';
    script.defer = true;
    script.type = 'text/javascript';
    document.head.appendChild(script);
  }
}

function injectThemeCss(theme: string) {
  const existingLinks = document.querySelectorAll('link[data-ecl-theme-css]');

  // If the same theme is already injected, skip
  if (window.__eclCurrentTheme === theme) return;

  // Remove existing theme CSS
  existingLinks.forEach(link => link.remove());

  // Inject new theme CSS
  const themeLink = document.createElement('link');
  themeLink.rel = 'stylesheet';
  themeLink.href = `/custom-properties-${theme}.css`;
  themeLink.setAttribute('data-ecl-theme-css', ''); // marker for cleanup
  document.head.appendChild(themeLink);

  if (theme === 'ec') {
    const ecModeLink = document.createElement('link');
    ecModeLink.rel = 'stylesheet';
    ecModeLink.href = `/ecl-ec-color-modes.css`;
    ecModeLink.setAttribute('data-ecl-theme-css', '');
    document.head.appendChild(ecModeLink);
  }

  window.__eclCurrentTheme = theme;
}

export default () => {
  const themeResolver = (elm: HTMLElement): string => {
    const theme = window.eclTheme || (elm as any).theme || elm.getAttribute('theme');
    if (theme) {
      injectThemeCss(theme);
      if (theme === 'ec') {
        injectWebtoolsLoad();
      }
      return theme;
    } else if (!elm.parentElement) {
      injectThemeCss('ec');
      return 'ec';
    } else {
      return themeResolver(elm.parentElement);
    }
  };

  setMode((elm: HTMLElement) => {
    return themeResolver(elm);
  });
};

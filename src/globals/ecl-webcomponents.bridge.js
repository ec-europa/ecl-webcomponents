// src/bridge/ecl-webcomponents-bridge.js
const BASE = new URL('.', document.currentScript.src);
const THEME_CSS_PATH = './build/styles/custom-properties-';
const EC_MODE_CSS = './build/styles/ecl-ec-color-modes.css';
const WEBTOOLS_SRC = 'https://webtools.europa.eu/load.js';

function resolve(path) {
  return new URL(path, BASE).href;
}

function isBrowser() {
  return typeof window !== 'undefined' && typeof document !== 'undefined';
}

function injectLink(href) {
  if (!isBrowser()) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  link.setAttribute('data-ecl-theme-css', '');
  document.head.appendChild(link);
}

function injectThemeCss(theme) {
  if (!isBrowser()) return;
  document.querySelectorAll('link[data-ecl-theme-css]').forEach(l => l.remove());
  injectLink(resolve(`${THEME_CSS_PATH}${theme}.css`));
  console.log(resolve(`${THEME_CSS_PATH}${theme}.css`));
  if (theme === 'ec') injectLink(resolve(EC_MODE_CSS));
  document.documentElement.setAttribute('data-ecl-theme', theme);
  window.__eclCurrentTheme = theme;
}

function injectWebtools() {
  if (!isBrowser()) return;
  if (document.getElementById('webtools-loader')) return;
  const script = document.createElement('script');
  script.src = WEBTOOLS_SRC;
  script.defer = true;
  script.id = 'webtools-loader';
  document.head.appendChild(script);
}

function switchTheme(theme) {
  if (!isBrowser()) return;
  localStorage.setItem('ecl-theme', theme);
  injectThemeCss(theme);
}

if (isBrowser()) {
  window.switchTheme = switchTheme;
  const theme = localStorage.getItem('ecl-theme') || 'ec';
  injectThemeCss(theme);
  injectWebtools();
}

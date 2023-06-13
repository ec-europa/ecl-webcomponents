export const randomizedLink = (link) => {
  return `${link}#${Math.random().toString(36).slice(2, 7)}`;
};
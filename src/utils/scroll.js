export const scrollTo = (id, offset) => {
  const el = document.getElementById(id);
  const scrollOffset = offset !== undefined ? offset : 48;

  window.scrollTo(0, el.offsetTop + scrollOffset);
};

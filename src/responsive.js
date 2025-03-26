export const Responsive = () => {
  const html = document.documentElement;
  const width = window.innerWidth;

  if (width < 768) {
    html.style.fontSize = (width * 16) / 375 + "px";
  } else {
    html.style.fontSize = (width * 16) / 1440 + "px";
  }
};

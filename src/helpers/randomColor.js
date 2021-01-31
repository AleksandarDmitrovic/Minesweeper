const randomColor = () => {
  let colors = ["orange", "darkgreen", "cyan", "violet", "yellow"];
  return colors[Math.floor(Math.random() * colors.length)];
};

export default randomColor;
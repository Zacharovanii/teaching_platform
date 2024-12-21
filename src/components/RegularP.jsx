import React from "react";

function RegularP({ children, color, opacity }) {
  const textVisual = opacity ? `${color}/${opacity}` : color;

  return <p className={`${textVisual}`}>{children}</p>;
}

export default RegularP;

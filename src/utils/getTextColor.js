const getLuminance = (hex) => {
  const rgb = hex
    .replace(/^#/, "")
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16) / 255);

  const [r, g, b] = rgb;
  const a = [r, g, b].map((c) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  );

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const getTextColor = (bgColor) => {
  if (!bgColor) return "#000000";
  const luminance = getLuminance(bgColor);
  return luminance > 0.5 ? "#000000" : "#FFFFFF";
};

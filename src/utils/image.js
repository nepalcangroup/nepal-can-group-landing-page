export const getSafeImage = (image) => {
  if (!image) return "/aboutUs/partnership.jpg";

  if (image.startsWith("/")) return image;

  if (
    image.startsWith("https://bpy-demo.sgp1.digitaloceanspaces.com") ||
    image.startsWith("https://bpy-prod.sgp1.digitaloceanspaces.com")
  ) {
    return image;
  }

  return "/aboutUs/partnership.jpg";
};

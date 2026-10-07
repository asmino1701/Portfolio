// Project screenshots ship in two sizes; cards and the hero only need the 720px version.
export function thumb(src) {
  return src ? src.replace("/assets/projects/", "/assets/projects/thumbs/") : src;
}

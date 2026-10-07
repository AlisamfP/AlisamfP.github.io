export interface WallpaperPhoto {
  id: string;
  file: string;
  label: string;
}

// Add one entry per image dropped into public/wallpapers/photos/.
// `id` just needs to be unique; `file` must match the filename exactly.
export const WALLPAPER_PHOTOS: WallpaperPhoto[] = [
  // { id: "sunset", file: "sunset.jpg", label: "Sunset" },
  {id: "thunder", file: "thunder-bag.jpeg", label: "Thundercat"},
  {id: "zoolights", file: "zooLights.jpg", label: "Zoo Lights"}
];

export function getWallpaperPhoto(id: string): WallpaperPhoto | undefined {
  return WALLPAPER_PHOTOS.find((p) => p.id === id);
}

export default function sitemap() {
  return [
    "/",
    "/about",
    "/resume",
    "/work/villages",
    "/work/parcel-pending",
    "/work/switch",
    "/work/payro",
  ].map((path) => ({ url: new URL(path, "https://jeremyrivera.design").href }));
}

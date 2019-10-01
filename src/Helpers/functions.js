export function sliceString(text, count) {
  return text.slice(0, count) + (text.length > count ? "..." : "");
}

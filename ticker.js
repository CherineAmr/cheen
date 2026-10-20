// Running icon ticker under the main photo.
// To change the icons' order, reorder the list below.
const TICKER_ICONS = {
  "Ankh": "<path d=\"M12 10.5C8.6 10.5 8.6 3 12 3s3.4 7.5 0 7.5Z\"/><path d=\"M12 10.5V21\"/><path d=\"M7 12.5h10\"/>",
  "Microphone": "<g transform=\"rotate(-25 12 12)\"><circle cx=\"12\" cy=\"6.2\" r=\"3.6\"/><path d=\"M8.6 5.2h6.8M8.9 7.6h6.2M12 2.6v7.2\"/><path d=\"M10 10.2l.9 10.6h2.2l.9-10.6\"/><path d=\"M10.3 12h3.4\"/></g>",
  "Guitar": "<g transform=\"rotate(32 12 12) translate(1.4 1.4) scale(.88)\"><path d=\"M12 9.9c2 0 3.3 1.1 3.3 2.9 0 1.4-.8 2-.7 2.6 1.4.5 1.9 1.6 1.9 2.6 0 2.3-2 3.8-4.5 3.8s-4.5-1.5-4.5-3.8c0-1 .5-2.1 1.9-2.6.1-.6-.7-1.2-.7-2.6 0-1.8 1.3-2.9 3.3-2.9Z\"/><path d=\"M12 9.9V4.6\"/><path d=\"M11.1 4.6 11.4 1.6h1.2l.3 3Z\"/><path d=\"M10.4 2.6h.6M10.4 3.9h.6M13 2.6h.6M13 3.9h.6\"/><path d=\"M10.6 15.6h2.8M10.6 17.6h2.8\"/><path d=\"M10.8 19.4h2.4\"/></g>",
  "Drums": "<ellipse cx=\"12\" cy=\"11\" rx=\"7\" ry=\"2.4\"/><path d=\"M5 11v6.2c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V11\"/><path d=\"M5.3 12.6 8.5 19M12 13.4V19.7M18.7 12.6 15.5 19\"/><path d=\"M9.5 9 5.5 3.5M14.5 9l4-5.5\"/>",
  "Bass": "<g transform=\"rotate(-32 12 12) translate(1.4 1.4) scale(.88)\"><path d=\"M9.2 12c-.8-1.4-.4-2.5.4-2.6.7-.1 1 1 1.4 2h2c.6-.8 1.4-1.4 2-1 .6.5 0 1.8-.4 3 1.6 1 2.2 2.6 2 4.2-.3 2.6-2.3 4.2-4.6 4.2-2.4 0-4.4-1.6-4.6-4-.1-2 .6-4.2 1.8-5.8Z\"/><path d=\"M12 11.4V1.8\"/><path d=\"M12 1.8h.9v4.6H12\"/><path d=\"M12.9 2.4h.9M12.9 3.5h.9M12.9 4.6h.9M12.9 5.7h.9\"/><path d=\"M10.6 16h2.8\"/><path d=\"M10.9 19h2.2\"/></g>",
  "Laptop": "<rect x=\"4.5\" y=\"5\" width=\"15\" height=\"10\" rx=\"1\"/><path d=\"M2.5 18.5h19l-1.6-3.5H4.1Z\"/><path d=\"M10.5 17h3\"/>",
  "Cat": "<path d=\"M9.2 3.5 10 7h4l.8-3.5 1 4.2c.3 1.9-.6 3.3-1.9 3.9 2 1.1 3.1 3.9 3.1 6.7V20H7v-1.7c0-2.8 1.1-5.6 3.1-6.7-1.3-.6-2.2-2-1.9-3.9Z\"/><path d=\"M17 19.5c2.3.2 3.5-1.2 3.2-3.2\"/><path d=\"M11 9h.01M13 9h.01\"/>",
  "Pharos": "<path d=\"M5.5 21h13\"/><path d=\"M7 21l1.2-7.5h7.6L17 21\"/><path d=\"M9 13.5l.6-4h4.8l.6 4\"/><path d=\"M10.4 9.5V7h3.2v2.5\"/><path d=\"M12 7V5.6\"/><path d=\"M12 3.2V2M8.6 4.6 7.4 3.8M15.4 4.6l1.2-.8M8 6.6H6.6M16 6.6h1.4\"/><path d=\"M12 16.2v2.2\"/>",
  "Maple leaf": "<path d=\"M12 2 L13.4 5 L15 4.2 L14.4 8 L16.8 5.8 L17.3 7.2 L20 6.7 L19.1 9.6 L20.5 10.3 L16.2 13.9 L16.7 15.4 L12.6 14.9 L12.6 19.6 L11.4 19.6 L11.4 14.9 L7.3 15.4 L7.8 13.9 L3.5 10.3 L4.9 9.6 L4 6.7 L6.7 7.2 L7.2 5.8 L9.6 8 L9 4.2 L10.6 5Z\"/><path d=\"M12 19.6V22\"/>"
};

(function () {
  const box = document.getElementById("ticker");
  if (!box) return;
  const icon = (paths) =>
    '<svg class="tk-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" ' +
    'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + paths + "</svg>" +
    '<span class="tk-sep" aria-hidden="true">✦</span>';
  const oneSet = Object.values(TICKER_ICONS).map(icon).join("");
  box.setAttribute("role", "img");
  box.setAttribute("aria-label", Object.keys(TICKER_ICONS).join(", "));
  box.innerHTML = '<div class="ticker-track">' + oneSet.repeat(6) + "</div>";
})();

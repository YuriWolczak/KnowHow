import { initializeStudyPath } from "./controller.js";

function start() {
  initializeStudyPath(document);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", start, { once: true });
} else {
  start();
}

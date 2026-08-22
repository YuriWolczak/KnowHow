const cards = [...document.querySelectorAll("[data-topic-card]")];
const searchInput = document.querySelector("#topic-search");
const levelFilter = document.querySelector("#level-filter");
const resultsCount = document.querySelector("#results-count");
const progressSummary = document.querySelector("#progress-summary");
const emptyState = document.querySelector("#empty-state");

function updateProgress() {
  const completed = cards.filter((card) => card.classList.contains("is-complete")).length;
  progressSummary.textContent = `${completed} concluído${completed === 1 ? "" : "s"}`;
}

function applyFilters() {
  const term = searchInput.value.trim().toLocaleLowerCase("pt-BR");
  const level = levelFilter.value;
  let visible = 0;

  cards.forEach((card) => {
    const matchesTerm = card.dataset.search.includes(term);
    const matchesLevel = level === "all" || card.dataset.level === level;
    const shouldShow = matchesTerm && matchesLevel;
    card.hidden = !shouldShow;
    if (shouldShow) {
      visible += 1;
    }
  });

  resultsCount.textContent = `${visible} conteúdo${visible === 1 ? "" : "s"} encontrado${visible === 1 ? "" : "s"}`;
  emptyState.hidden = visible !== 0;
}

cards.forEach((card) => {
  const button = card.querySelector("[data-complete]");
  button.addEventListener("click", () => {
    const completed = card.classList.toggle("is-complete");
    button.textContent = completed ? "Desmarcar como concluído" : "Marcar como concluído";
    updateProgress();
  });
});

searchInput.addEventListener("input", applyFilters);
levelFilter.addEventListener("change", applyFilters);
updateProgress();
applyFilters();

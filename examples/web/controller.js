import {
  filterTopics,
  formatProgressCount,
  formatResultsCount,
} from "./logic.js";

export function initializeStudyPath(document) {
  const cards = [...document.querySelectorAll("[data-topic-card]")];
  const searchInput = document.querySelector("#topic-search");
  const levelFilter = document.querySelector("#level-filter");
  const resultsCount = document.querySelector("#results-count");
  const progressSummary = document.querySelector("#progress-summary");
  const emptyState = document.querySelector("#empty-state");

  const cardData = cards.map((card) => ({
    card,
    data: {
      level: card.dataset.level,
      search: card.dataset.search,
    },
  }));

  function updateProgress() {
    const completed = cards.filter((card) => card.classList.contains("is-complete")).length;
    progressSummary.textContent = formatProgressCount(completed);
  }

  function applyFilters() {
    const visibleCards = filterTopics(
      cardData.map(({ data }) => data),
      searchInput.value,
      levelFilter.value,
    );
    const visibleSet = new Set(visibleCards);

    cardData.forEach(({ card, data }) => {
      card.hidden = !visibleSet.has(data);
    });

    resultsCount.textContent = formatResultsCount(visibleCards.length);
    emptyState.hidden = visibleCards.length !== 0;
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
}

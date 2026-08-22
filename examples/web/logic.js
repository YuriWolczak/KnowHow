export function matchesTopic(card, term, level) {
  const normalizedTerm = term.trim().toLocaleLowerCase("pt-BR");
  const matchesTerm = card.search.includes(normalizedTerm);
  const matchesLevel = level === "all" || card.level === level;
  return matchesTerm && matchesLevel;
}

export function filterTopics(cards, term = "", level = "all") {
  return cards.filter((card) => matchesTopic(card, term, level));
}

export function formatResultsCount(count) {
  return `${count} conteúdo${count === 1 ? "" : "s"} encontrado${count === 1 ? "" : "s"}`;
}

export function formatProgressCount(count) {
  return `${count} concluído${count === 1 ? "" : "s"}`;
}

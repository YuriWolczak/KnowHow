import { beforeEach, describe, expect, it } from "vitest";

import { initializeStudyPath } from "../../examples/web/controller.js";

function renderFixture() {
  document.body.innerHTML = `
    <input id="topic-search" type="search">
    <select id="level-filter">
      <option value="all">Todos</option>
      <option value="basic">Básico</option>
      <option value="intermediate">Intermediário</option>
    </select>
    <p id="results-count"></p>
    <p id="progress-summary"></p>
    <p id="empty-state" hidden>Nenhum resultado</p>
    <section>
      <article data-topic-card data-level="basic" data-search="programação lógica">
        <h2>Programação</h2>
        <button type="button" data-complete>Marcar como concluído</button>
      </article>
      <article data-topic-card data-level="intermediate" data-search="testes qualidade">
        <h2>Testes</h2>
        <button type="button" data-complete>Marcar como concluído</button>
      </article>
    </section>
  `;
}

beforeEach(() => {
  renderFixture();
  initializeStudyPath(document);
});

describe("initializeStudyPath", () => {
  it("renders the initial result and progress counts", () => {
    expect(document.querySelector("#results-count").textContent).toBe("2 conteúdos encontrados");
    expect(document.querySelector("#progress-summary").textContent).toBe("0 concluídos");
  });

  it("filters cards when the search input changes", () => {
    const searchInput = document.querySelector("#topic-search");
    searchInput.value = "testes";
    searchInput.dispatchEvent(new Event("input"));

    const cards = [...document.querySelectorAll("[data-topic-card]")];
    expect(cards[0].hidden).toBe(true);
    expect(cards[1].hidden).toBe(false);
    expect(document.querySelector("#results-count").textContent).toBe("1 conteúdo encontrado");
  });

  it("updates the completed state after a card button is clicked", () => {
    const firstButton = document.querySelector("[data-complete]");
    firstButton.click();

    expect(document.querySelector("[data-topic-card]").classList.contains("is-complete")).toBe(true);
    expect(firstButton.textContent).toBe("Desmarcar como concluído");
    expect(document.querySelector("#progress-summary").textContent).toBe("1 concluído");
  });
});

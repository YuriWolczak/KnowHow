import { describe, expect, it } from "vitest";

import {
  filterTopics,
  formatProgressCount,
  formatResultsCount,
} from "../../examples/web/logic.js";

const topics = [
  { level: "basic", search: "programação lógica primeiros passos" },
  { level: "basic", search: "variáveis tipos dados valores" },
  { level: "intermediate", search: "testes qualidade software" },
];

describe("filterTopics", () => {
  it("filters by a case-insensitive Portuguese search term", () => {
    expect(filterTopics(topics, "FUNÇÕES")).toEqual([]);
    expect(filterTopics(topics, "LÓGICA")).toEqual([topics[0]]);
  });

  it("filters by level while keeping all topics by default", () => {
    expect(filterTopics(topics)).toHaveLength(3);
    expect(filterTopics(topics, "", "basic")).toEqual([topics[0], topics[1]]);
    expect(filterTopics(topics, "", "intermediate")).toEqual([topics[2]]);
  });

  it("combines text and level filters", () => {
    expect(filterTopics(topics, "dados", "basic")).toEqual([topics[1]]);
    expect(filterTopics(topics, "dados", "intermediate")).toEqual([]);
  });
});

describe("formatters", () => {
  it("uses the singular form for one result", () => {
    expect(formatResultsCount(1)).toBe("1 conteúdo encontrado");
    expect(formatProgressCount(1)).toBe("1 concluído");
  });

  it("uses the plural form for zero and many results", () => {
    expect(formatResultsCount(0)).toBe("0 conteúdos encontrados");
    expect(formatProgressCount(0)).toBe("0 concluídos");
    expect(formatResultsCount(2)).toBe("2 conteúdos encontrados");
  });
});

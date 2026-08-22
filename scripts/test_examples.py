"""Valida exemplos fundamentais usados na primeira versão da Knowledge Base."""

from __future__ import annotations


def calculate_average(grades: list[float]) -> float:
    if len(grades) != 3:
        raise ValueError("informe exatamente três notas")
    if any(grade < 0 or grade > 10 for grade in grades):
        raise ValueError("as notas devem estar entre 0 e 10")
    return sum(grades) / len(grades)


def largest_of_three(first: int, second: int, third: int) -> int | None:
    if first == second == third:
        return None
    return max(first, second, third)


def classify_age(age: int) -> str:
    if age < 0:
        raise ValueError("a idade não pode ser negativa")
    if age <= 11:
        return "criança"
    if age <= 17:
        return "adolescente"
    return "adulto"


def count_vowels(text: str) -> int:
    vowels = set("aeiou")
    return sum(1 for character in text.lower() if character in vowels)


def main() -> None:
    assert calculate_average([8, 7, 9]) == 8
    assert largest_of_three(4, 9, 2) == 9
    assert largest_of_three(5, 5, 5) is None
    assert classify_age(0) == "criança"
    assert classify_age(11) == "criança"
    assert classify_age(12) == "adolescente"
    assert classify_age(18) == "adulto"
    assert count_vowels("Python e legal") == 4
    print("Exemplos fundamentais validados com sucesso.")


if __name__ == "__main__":
    main()

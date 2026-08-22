"""Verifica links relativos em arquivos Markdown do repositório."""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote, urlparse

LINK_PATTERN = re.compile(r"!?\[[^\]]*\]\(([^)]+)\)")


def is_external(target: str) -> bool:
    parsed = urlparse(target)
    return bool(parsed.scheme or target.startswith("//"))


def main() -> int:
    root = Path(__file__).resolve().parents[1]
    errors: list[str] = []

    for markdown_file in sorted(root.rglob("*.md")):
        if ".git" in markdown_file.parts:
            continue
        text = markdown_file.read_text(encoding="utf-8")
        for raw_target in LINK_PATTERN.findall(text):
            target = raw_target.strip().strip("<>")
            if not target or target.startswith("#") or is_external(target):
                continue
            path_part = unquote(target.split("#", 1)[0])
            if not path_part:
                continue
            candidate = (markdown_file.parent / path_part).resolve()
            try:
                candidate.relative_to(root.resolve())
            except ValueError:
                errors.append(f"{markdown_file.relative_to(root)} -> caminho fora do repositório: {target}")
                continue
            if not candidate.exists():
                errors.append(f"{markdown_file.relative_to(root)} -> destino inexistente: {target}")

    if errors:
        print("Links internos inválidos:")
        print("\n".join(f"- {error}" for error in errors))
        return 1

    print("Todos os links relativos apontam para arquivos ou diretórios existentes.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

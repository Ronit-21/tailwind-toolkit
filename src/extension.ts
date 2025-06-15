import * as vscode from "vscode";
import { tailwindDictionary } from "./tailwindDictionary";

// ────────────────────────────────────────────────────────────────────────────────
// Regex helpers
// ────────────────────────────────────────────────────────────────────────────────
const classNameRegex = /className=["'`]([^"'`]*)["'`]/;
const templateLiteralRegex = /className={`([\s\S]*?)`}/s; // dotAll ⇒ spans lines
const conditionalClassRegex = /(?:^|\s)([a-zA-Z0-9:-]+)(?=\s|$)/g;

// ────────────────────────────────────────────────────────────────────────────────
// Utility: Are we **anywhere inside** a className template literal?
// ────────────────────────────────────────────────────────────────────────────────
function isInsideClassName(
  document: vscode.TextDocument,
  position: vscode.Position,
  lookbackLines = 20
): boolean {
  for (let i = 0; i <= lookbackLines && position.line - i >= 0; i++) {
    const text = document.lineAt(position.line - i).text;
    if (text.includes("className=")) {
      return true;
    }
    // Only break if we find a closing tag that's not in a string or comment
    if (text.includes(">")) {
      const beforeTag = text.substring(0, text.indexOf(">"));
      if (
        !beforeTag.includes('"') &&
        !beforeTag.includes("'") &&
        !beforeTag.includes("//")
      ) {
        break;
      }
    }
  }
  return false;
}

// ────────────────────────────────────────────────────────────────────────────────
// Extension entry point
// ────────────────────────────────────────────────────────────────────────────────
export function activate(context: vscode.ExtensionContext) {
  console.log("Tailwind Explainer is now active!");

  const hoverProvider = vscode.languages.registerHoverProvider(
    [
      { scheme: "file", language: "javascriptreact" },
      { scheme: "file", language: "typescriptreact" },
      { scheme: "file", language: "jsx" },
      { scheme: "file", language: "tsx" },
    ],
    {
      provideHover(document, position) {
        // 1️⃣ Early‑exit: not inside className at all
        if (!isInsideClassName(document, position)) {
          return null;
        }

        // 2️⃣ Grab the word under cursor
        const wordRange = document.getWordRangeAtPosition(
          position,
          /[a-zA-Z0-9:-]+/
        );
        if (!wordRange) {
          return null;
        }

        const word = document.getText(wordRange);
        const tailwindClass = tailwindDictionary[word];
        if (!tailwindClass) {
          return null;
        }

        // 3️⃣ Build Markdown
        const md = new vscode.MarkdownString();
        md.appendMarkdown(`**${word}** (${tailwindClass.category})\n\n`);
        md.appendMarkdown(tailwindClass.description);

        if (tailwindClass.notes) {
          md.appendMarkdown(`\n\n*${tailwindClass.notes}*`);
        }

        md.isTrusted = true;
        md.supportHtml = true;

        return new vscode.Hover(md, wordRange);
      },
    }
  );

  context.subscriptions.push(hoverProvider);
}

export function deactivate() {}

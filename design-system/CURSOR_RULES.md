# Cursor Rules — HyprEarn UI

Strict rules for AI and developers building UI in this repo.

## Before creating any UI

1. Read `design-system/DESIGN_SYSTEM.md` and `design-system/TOKENS.md`
2. Check `design-system/COMPONENTS.md` and `design-system/FIGMA_TO_CODE_MAP.md`
3. Search `src/components/ui/` and `src/components/app/` for existing components

## Token usage

- **Always** use design tokens from `src/design-system/` or Tailwind `@theme` aliases
- **Never** invent one-off hex/rgba values if a token exists
- **Never** use random Tailwind spacing (e.g. `px-[13px]`) when a token matches — prefer `spacing.3` / `p-ds-3`
- Legacy `he-*` classes are allowed only in untouched code; migrate when editing a file

## Component reuse

- **Reuse** `Button`, `Card`, `Chip`, `BottomSheet`, etc. before writing new JSX
- **Reuse** `TradingRow`, `WalletRow`, `AppHeader` for product-specific patterns
- **Do not** duplicate wallet row or trade row markup inline

## Figma fidelity

- Figma is the visual reference — match it, do not redesign
- Screen width: **394px max**, centered
- Do not change colors, spacing, or typography to "improve" the design
- New screens should match patterns in `design-system/PATTERNS.md`

## Code quality

- Mobile-first layout only
- Keep components modular: UI primitives in `ui/`, product patterns in `app/`
- Prefer TypeScript for new components (`.tsx`)
- Preserve existing functionality when refactoring to design system components
- Refactor screen-by-screen; do not rebuild everything at once

## File locations

| What | Where |
|------|-------|
| Tokens | `src/design-system/` |
| Docs | `design-system/` |
| UI primitives | `src/components/ui/` |
| App patterns | `src/components/app/` |
| Screen compositions | `src/components/copilot/`, etc. |

## Do not

- Modify the Figma file
- Create a Figma design-system page
- Add new colors without adding them to `colors.ts` and `index.css` `@theme`
- Break existing screens during migration

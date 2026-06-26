# HyprEarn Mobile Design System

Source of truth: [HyprEarn Mobile App (Figma)](https://www.figma.com/design/DoY28sP7SwidihlLGoGrEa/HyprEarn-Mobile-App)

This design system lives in code. Figma is reference only — do not modify the Figma file.

## Design philosophy

HyprEarn is a **dark, mobile-first trading copilot**. The UI should feel precise, data-dense, and premium — not playful. Information hierarchy matters more than decoration.

## Visual direction

- **Canvas**: Pure black (`#000`) full-bleed backgrounds
- **Surfaces**: Charcoal layers (`#171717`, gradient cards from `#0e0e0e` → `#060606`)
- **Accent**: Cyan aquamarine (`#22ffff` / `#00f3b6`) for active states, highlights, and AI identity
- **Data semantics**: Green for long/success, red for short/danger, amber for warnings
- **Typography**: Manrope primary (Onest available for display); tight tracking on headings, uppercase micro-labels for stats

## Core principles

1. **Mobile-first** — Design for 394px width; center in viewport on larger screens
2. **Token-first** — Colors, spacing, radius, shadows come from `src/design-system/`
3. **Component reuse** — Prefer `src/components/ui/` and `src/components/app/` over inline JSX
4. **Figma fidelity** — Match spacing, radius, and typography from Figma; do not redesign
5. **Gradual migration** — Legacy `he-*` Tailwind classes remain during transition

## Dark mobile UI rules

- Default text on black: `color.text.primary` (white at 95% opacity)
- Muted copy: `color.text.muted` or `color.text.subtle` (#888)
- Borders are subtle: 5–14% white opacity; dashed dividers for list rows
- Cards use gradient fill + soft drop shadow + optional inset highlight
- Bottom sheets: `#171717` surface, 50px top radius, drag handle centered

## Layout rules

| Element | Value |
|---------|-------|
| Screen max width | 394px |
| Screen horizontal margin | 24px (`spacing.6`) |
| Header height | 58px |
| Bottom nav height | ~59px |
| Card corner radius | 16px (`radius.lg`) |
| Pill buttons/rows | 80px (`radius.pill`) |
| Sheet top radius | 50px (`radius.sheet`) |

## Consistency rules

- Use `ScreenShell` for every full-screen view
- Use `AppBottomNav` for primary navigation
- Use `Card variant="gradient"` for elevated panels (discovery bar, strategy selector)
- Use `Chip` for category filters; selected state = accent border + soft fill
- Use `TradingRow` for market signal lists
- Use `BottomSheet` for wallet connect and similar overlays

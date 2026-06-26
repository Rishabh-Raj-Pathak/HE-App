# Design Tokens

Implemented in `src/design-system/`. Tailwind aliases in `src/index.css` `@theme`.

## Color tokens

| Token | Value | Usage |
|-------|-------|-------|
| `color.bg.default` | `#000000` | Screen background |
| `color.bg.surface` | `#171717` | Bottom sheets, elevated panels |
| `color.bg.elevated` | `#0e0e0e` | Card gradient start |
| `color.bg.overlay` | `rgba(0,0,0,0.7)` | Modal/sheet backdrop |
| `color.text.primary` | `rgba(255,255,255,0.95)` | Headings, primary labels |
| `color.text.secondary` | `rgba(255,255,255,0.8)` | Chip default text |
| `color.text.muted` | `rgba(255,255,255,0.5)` | Secondary metadata |
| `color.text.subtle` | `#888888` | Footer links, badge labels |
| `color.accent.default` | `#22ffff` | Active accent, chevrons |
| `color.accent.aquamarine` | `#00f3b6` | Figma brand aquamarine |
| `color.accent.soft` | `rgba(34,255,255,0.1)` | Selected chip/card fill |
| `color.accent.border` | `rgba(34,255,255,0.35)` | Selected borders |
| `color.border.subtle` | `rgba(255,255,255,0.05)` | Bottom nav divider |
| `color.border.default` | `rgba(255,255,255,0.1)` | Section dividers |
| `color.border.input` | `rgba(255,255,255,0.5)` | Input/row outlines |
| `color.success.default` | `#4b9b72` | Long positions |
| `color.success.bright` | `#00a03a` | Timers, highlights |
| `color.success.badge` | `#4ade80` | "Installed" badge border |
| `color.danger.default` | `#b05858` | Short positions |
| `color.warning.default` | `#f2b500` | Amber alerts |
| `color.info.default` | `#2b7fff` | WalletConnect brand |

### Gradients

| Token | Usage |
|-------|-------|
| `gradient.card` | Discovery bar, strategy cards, CTA buttons |
| `gradient.headerGlow` | AI Copilot header background glow |

## Typography tokens

| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `typography.heading.lg` | 18px | 700 | Sheet titles |
| `typography.heading.md` | 17px | 700 | Screen titles |
| `typography.heading.sm` | 16px | 700 | Symbol names |
| `typography.body.md` | 16px | 500 | Wallet row labels |
| `typography.body.sm` | 14px | 400 | Footer text |
| `typography.body.xs` | 12px | 500 | Metadata bars |
| `typography.caption.sm` | 12px | 600 | Position labels |
| `typography.label.xs` | 10px | 600 uppercase | Stat labels, badges |
| `typography.button.sm` | 10px | 600 | "View Thesis" |

Font family: **Manrope** (`font.sans`). Figma variables also reference **Onest** (`font.display`).

## Spacing tokens

| Token | Value | Usage |
|-------|-------|-------|
| `spacing.1` | 4px | Tight gaps |
| `spacing.2` | 8px | Chip gaps, icon gaps |
| `spacing.3` | 12px | Card padding, list padding |
| `spacing.4` | 16px | Row internal padding |
| `spacing.5` | 20px | Header horizontal padding |
| `spacing.6` | 24px | Screen margins, sheet padding |
| `layout.screenMaxWidth` | 394px | Mobile frame |
| `layout.walletRowHeight` | 51px | Wallet option rows |

## Radius tokens

| Token | Value | Usage |
|-------|-------|-------|
| `radius.sm` | 8px | Small buttons |
| `radius.md` | 14px | Wallet icon containers |
| `radius.lg` | 16px | Cards, discovery panels |
| `radius.xl` | 21px | Header icon capsule |
| `radius.sheet` | 50px | Bottom sheet top corners |
| `radius.pill` | 80px | Wallet rows, primary CTAs |
| `radius.full` | 9999px | Badges, handles |

## Shadow tokens

| Token | Usage |
|-------|-------|
| `shadow.sm` | Connect wallet CTA |
| `shadow.md` | View Thesis button, search bars |
| `shadow.lg` | Cards, discovery panels |
| `shadow.xl` | Strategy popover |
| `shadow.cardInset` | Inset highlight on gradient surfaces |

## Border tokens

Use semantic border colors, not raw opacity in components:

- `border-border-subtle` — nav separators
- `border-border-default` — list dividers
- `border-border-input` — interactive row outlines
- `border-dashed` with `border-border-dashed` — trading signal rows

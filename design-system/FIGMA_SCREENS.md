# Figma Screens Reference

Figma file: [HyprEarn Mobile App](https://www.figma.com/design/DoY28sP7SwidihlLGoGrEa/HyprEarn-Mobile-App)

All frames are **394×852** unless noted.

---

## Phase 1 — Originally analyzed (design system v1)

| Section | Node | Frame analyzed | MCP tool | Used in code |
|---------|------|----------------|----------|--------------|
| **AI co-pilot** | `465:219` | `284:37655` Connected | `get_design_context`, `get_variable_defs` | `AiCopilotScreen`, `GradientHeader`, `TradingRow`, `StatCard`, `Chip`, `AppHeader`, `AppBottomNav` |
| **Connect Wallet** | `465:223` | `232:889` Connect Wallet sheet | `get_design_context` | `BottomSheet`, `WalletRow`, `Badge` |
| **Onboarding** | `465:222` | Metadata only | `get_metadata` | Tokens/docs only (screen not built) |
| **Vaults** | `465:220` | Metadata only | `get_metadata` | — |
| Full file | `206:24` | All sections listed | `get_metadata` | `FIGMA_TO_CODE_MAP.md` |

---

## Phase 2 — Newly analyzed (your linked screens)

| Screen | Section node | URL node-id | Frames analyzed | Key components extracted |
|--------|--------------|-------------|-----------------|--------------------------|
| **AI co-pilot** | `465:219` | `465-219` | `284:37655` Connected | (confirmed v1 extraction) |
| **Trade** | `411:6498` | `411-6498` | `262:31466` Trade Screen | `TokenRow`, `FilterChip`, `SectionHeader`, terminal bg `#0f0e0d` |
| **Portfolio** | `465:221` | `465-221` | `300:215` HyprEarn Mobile App V1 | `AssetRow`, `MetricCard` (QuickStat), performance chart pattern |
| **Position** | `418:6510` | `418-6510` | `269:80385` Positions main | `PositionCard`, tab bar with counts, summary tiles |
| **Profile** | `475:231` | `475-231` | `292:52199` profile1 | `ProfileBlock`, `MenuRow`, online badge, deposit CTA |
| **More** | `431:6527` | `431-6527` | `335:2337` more | `VaultCard`, `MetricCard`, gold theme tokens, More bottom sheet |

### Additional frames discovered (not yet built in code)

**Trade section** (`411:6498`):
- `263:36451` Trade Setup screen
- `263:37071`, `263:37691` HyprEarn Mobile App V1 variants
- `263:38311` Early exit optimization

**Position section** (`418:6510`):
- `272:85861` Positions expanded
- `272:92890` Position Edit TP/SL
- `276:94474` open orders
- `276:96657`, `278:97189`, `278:98406` additional variants

**Profile section** (`475:231`):
- `292:52678` profile 2 (extended menu / settings)

---

## What was NOT referenced from Figma

These sections exist in the file but were **not** design-context analyzed yet:

- `404:163` Ai-copilot (duplicate/alternate section)
- `465:220` Vaults (standalone section — partially covered via More/Vaults combo frame)
- `465:222` Onboarding (metadata only)
- `465:223` Connect Wallet (done in v1)

---

## Theme variants found across screens

| Theme | Screens | Key colors |
|-------|---------|------------|
| **Cyan / AI** | AI Copilot, Connect Wallet | `#22ffff`, `#00f3b6`, gradient cards |
| **Terminal dark** | Trade, Position, Portfolio | `#0f0e0d` bg, dashed row dividers |
| **Gold / Vaults** | More, Vaults | `#dcc395`, `#e8d5b5`, `#ccb17f`, `#717182` slate |
| **Profile** | Profile | `#171717` panels, `#4ade80` online, amber deposit border |

# Figma → Code Map

Figma file: `DoY28sP7SwidihlLGoGrEa` — **HE mobile app v1**

| Figma section / component | React component | File path | Key tokens |
|---------------------------|-----------------|-----------|------------|
| Screen frame (394×852) | `ScreenShell` | `src/components/ui/ScreenShell.tsx` | `layout.screenMaxWidth`, `color.bg.default` |
| `GradientHeader` | `GradientHeader` (screen) | `src/components/copilot/GradientHeader.jsx` | `gradient.card`, `color.accent.soft` |
| `SharedHeader` / AI title row | `AppHeader` | `src/components/app/AppHeader.tsx` | `typography.heading.md`, `color.text.primary` |
| Bottom nav bar | `AppBottomNav` | `src/components/app/AppBottomNav.tsx` | `color.border.subtle`, `spacing` nav padding |
| `ConnectWallet` sheet | `BottomSheet` + `WalletRow` | `src/components/ui/BottomSheet.tsx`, `src/components/app/WalletRow.tsx` | `color.bg.surface`, `radius.sheet` |
| Wallet list `Button` rows | `WalletRow` | `src/components/app/WalletRow.tsx` | `radius.pill`, `color.border.input` |
| `Installed` badge | `Badge variant="success"` | `src/components/ui/Badge.tsx` | `color.success.badge` |
| Category chips | `Chip` | `src/components/ui/Chip.tsx` | `color.accent.soft`, `color.accent.border` |
| Strategy selector | `StrategySelector` | `src/components/copilot/StrategySelector.jsx` | `gradient.card`, `shadow.xl` |
| Discovery bar card | `Card variant="gradient"` | `src/components/ui/Card.tsx` | `gradient.card`, `shadow.lg` |
| Trade signal row | `TradingRow` | `src/components/app/TradingRow.tsx` | `color.success/danger`, dashed border |
| `View Thesis` button | `Button size="sm"` | `src/components/ui/Button.tsx` | `gradient.card`, `shadow.md` |
| Stats card (3-col) | `StatCard` | `src/components/app/StatCard.tsx` | `typography.label.xs` |
| PNL hero | `PNLHero` | `src/components/copilot/PNLHero.jsx` | `color.text.primary`, header glow |
| Onboarding `ProgressButton` | `Button size="lg"` | `src/components/ui/Button.tsx` | `radius.pill` |
| Profile header | `ProfileBlock` | `src/components/app/ProfileBlock.tsx` | `radius.full`, `color.bg.muted` |
| Portfolio transactions | `TransactionRow` | `src/components/app/TransactionRow.tsx` | `color.border.default` |
| Empty market state | `EmptyState` | `src/components/ui/EmptyState.tsx` | `color.text.muted` |
| **Trade** `Trade Screen` `262:31466` | `TokenRow` | `src/components/app/TokenRow.tsx` | `color.bg.terminal`, dashed borders |
| Trade filter chips (All/Trending) | `FilterChip` | `src/components/ui/FilterChip.tsx` | `color.accent.amber`, `color.text.disabled` |
| Watchlist / Trending headers | `SectionHeader` | `src/components/ui/SectionHeader.tsx` | `typography.heading.sm` |
| Trade icon buttons | `IconButton` | `src/components/ui/IconButton.tsx` | `shadow.iconButton`, `color.border.icon` |
| **Portfolio** `300:215` | `AssetRow` | `src/components/app/AssetRow.tsx` | allocation bar, `color.success/danger` |
| Portfolio `QuickStat` | `MetricCard` | `src/components/app/MetricCard.tsx` | `gradient.card`, `shadow.lg` |
| Portfolio performance chart | — (screen) | TBD | `Card variant="gradient"` |
| **Position** `269:80385` | `PositionCard` | `src/components/app/PositionCard.tsx` | `gradient.card`, long/short colors |
| Position tab bar w/ counts | `Tabs` | `src/components/ui/Tabs.tsx` | `color.bg.panel` |
| Position summary tiles | `MetricCard` | `src/components/app/MetricCard.tsx` | `typography.label.micro` |
| **Profile** `292:52199` | `ProfileBlock` + `MenuRow` | `src/components/app/` | `color.success.online`, `color.bg.surface` |
| Profile stats card | `StatCard` | `src/components/app/StatCard.tsx` | Balance / PNL / Tier |
| Profile deposit CTA | `Button variant="secondary"` | `src/components/ui/Button.tsx` | `color.accent.amber` border |
| **More/Vaults** `335:2337` | `VaultCard` + `MetricCard` | `src/components/app/` | `color.gold.*`, `shadow.vaultGlow` |
| Vault DEX filter pills | `Chip variant="gold"` | `src/components/ui/Chip.tsx` | `gradient.goldTabActive` |
| More menu sheet rows | `MenuRow` | `src/components/app/MenuRow.tsx` | `color.gold.light` titles |

## Figma screens analyzed

See full frame-level detail in [`FIGMA_SCREENS.md`](./FIGMA_SCREENS.md).

| Section ID | Name | Frames analyzed | Status in prototype |
|------------|------|-----------------|---------------------|
| `465:219` | AI co-pilot | `284:37655` Connected | Built |
| `465:223` | Connect Wallet | `232:889` sheet | Built |
| `411:6498` | Trade | `262:31466` Trade Screen | Components ready, screen not built |
| `465:221` | Portfolio | `300:215` | Components ready, screen not built |
| `418:6510` | Position | `269:80385` Positions main | Components ready, screen not built |
| `475:231` | Profile | `292:52199` profile1 | Components ready, screen not built |
| `431:6527` | More | `335:2337` more (Vaults+sheet) | Components ready, screen not built |
| `465:222` | Onboarding | metadata only | Not built |
| `465:220` | Vaults | metadata only | Partially via More frame |

## Implementation notes

- Figma variables use **Onest**; shipped prototype uses **Manrope** — both loaded, Manrope is default
- Figma aquamarine `#00f3b6` mapped to `color.accent.aquamarine`; UI accent uses `#22ffff` from existing implementation
- Gradient header uses exported image asset — keep in screen component, not token
- Legacy `he-*` classes map 1:1 to new tokens during migration

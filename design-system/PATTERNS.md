# Layout Patterns

## Screen structure

```
ScreenShell
├── GradientHeader / AppHeader (optional, fixed or stacked)
├── Scrollable content area (flex-1 overflow-y-auto)
├── BottomSheet / Modal (overlay, z-50)
└── AppBottomNav (shrink-0, border-top)
```

## Navigation structure

Primary bottom nav (6 items):
1. AI Copilot (active label shown)
2. Trading
3. Wallet / Vaults
4. User / Profile
5. Insights
6. More / List

Only the active tab shows a text label below the icon.

## Dashboard pattern (AI Copilot)

1. **Gradient header** — PNL hero + stat card overlay
2. **Discovery bar** — Strategy selector card + category chips
3. **Metadata bar** — Expires in / active count / refresh
4. **Market list** — `TradingRow` items, dashed dividers

## List pattern

- Full-width rows with `px-3` (12px) horizontal padding
- Dashed `border-b` between trading rows
- Solid `border-b border-white/10` between card sections

## Form pattern

- Pill inputs (`radius.pill`, 51px height)
- Labels: uppercase, 10px, muted
- Primary CTA: full-width pill button at bottom

## Empty / error / loading

- **Empty**: `EmptyState` centered in `flex-1` content area
- **Loading**: pulse dot in `Button` or skeleton (TBD)
- **Error**: `Input variant="error"` + danger text

## Bottom sheet pattern

1. Backdrop `bg-overlay` (70% black)
2. Sheet `bg-surface`, `rounded-t-[50px]`
3. Drag handle: 40×4px, `rgba(136,136,136,0.4)`
4. Header: help | title | close (24px icons)
5. Content: vertical list with 12px gap
6. Footer link row (optional)

## Detail page pattern

- `Header` with back action
- Hero metric block
- Tabbed or segmented content
- Sticky bottom CTA (optional)

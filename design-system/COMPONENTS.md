# Components

## UI primitives (`src/components/ui/`)

### Button
- **Purpose**: Primary actions, CTAs, pill-shaped wallet-style rows
- **Variants**: `primary`, `secondary`, `ghost`, `accent`, `danger`
- **Sizes**: `sm`, `md`, `lg`
- **States**: `loading`, `disabled`
- **Figma**: Onboarding `ProgressButton`, Connect wallet rows

### IconButton
- **Purpose**: Help, close, back, utility actions
- **Props**: `label` (required for a11y), `size`
- **Figma**: Connect Wallet header icons

### Card
- **Purpose**: Elevated content containers
- **Variants**: `default`, `gradient`, `inset`
- **Figma**: Discovery bar, strategy selector panel

### Badge
- **Purpose**: Status pills ("Installed", risk level)
- **Variants**: `default`, `success`, `danger`, `warning`, `muted`, `info`
- **Figma**: Wallet row "INSTALLED" badge

### Chip
- **Purpose**: Horizontal category filters
- **States**: `selected` / default
- **Figma**: AI Copilot category chips (Trending, Breakout, etc.)

### Input / SearchBar
- **Purpose**: Text entry, search/filter
- **Variants**: `default`, `error`, `success`
- **Figma**: Future search/filter screens

### Tabs
- **Purpose**: Segmented section switching
- **Figma**: Trade/Portfolio tab patterns

### Header
- **Purpose**: Generic screen header with title + actions
- **Figma**: Connect Wallet, profile screens

### BottomNav
- **Purpose**: Generic bottom navigation shell
- **Figma**: 6-icon bottom bar on all main screens

### BottomSheet
- **Purpose**: Slide-up overlays (wallet connect)
- **Props**: `open`, `onClose`, `title`, drag-to-dismiss
- **Figma**: Connect Wallet sheet (`232:889`)

### Modal
- **Purpose**: Centered dialogs
- **Figma**: Strategy detail popover pattern (similar elevation)

### EmptyState
- **Purpose**: No-data placeholders
- **Figma**: Empty market list states

### ScreenShell
- **Purpose**: 394px mobile frame, black background
- **Figma**: All `394×852` frames

---

## App components (`src/components/app/`)

### AppHeader
- **Purpose**: Screen title + connect wallet CTA
- **Figma**: `SharedHeader` / AI Copilot header (`284:37657`)

### AppBottomNav
- **Purpose**: HyprEarn 6-tab navigation with active label
- **Figma**: Bottom nav on Connected screen

### WalletRow
- **Purpose**: Wallet provider selection row
- **Figma**: Connect Wallet list items (`232:905`–`232:929`)

### StrategyCard
- **Purpose**: Strategy selector trigger + list item
- **Figma**: Strategy selector in discovery bar

### TradingRow
- **Purpose**: Market signal list row with sparkline
- **Figma**: Trade signal rows in AI Copilot market section

### StatCard
- **Purpose**: 3-column PNL stats (Win Rate, Avg R:R, Active)
- **Figma**: Stats below PNL hero

### TransactionRow
- **Purpose**: Portfolio/history list item
- **Figma**: Portfolio section transaction lists

### ProfileBlock
- **Purpose**: User avatar + name block
- **Figma**: Profile screen header (`475:231`)

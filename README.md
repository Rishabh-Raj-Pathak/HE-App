# Hyprearn App Prototype

This project is a coded prototype of the Hyprearn app, built using **Vite + React + Tailwind CSS**.

The main goal of this project is to convert the existing Figma design into a working frontend prototype as accurately as possible. The design is already completed in Figma, and the implementation should closely follow the Figma file using **Figma MCP** inside Cursor.

## Project Goal

Build a high-fidelity coded prototype of the Hyprearn app that visually matches the Figma design.

This is not just a rough prototype. The focus is on matching the actual product design, including:

* Layout
* Spacing
* Typography
* Colors
* Borders
* Dividers
* Components
* States
* Responsiveness
* Overall visual polish

The app should feel like a premium modern trading SaaS product.

## Tech Stack

* Vite
* React
* Tailwind CSS
* Framer Motion, if animation is needed
* Lucide React, if icons are needed
* Figma MCP for reading and referencing the design

## Design Direction

The design direction is dark, clean, minimal, and premium.

The UI should follow Hyprearn’s current design language:

* Dark / near-black backgrounds
* Clean border-based layouts
* Subtle dividers instead of heavy card-like blocks
* Minimal modern SaaS aesthetics
* Sharp visual hierarchy
* Compact but readable spacing
* Premium trading/product dashboard feel
* Avoid unnecessary clutter
* Avoid random colors that are not present in the Figma design
* Avoid changing the UX or layout unless absolutely needed

## Important Implementation Notes

The Figma file is the source of truth.

Do not redesign the product based on assumptions. First inspect the Figma frame using Figma MCP, understand the structure, then implement it step by step.

Before coding any major screen, first analyze:

1. Overall page structure
2. Main layout sections
3. Component hierarchy
4. Typography scale
5. Color tokens
6. Spacing system
7. Borders, dividers, and radius
8. Button styles
9. Input styles
10. Responsive behavior if visible in Figma

## Current Priority

The first screen to build is the **AI Copilot screen**.

Start by replicating this screen exactly from the Figma design.

The AI Copilot screen should be implemented first before moving to other screens. Once this screen is complete and visually accurate, the remaining screens can be built using the same design system and component patterns.

## Expected Workflow

1. Connect to the Figma file using Figma MCP.
2. Inspect the AI Copilot screen/frame.
3. Understand the layout and component structure.
4. Create a clear implementation plan.
5. Build the screen step by step.
6. Use reusable components wherever possible.
7. Match the design as closely as possible.
8. Compare against Figma after implementation.
9. Refine spacing, colors, typography, and alignment.
10. Only then move to the next screen.

## Code Quality Guidelines

* Keep components clean and reusable.
* Avoid hardcoding random values unless they are directly derived from Figma.
* Use Tailwind utilities properly.
* Keep the file structure simple and understandable.
* Use semantic component names.
* Avoid unnecessary libraries unless required.
* Do not over-engineer the prototype.
* Prioritize visual accuracy and clean implementation.

## What Not To Do

* Do not redesign the screen.
* Do not simplify the design without permission.
* Do not use placeholder layouts if the Figma design is available.
* Do not randomly change spacing, colors, or hierarchy.
* Do not use default Tailwind colors if the Figma design has specific colors.
* Do not add unnecessary animations.
* Do not make the UI look generic.
* Do not treat this like a rough mockup.

## Final Expectation

The final coded prototype should look and feel very close to the original Figma design.

The goal is to make the Vite React app usable as a realistic frontend prototype of Hyprearn.

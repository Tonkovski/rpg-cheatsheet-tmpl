# RPG Cheatsheet Template

*Disclaimer: This project adapts AI generated contents and codes, and is provided as-is.*

An interactive, web-based template for creating RPG cheatsheets.

## Features
- **CSV-Driven**: Edit actions in `cheatsheet.csv` (id, priority, labels, text, pic).
- **Priorities & Labels**: Color-coded badges (HIGH/MEDIUM/LOW/NG) and customizable emoji labels in `label.json`.
  - `HIGH`: For questline-related missable actions.
  - `MEDIUM`: For standalone missible events.
  - `LOW`: For standard events available any time throughout the main quest.
  - `NG`: For discouraged acts and choices which trigger negative endings or end quests early.
- **Progress Tracking**: Local storage with import/export function.
- **Images**: Click to view full pics in new tabs.

## Quick Start
1. Edit `cheatsheet.csv` with your game's data.
2. Open `index.html` in a browser (or run `python -m http.server` for local server).
3. Double-click rows to tick off completed actions.

Perfect for any RPG — fork and customize.
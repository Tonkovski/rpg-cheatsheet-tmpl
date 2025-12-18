# RPG Cheatsheet Template

An interactive, web-based template for creating RPG cheatsheets. Load quests from a simple CSV file, track progress with double-click ticking, and visualize priorities (HIGH/MEDIUM/LOW/NG) with GitHub-style badges. Includes emoji labels, clickable image previews, and import/export for sharing progress.

## Features
- **CSV-Driven**: Edit quests in `cheatsheet.csv` (columns: id, priority, labels, text, pic).
- **Priorities & Labels**: Color-coded badges (e.g., HIGH in red) and emoji tooltips.
- **Progress Tracking**: Local storage with import/export JSON.
- **Images**: Click to view full pics in new tabs.
- **Responsive Table**: Clean, centered layout.

## Quick Start
1. Edit `cheatsheet.csv` with your game's data.
2. Open `index.html` in a browser (or run `python -m http.server` for local server).
3. Double-click rows to tick off completed quests.

Perfect for Dark Souls, Zelda, or any RPG—fork and customize!
# RPG Cheatsheet Template

*Disclaimer: This project adapts AI generated contents and codes, and is provided as-is.*

An interactive, web-based template for creating RPG cheatsheets.

## Features
- **CSV-Driven**: Edit actions in `cheatsheet.csv` (id, priority, labels, text, pic).
- **Priorities & Labels**: Color-coded badges (HIGH/MEDIUM/LOW/NG) and customizable emoji labels in `label.json`.
  - <span style="background-color: #d73a49; color: white; padding: 2px 6px; border-radius: 3px;">HIGH</span> for questline-related missable actions.
  - <span style="background-color: #a2eeef; color: black; padding: 2px 6px; border-radius: 3px;">MEDIUM</span> for standalone missible events.
  - <span style="background-color: #f6f8fa; color: #586069; padding: 2px 6px; border-radius: 3px;">LOW</span> for standard events available any time throughout the main quest.
  - <span style="background-color: #6f42c1; color: white; padding: 2px 6px; border-radius: 3px;">NG</span> for discouraged acts and choices which trigger negative endings or end quests early.
- **Progress Tracking**: Local storage with import/export function.
- **Images**: Click to view full pics in new tabs.

## Priority Levels
<p>Priority levels: 
    <ul>
        <li><span style="background-color: #d73a49; color: white; padding: 2px 6px; border-radius: 3px;">HIGH</span> for questline-related missable actions.</li>
        <li><span style="background-color: #a2eeef; color: black; padding: 2px 6px; border-radius: 3px;">MEDIUM</span> for standalone missible events.</li>
        <li><span style="background-color: #f6f8fa; color: #586069; padding: 2px 6px; border-radius: 3px;">LOW</span> for standard events available any time throughout the main quest.</li>
        <li><span style="background-color: #6f42c1; color: white; padding: 2px 6px; border-radius: 3px;">NG</span> for discouraged acts and choices which trigger negative endings or end quests early.</li>
    </ul>
</p>

## Quick Start
1. Edit `cheatsheet.csv` with your game's data.
2. Open `index.html` in a browser (or run `python -m http.server` for local server).
3. Double-click rows to tick off completed actions.

Perfect for any RPG — fork and customize.
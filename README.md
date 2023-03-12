## Other my plugins/themes
* 🪓 [Awesome UI](https://github.com/yoyurec/logseq-awesome-ui)
* 🎨 [Awesome Styler](https://github.com/yoyurec/logseq-awesome-styler)
* 📋 [Awesome Props](https://github.com/yoyurec/logseq-awesome-props)
* ⭐ [Awesome Links](https://github.com/yoyurec/logseq-awesome-links)
* ✨ [Tabler picker](https://github.com/yoyurec/logseq-tabler-picker)
* 📰 [Banners](https://github.com/yoyurec/logseq-banners-plugin)
* 📌 [Sticky Headers](https://github.com/yoyurec/logseq-sticky-headers)


## If you ❤ what i'm doing - you can support my work! ☕

<a href="https://www.buymeacoffee.com/yoyurec"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=yoyurec&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" /></a>

<h1 align="center">"Awesome Content" plugin for Logseq</h1>
<p align="center">
    <a href="https://github.com/yoyurec/logseq-awesome-content">
        <img src="https://github.com/yoyurec/logseq-awesome-content/raw/main/icon.png" alt="logo" width="128" height="128" />
    </a>
</p>

### 📝 Enhanced content blocks (tasks, quotes, flashcards, headers, queries, diagrams, etc...) plugin for Logseq

* ✅ Colored **tasks** statuses & priorities <a href="#-colored-tasks-statuses--priorities">🡖</a>
* 🚥`#.kanban` & `#.grid` **columns** (no plugin needed) <a href="#-kanban-board">🡖</a>
* 📝 Redesigned **admonition** blocks <a href="#-redesigned-admonition-blocks">🡖</a>
* 💬 Custom styled `#quote` <a href="#-blockquotes">🡖</a>
* 🔶 Custom styled Mermaid diagrams <a href="#-diagrams">🡖</a>
* 📋 Compact QUERY results header: settings, table toggler <a href="#-compact-query-results-header">🡖</a>
* 🚥 Today queries as columns in journal <a href="#-today-queries">🡖</a>
* 🧮 Rdesigned calculator <a href="#-redesigned-calculator">🡖</a>

![](https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/scr.png)


## Installation

### Plugin for desktop app

From Logseq store - `Plugins -> Marketplace`

![](https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/market.png)

### CSS for mobile app
Paste to your `custom.css` (media queries will hide duplicated CSS from desktop, where they already inserted via plugin):
```css
@import url("https://raw.githack.com/yoyurec/logseq-awesome-content/main/src/awesomeContent-cdn.css") only screen and (max-width: 1024px);
```

## Features
![](https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/settings-features.png)

### ✅ Colored tasks statuses & priorities

<img src="https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/tasks.png">

To customize colors - paste code to your `custom.css` file.
Use your own values, or set default `var(--ls-link-text-color)`
```css
:root {
    --awCo-marker-waiting: ...!important;
    --awCo-marker-later: ...!important;
    --awCo-marker-todo: ...!important;
    --awCo-marker-now-doing: ...!important;
    --awCo-marker-done: ...!important;

    --awCo-priority-a: ...!important;
    --awCo-priority-b: ...!important;
    --awCo-priority-c: ...!important;
}
```

### 🚥 Kanban board
Just add `#.kanban` tag to parent block and all children will become columns!
Add `#.kanban-300`, `#.kanban-400`, `#.kanban-500` instead of default to rule min columns width.
Recommend additionally to install [Logseq Plugin TODO Master](https://github.com/pengx17/logseq-plugin-todo-master)
and check [Logseq template](./extra/Kanban%20template.md)

<img src="https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/kanban.png" width="740">

### 📝 Redesigned admonition blocks

![](https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/admonition.png)

### 💬 Blockquotes
Just add `#quote` tag to parent block!

<img src="https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/quote.png" width="740">

### 🔶 Diagrams
 *Mermaid* diagrams redesign - theme related colors, light/dark mode support. Use plugin https://github.com/xyhp915/logseq-fenced-code-plus

<img src="https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/mermaid.png" width="740">

### 📋 Compact QUERY results header

![](https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/queries.png)

### 🚥 Today queries

![](https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/today-queries.png)


### 🧮 Redesigned calculator

![](https://github.com//yoyurec/logseq-awesome-content/raw/main/screenshots/calculator.png)

## What is Logseq?
Logseq is a privacy-first, open-source knowledge base. Visit https://logseq.com for more information.

## Support
* Read about Logseq plugin updates on Dicscord - https://discord.com/channels/725182569297215569/896368413243494430
* Ask about Logseq plugins on Dicscord - https://discord.com/channels/725182569297215569/752845167030960141
* If you have any questions, issues or feature request, use the issue submission on GitHub: https://github.com/yoyurec/logseq-awesome-content/issues

## Credits
* Icon - https://www.flaticon.com/free-icon/content_5617726
* Calculator styles - @Playerofgames https://github.com/playerofgames/logseq-mia-theme

## License

[MIT License](./LICENSE)

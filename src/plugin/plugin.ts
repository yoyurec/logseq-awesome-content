import { doc, body, globals } from '../modules/globals/globals';
import { checkPluginUpdate } from '../utils/utils';

import { toggleContentColumns, contentColumnsUnload } from '../modules/columns/columns';
import { toggleContentFlashcards, contentFlashcardsUnload } from '../modules/flashcards/flashcards';
import { toggleContentHeadersLabels, contentHeadersLabelsUnload } from '../modules/headersLabels/headersLabels';
import { toggleContentQuotes, contentQuotesUnload } from '../modules/quotes/quotes';
import { toggleContentTasks, contentTasksUnload } from '../modules/tasks/tasks';
import { contentMermaidUnload, toggleContentMermaid } from '../modules/mermaid/mermaid';
import { toggleTodayQueries } from '../modules/todayQueries/todayQueries';

export const pluginLoad = () => {
    body.classList.add(globals.isPluginEnabled);
    registerPlugin();

    runStuff();

    setTimeout(() => {
        // Listen plugin unload
        logseq.beforeunload(async () => {
            pluginUnload();
        });
    }, 2000)

    if (globals.pluginConfig.pluginUpdateNotify) {
        setTimeout(() => {
            checkPluginUpdate();
        }, 8000)
    }
}

const pluginUnload = () => {
    body.classList.remove(globals.isPluginEnabled);
    unregisterPlugin();
    stopStuff();
}

const registerPlugin = async () => {

    setTimeout(() => {
        if (doc.head) {
            doc.head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" id="css-awesomeContent" href="lsp://logseq.io/${globals.pluginID}/dist/assets/awesomeContent.css">`)
        }
    }, 100)
}

const unregisterPlugin = () => {
    doc.getElementById('css-awesomeContent')?.remove();
}

// Main logic runners
const runStuff = async () => {
    setTimeout(() => {
        toggleContentTasks();
        toggleContentHeadersLabels();
        toggleContentColumns();
        toggleTodayQueries();
        toggleContentQuotes();
        toggleContentFlashcards();
        toggleContentMermaid();
    }, 2000);
}

const stopStuff = () => {
    contentTasksUnload();
    contentHeadersLabelsUnload();
    contentColumnsUnload();
    contentQuotesUnload();
    contentFlashcardsUnload();
    contentMermaidUnload();
}

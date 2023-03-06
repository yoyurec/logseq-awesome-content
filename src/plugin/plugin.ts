import { doc, body, globals } from '../modules/globals/globals';
import { checkPluginUpdate } from '../utils/utils';

import { contentColumnsLoad, contentColumnsUnload } from '../modules/content/columns/columns';
import { contentFlashcardsLoad, contentFlashcardsUnload } from '../modules/content/flashcards/flashcards';
import { contentHeadersLabelsLoad, contentHeadersLabelsUnload } from '../modules/content/headersLabels/headersLabels';
import { contentQuotesLoad, contentQuotesUnload } from '../modules/content/quotes/quotes';
import { contentTasksLoad, contentTasksUnload } from '../modules/content/tasks/tasks';
import { contentMermaidLoad } from '../modules/content/mermaid/mermaid';

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
        contentTasksLoad();
        contentHeadersLabelsLoad();
        contentColumnsLoad();
        contentQuotesLoad();
        contentFlashcardsLoad();
        contentMermaidLoad();
    }, 2000);
}

const stopStuff = () => {
    contentTasksUnload();
    contentHeadersLabelsUnload();
    contentColumnsUnload();
    contentQuotesUnload();
    contentFlashcardsUnload();
    contentMermaidLoad();
}

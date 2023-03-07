import { doc, globals, root } from '../globals/globals';

import todayQueriesStyles from './todayQueries.css?inline';

export const toggleTodayQueries = () => {
    if (globals.pluginConfig.todayQueriesColumns) {
        todayQueriesLoad();
    } else {
        todayQueriesUnload();
    }
}

export const todayQueriesLoad = async () => {
    root.style.setProperty('--awCo-today-queries-colums', `${globals.pluginConfig.todayQueriesColumns}`);
    logseq.provideStyle({ key: 'awCo-today-queries-css', style: todayQueriesStyles });
}

export const todayQueriesUnload = () => {
    root.style.setProperty('--awCo-today-queries-colums', '');
    doc.head.querySelector('style[data-injected-style^="awCo-today-queries-css"]')?.remove();
}

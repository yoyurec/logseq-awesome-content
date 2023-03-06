import { doc, globals } from '../globals/globals';

import columnsStyles from './columns.css?inline';

export const toggleContentColumns = () => {
    if (globals.pluginConfig.contentColumns) {
        contentColumnsLoad();
    } else {
        contentColumnsUnload();
    }
}

export const contentColumnsLoad = async () => {
    if (!globals.pluginConfig.contentColumns) {
        return;
    }
    logseq.provideStyle({ key: 'awCo-columns-css', style: columnsStyles });
}

export const contentColumnsUnload = () => {
    doc.head.querySelector('style[data-injected-style^="awCo-columns-css"]')?.remove();
}

import { doc, globals } from '../globals/globals';

import headersLabelsStyles from './headersLabels.css?inline';

export const toggleContentHeadersLabels = () => {
    if (globals.pluginConfig.contentHeadersLabels) {
        contentHeadersLabelsLoad();
    } else {
        contentHeadersLabelsUnload();
    }
}

export const contentHeadersLabelsLoad = async () => {
    if (!globals.pluginConfig.contentHeadersLabels) {
        return;
    }
    logseq.provideStyle({ key: 'awCo-headersLabels-css', style: headersLabelsStyles });
}
export const contentHeadersLabelsUnload = () => {
    doc.head.querySelector('style[data-injected-style^="awCo-headersLabels-css"]')?.remove();
}

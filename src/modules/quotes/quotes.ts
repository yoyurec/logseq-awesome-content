import { doc, globals } from '../globals/globals';

import quoteStyles from './quotes.css?inline';

export const toggleContentQuotes = () => {
    if (globals.pluginConfig.contentQuotes) {
        contentQuotesLoad();
    } else {
        contentQuotesUnload();
    }
}

export const contentQuotesLoad = () => {
    logseq.provideStyle({ key: 'awCo-quote-css', style: quoteStyles });
}

export const contentQuotesUnload = () => {
    doc.head.querySelector('style[data-injected-style^="awCo-quote-css"]')?.remove();
}

import { doc, globals } from '../globals/globals';

import flashcardAwesomeStyles from './flashcardAwesome.css?inline';
import flashcardFlatStyles from './flashcardFlat.css?inline';

export const toggleContentFlashcards = () => {
    if (globals.pluginConfig.contentFlashcards != 'Default') {
        contentFlashcardsLoad();
    } else {
        contentFlashcardsUnload();
    }
}

export const contentFlashcardsLoad = async () => {
    let flashcardsStyles = '';
    switch (globals.pluginConfig.contentFlashcards) {
        case 'Awesome':
            flashcardsStyles = flashcardAwesomeStyles
            break;
        case 'Flat':
            flashcardsStyles = flashcardFlatStyles
            break;
    }
    logseq.provideStyle({ key: 'awCo-flashcard-css', style: flashcardsStyles });
}

export const contentFlashcardsUnload = () => {
    doc.head.querySelector('style[data-injected-style^="awCo-flashcard-css"]')?.remove();
}

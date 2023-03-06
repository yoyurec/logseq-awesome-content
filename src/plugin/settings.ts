import { LSPluginBaseInfo } from '@logseq/libs/dist/LSPlugin.user';

import { objectsKeysDiff } from '../utils/utils';
import { globals } from '../modules/globals/globals';

import { settingsConfig } from './settingsConfig';
import { toggleContentTasks } from '../modules/content/tasks/tasks';
import { toggleContentColumns } from '../modules/content/columns/columns';
import { toggleContentQuotes } from '../modules/content/quotes/quotes';
import { toggleContentFlashcards } from '../modules/content/flashcards/flashcards';
import { toggleContentMermaid } from '../modules/content/mermaid/mermaid';
import { toggleContentHeadersLabels } from '../modules/content/headersLabels/headersLabels';

import './settings.css';

export const settingsLoad = () => {
    logseq.useSettingsSchema(settingsConfig);
    globals.pluginConfig = logseq.settings;

    // Listen settings update
    logseq.onSettingsChanged((settings, oldSettings) => {
        onSettingsChangedCallback(settings, oldSettings);
    });
}

// Setting changed
export const onSettingsChangedCallback = (settings: LSPluginBaseInfo['settings'], oldSettings: LSPluginBaseInfo['settings']) => {
    globals.pluginConfig = { ...settings };
    const settingsChangedKey = objectsKeysDiff({ ...oldSettings }, globals.pluginConfig)
    if (!settingsChangedKey.length) {
        return;
    }

    if (settingsChangedKey.includes('contentTasks')) {
        toggleContentTasks();
    }
    if (settingsChangedKey.includes('contentColumns')) {
        toggleContentColumns();
    }
    if (settingsChangedKey.includes('contentQuotes')) {
        toggleContentQuotes();
    }
    if (settingsChangedKey.includes('contentFlashcards')) {
        toggleContentFlashcards();
    }
    if (settingsChangedKey.includes('contentHeadersLabels')) {
        toggleContentHeadersLabels();
    }
    if (settingsChangedKey.includes('contentMermaid')) {
        toggleContentMermaid();
    }
}

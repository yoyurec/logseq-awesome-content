import { LSPluginBaseInfo } from '@logseq/libs/dist/LSPlugin.user';

import { objectsKeysDiff } from '../utils/utils';
import { globals } from '../modules/globals/globals';

import { settingsConfig } from './settingsConfig';
import { toggleContentTasks } from '../modules/tasks/tasks';
import { toggleContentColumns } from '../modules/columns/columns';
import { toggleContentQuotes } from '../modules/quotes/quotes';
import { toggleContentFlashcards } from '../modules/flashcards/flashcards';
import { toggleContentMermaid } from '../modules/mermaid/mermaid';
import { toggleContentHeadersLabels } from '../modules/headersLabels/headersLabels';

import './settings.css';
import { toggleTodayQueries } from '../modules/todayQueries/todayQueries';

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
    if (settingsChangedKey.includes('todayQueriesColumns')) {
        toggleTodayQueries();
    }
}

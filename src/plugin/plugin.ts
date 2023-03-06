import { root, doc, body, globals } from '../modules/globals/globals';
import { checkPluginUpdate, getInheritedBackgroundColor } from '../utils/utils';

import { menuCalendarLoad, menuCalendarUnload } from '../modules/ui/extPlugins/calendar/calendar';
import { contentColumnsLoad, contentColumnsUnload } from '../modules/content/columns/columns';
import { setFeaturesCSSVars } from '../modules/ui/features/features';
import { contentFlashcardsLoad, contentFlashcardsUnload } from '../modules/content/flashcards/flashcards';
import { contentHeadersLabelsLoad, contentHeadersLabelsUnload } from '../modules/content/headersLabels/headersLabels';
import { contentQuotesLoad, contentQuotesUnload } from '../modules/content/quotes/quotes';
import { rightSidebarLoad, rightSidebarUnload } from '../modules/ui/sidebars/sidebars';
import { setTabsCSSVarsStyles, tabsPluginLoad, tabsPluginUnload } from '../modules/ui/extPlugins/tabs/tabs';
import { contentTasksLoad, contentTasksUnload } from '../modules/content/tasks/tasks';
import { modalObserverLoad, modalObserverUnload } from './modalObserver';
import { compactSidebarMenuLoad, compactSidebarMenuUnload } from '../modules/ui/sidebars/compactSidebarMenu/compactSidebarMenu';
import { headerLoad, headerUnload } from '../modules/ui/header/header';
import { headerFlashcardsButtonLoad, headerFlashcardsButtonUnload } from '../modules/ui/header/flashcardsButton/flashcardButton';
import { contentMermaidLoad } from '../modules/content/mermaid/mermaid';
import { hideRightSidebarToolbarLoad, hideRightSidebarToolbarUnload } from '../modules/ui/sidebars/hideRightSidebarToolbar/hideRightSidebarToolbar';

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
    logseq.provideModel({
        onThemeChangedCallback: onThemeChangedCallback,
        showSettingsPopup: showSettingsPopup,
    });

    logseq.App.registerUIItem(
        'toolbar',
        {
            key: 'AwesomeContent',
            template: `
                <a
                class="button" id="awCo-toggle-button"
                data-on-click="showSettingsPopup" data-rect>
                    <i class="ti ti-axe"></i>
                </a>
            `
        }
    );

    setTimeout(() => {
        if (doc.head) {
            const logseqCSS = doc.head.querySelector(`link[href="./css/style.css"]`);
            logseqCSS!.insertAdjacentHTML('afterend', `<link rel="stylesheet" id="css-awesomeContent" href="lsp://logseq.io/${globals.pluginID}/dist/assets/awesomeContent.css">`)
        }
    }, 100)

    setTimeout(() => {
        // Listen for theme activated
        logseq.App.onThemeChanged(() => {
            onThemeChangedCallback();
        });
        // Listen for theme mode changed
        logseq.App.onThemeModeChanged(() => {
            onThemeChangedCallback();
        });
    }, 2000)
}

export const showSettingsPopup = () => {
    logseq.showSettingsUI();
}

const unregisterPlugin = () => {
    doc.getElementById('css-awesomeContent')?.remove();
}

// Main logic runners
const runStuff = async () => {
    globals.getDOMContainers();
    setTimeout(() => {
        root.style.setProperty('--awCo-calc-bg', getInheritedBackgroundColor(doc.querySelector('.left-sidebar-inner')).trim());
        setFeaturesCSSVars();
        headerLoad();
        compactSidebarMenuLoad();
        headerFlashcardsButtonLoad();
        hideRightSidebarToolbarLoad();
        tabsPluginLoad();
        modalObserverLoad();
        contentTasksLoad();
        contentHeadersLabelsLoad();
        contentColumnsLoad();
        contentQuotesLoad();
        contentFlashcardsLoad();
        contentMermaidLoad();
        menuCalendarLoad();
    }, 2000);
    setTimeout(() => {
        rightSidebarLoad();
    }, 3000)
}

const stopStuff = () => {
    headerUnload();
    compactSidebarMenuUnload();
    headerFlashcardsButtonUnload();
    hideRightSidebarToolbarUnload();
    tabsPluginUnload();
    rightSidebarUnload();
    modalObserverUnload();
    contentTasksUnload();
    contentHeadersLabelsUnload();
    contentColumnsUnload();
    contentQuotesUnload();
    contentFlashcardsUnload();
    contentMermaidLoad();
    menuCalendarUnload();
}

export const onThemeChangedCallback = () => {
    setTabsCSSVarsStyles();
    setTimeout(() => {
        root.style.setProperty('--awCo-calc-bg', getInheritedBackgroundColor(doc.querySelector('.left-sidebar-inner')).trim());
    }, 500);
}

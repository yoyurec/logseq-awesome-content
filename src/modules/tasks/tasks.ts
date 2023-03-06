import { doc, body, globals } from '../globals/globals';

import tasksStyles from './tasks.css?inline';

export const toggleContentTasks = () => {
    if (globals.pluginConfig.contentTasks) {
        contentTasksLoad();
    } else {
        contentTasksUnload();
    }
}

export const contentTasksLoad = async () => {
    if (!globals.pluginConfig.contentTasks) {
        return;
    }
    logseq.provideStyle({ key: 'awCo-tasks-css', style: tasksStyles });
}

export const contentTasksUnload = () => {
    body.classList.remove('awCo-tasks');
    doc.head.querySelector('style[data-injected-style^="awCo-tasks-css"]')?.remove();
}

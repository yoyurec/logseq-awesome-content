import { SettingSchemaDesc } from '@logseq/libs/dist/LSPlugin.user';

export const settingsConfig: SettingSchemaDesc[] = [
    {
        key: 'contentHeading',
        title: 'Content',
        description: '',
        type: 'heading',
        default: null,
    },
    {
        key: 'contentTasks',
        title: '',
        description: 'Enable tasks status and priority restyling?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'contentColumns',
        title: '',
        description: 'Enable columns: "#.kanban" & "#.grid" tags?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'contentQuotes',
        title: '',
        description: 'Enable blockquote style for "#quote" tag?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'contentFlashcards',
        title: '',
        description: 'Flashcard style for "#card" tag?',
        type: 'enum',
        enumPicker: 'radio',
        enumChoices: ['Default', 'Awesome', 'Flat'],
        default: 'Awesome',
    },
    {
        key: 'contentHeadersLabels',
        title: '',
        description: 'Show headers (h1-h5) labels?',
        type: 'boolean',
        default: true,
    },
    {
        key: 'contentMermaid',
        title: '',
        description: 'Apply theme styles to Mermaid diagrams? (use plugin https://github.com/xyhp915/logseq-fenced-code-plus)',
        type: 'boolean',
        default: true,
    },
    {
        key: 'otherHeading',
        title: 'Other',
        description: '',
        type: 'heading',
        default: null,
    },
    {
        key: 'pluginUpdateNotify',
        title: '',
        description: 'Enable new version notifier on app load?',
        type: 'boolean',
        default: true,
    },
];
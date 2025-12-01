export interface Stat {
    value: number;
    label: string;
    prefix?: string;
    suffix?: string;
}

export interface StatsList {
    id: string;
    stats: Stat[];
    content?: {
        title: string;
        description: string;
        button?: {
            text: string;
            link: string;
            variant?: 'primary' | 'secondary' | 'ghostLight' | 'ghostDark';
        };
    };
}

export const statsLists: Record<string, StatsList> = {
    main: {
        id: 'main',
        stats: [
            {
                value: 400,
                label: 'kt CH₄ emitted annually (Germany)',
            },
            {
                value: 288,
                label: 'kt CH₄ escaping into atmosphere',
            },
            {
                value: 200,
                label: 'Underestimation by current methods',
                suffix: '%'
            },
            {
                value: 5,
                label: 'Project Partners',
            }
        ]
    },
    withContent: {
        id: 'withContent',
        stats: [
            {
                value: 400,
                label: 'kt CH₄/year from landfills',
            },
            {
                value: 30,
                label: 'Currently captured',
                suffix: '%'
            },
            {
                value: 50,
                label: 'Capture rate increase target',
                suffix: '%'
            },
            {
                value: 2,
                label: 'Year project duration',
            }
        ]
    }
};

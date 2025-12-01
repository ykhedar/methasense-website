import type { ImageMetadata } from 'astro';

// Import your logo images
// TODO: Replace these placeholder imports with actual partner logos
import logo1 from '../assets/images/logos/logoipsum-333.svg';
import logo2 from '../assets/images/logos/logoipsum-335.svg';
import logo3 from '../assets/images/logos/logoipsum-344.svg';
import logo4 from '../assets/images/logos/logoipsum-347.svg';
import logo5 from '../assets/images/logos/logoipsum-352.svg';

export interface Logo {
    src: ImageMetadata;
    alt: string; // The partner organization's name
    url?: string; // Optional link to partner website
}

export interface LogoList {
    id: string;
    logos: Logo[];
}

// MethaSense project partners - replace placeholder logos with actual partner logos
export const logoLists: Record<string, LogoList> = {
    main: {
        id: 'main',
        logos: [
            {
                src: logo1,
                alt: 'Gravionic GmbH',
                url: 'https://www.gravionic.de'
            },
            {
                src: logo2,
                alt: 'Deposerv Ingenieursgesellschaft mbH',
                url: 'https://www.deposerv.de'
            },
            {
                src: logo3,
                alt: 'Autrik UG(haftungsbeschränkt)',
                url: 'https://www.autrik.com'
            },
            {
                src: logo4,
                alt: 'Öko-Institut e.V.',
                url: 'https://www.oeko.de'
            },
            {
                src: logo5,
                alt: 'Chair of Measurement Technology, Saarland University',
                url: 'https://www.lmt.uni-saarland.de/index.php/de/'
            },
        ],
    },
};

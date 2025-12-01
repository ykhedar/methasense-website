export interface FaqItem {
    question: string;
    answer: string;
}

export interface FaqList {
    id: string;
    faqs: FaqItem[];
}

export const faqLists: Record<string, FaqList> = {
    main: {
        id: 'main',
        faqs: [
            {
                question: "What is the current problem with methane monitoring at landfills?",
                answer: "According to currently available figures for Germany, of the approximately 400 kt CH₄ emitted annually from landfills, just under 30% – around 110 kt CH₄ – are recorded, while about 288 kt CH₄ escape into the atmosphere. Measurements are currently based primarily on estimates, which often underestimate actual emissions by up to 200%."
            },
            {
                question: "What technologies does MethaSense use?",
                answer: "MethaSense uses drones equipped with highly sensitive multi-gas sensors, camera systems, and LiDAR for obstacle detection. The AI component includes neural networks such as CNNs, RNNs, and LSTMs for data processing, anomaly detection, and emission trend prediction. Sensor fusion and adaptive calibration ensure maximum precision."
            },
            {
                question: "What are the expected outcomes of the project?",
                answer: "The solution increases both the quantity and quality of emissions data, enables the analysis of anomalies in landfill environments, and, in the medium term, increases the methane capture rate by up to 50% compared to conventional systems. The sensor is also multi-gas capable for future detection of hydrogen or ethane."
            },
            {
                question: "Who are the project partners?",
                answer: "The project partners include: Gravionic GmbH (www.gravionic.de), Deposerv Ingenieursgesellschaft mbH (www.deposerv.de), Autrik UG (www.autrik.com), Öko-Institut e.V. (www.oeko.de), and the Chair of Measurement Technology at Saarland University."
            },
            {
                question: "How is the project funded and what is the timeline?",
                answer: "The MethaSense project is funded by the Federal Ministry for Research, Technology and Space. Funding code: 02WDG1764D. The project runs from 01.11.2025 to 31.10.2027."
            }
        ]
    }
};

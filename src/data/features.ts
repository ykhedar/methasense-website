import { Plane, Brain, BarChart3, Camera, Radar, LineChart } from 'lucide-astro';

// Define the LucideIcon type based on the structure of Lucide icons
type LucideIcon = typeof Plane;

export interface Feature {
    icon: LucideIcon;
    title: string;
    description: string;
}

export interface FeatureList {
    id: string;
    features: Feature[];
}

// MethaSense feature lists
export const featureLists: Record<string, FeatureList> = {
    main: {
        id: 'main',
        features: [
            {
                icon: Plane,
                title: 'Digital Drone and Sensor Systems',
                description: 'Drones detect gas concentrations using highly sensitive multi-gas sensors, camera systems, and LiDAR for obstacle detection. Flexible sensor modules enable precise sampling without interfering with drone operation.'
            },
            {
                icon: Brain,
                title: 'AI-Powered Data Processing',
                description: 'Artificial intelligence, including neural networks such as CNNs, RNNs, and LSTMs, processes sensor data, detects anomalies, and enables the prediction of emission trends. Sensor fusion, adaptive calibration, and continuous anomaly detection ensure maximum precision.'
            },
            {
                icon: BarChart3,
                title: 'Data-Driven Optimization',
                description: 'The data collected enables the localization of emission hotspots, the prioritization of avoidance measures, and the maximization of energy utilization from landfill gas. Dashboards and visualization solutions help operators efficiently manage these measures.'
            },
            {
                icon: Camera,
                title: 'Real-Time Visualization',
                description: 'The collected data is visualized in real time, providing a clear basis for analysis and decision-making. Operators gain immediate insights into emission patterns and can respond quickly to changes.'
            },
            {
                icon: Radar,
                title: 'Multi-Gas Capability',
                description: 'The sensor is multi-gas capable, allowing it to be used for the detection of hydrogen or ethane in the future, extending the system\'s applications beyond methane monitoring.'
            },
            {
                icon: LineChart,
                title: 'Anomaly Detection & Prediction',
                description: 'Sensor fusion, adaptive calibration, and continuous anomaly detection ensure maximum precision even under complex environmental conditions, enabling predictive maintenance and proactive emission management.'
            }
        ]
    },
    secondary: {
        id: 'secondary',
        features: [
            {
                icon: Plane,
                title: 'Autonomous Flights',
                description: 'Automated drone operations for efficient data collection'
            },
            {
                icon: Brain,
                title: 'Machine Learning',
                description: 'Continuous improvement through advanced ML models'
            },
            {
                icon: BarChart3,
                title: 'Real-time Analysis',
                description: 'Instant data processing and visualization'
            }
        ]
    }
};

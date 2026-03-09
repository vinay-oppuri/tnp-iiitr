import {
    ShieldCheck, Code, Network, Database,
    MonitorSmartphone, Cpu, Braces, Binary, Boxes, Layers,
    Calculator, FunctionSquare, BarChart3, Atom, BookHeart, Bot,
    RadioTower, Car, Eye, Plane, Cloud, MapPin, Server,
    Activity, Hash, Scale, Share2, Wifi, HardDrive
} from "lucide-react";

const Academics = [
    {
        id: 1,
        title: "Computer Science and Engineering",
        courses: [
            { name: "Cyber Security", icon: ShieldCheck },
            { name: "Software Engineering", icon: Code },
            { name: "Computer Networks", icon: Network },
            { name: "Database Management Systems", icon: Database },
            { name: "Operating Systems", icon: MonitorSmartphone },
            { name: "Computer Architecture", icon: Cpu },
            { name: "Programming Languages", icon: Braces },
            { name: "Algorithms", icon: Binary },
            { name: "Data Structures", icon: Boxes },
            { name: "Discrete Mathematics", icon: Layers },
            { name: "Calculus", icon: FunctionSquare },
            { name: "Linear Algebra", icon: Calculator },
            { name: "Probability and Statistics", icon: BarChart3 },
            { name: "Humanities", icon: BookHeart },
        ],
        facilities: "The Department of Computer Science and Engineering at Indian Institute of Information Technology, Raichur, aims to provide high-quality education and research opportunities. The department attempts to expose students to an inter-disciplinary curriculum along with high emphasis on fundamental concepts to drive future innovation."
    },
    {
        id: 2,
        title: "Artificial Intelligence & Data Science",
        courses: [
            { name: "Artificial Intelligence and Machine Learning", icon: Bot },
            { name: "Data Science", icon: BarChart3 },
            { name: "Cyber Security", icon: ShieldCheck },
            { name: "Software Engineering", icon: Code },
            { name: "Computer Networks", icon: Network },
            { name: "Database Management Systems", icon: Database },
            { name: "Operating Systems", icon: MonitorSmartphone },
            { name: "Computer Architecture", icon: Cpu },
            { name: "Programming Languages", icon: Braces },
            { name: "Algorithms", icon: Binary },
            { name: "Data Structures", icon: Boxes },
            { name: "Discrete Mathematics", icon: Layers },
            { name: "Calculus", icon: FunctionSquare },
            { name: "Linear Algebra", icon: Calculator },
            { name: "Probability and Statistics", icon: BarChart3 },
            { name: "Humanities", icon: BookHeart },
        ],
        facilities: "The Artificial Intelligence and Data Science academic curriculum is designed to bridge the gap between theoretical computer science and real-world problem-solving. It is an intensive program where we are constantly challenged to extract meaningful insights from massive datasets and build systems that learn and adapt."
    }
]

export { Academics as AcademicsData }



const Research = [
    {
        id: 1,
        title: "Computer Science and Engineering (CSE)",
        courses: [
            { name: "Applied Computer Science (AI, DL, ML, IoT, Data Science, etc.)", icon: Bot },
            { name: "Theoretical Computer Science (Algorithms)", icon: Binary },
        ],
        facilities: "The faculty members at IIITR have interdisciplinary research interests with thrust areas including Applied Computer Science and Theoretical Computer Science."
    },
    {
        id: 2,
        title: "Communication and Computing Engineering (CCE)",
        courses: [
            { name: "Next-Generation Communication", icon: RadioTower },
            { name: "Autonomous Vehicles", icon: Car },
            { name: "Computer Vision", icon: Eye },
            { name: "Drone Communication", icon: Plane },
            { name: "Internet of Things", icon: Cloud },
            { name: "Intelligent Transportation Systems", icon: MapPin },
            { name: "Edge/Fog Computing", icon: Server },
        ],
        facilities: "Focuses on Next-Generation Communication, Autonomous Vehicles, Computer Vision, Drone Communication, Internet of Things, Intelligent Transportation Systems, and Edge/Fog Computing."
    },
    {
        id: 3,
        title: "Mathematics and Computing (MC)",
        courses: [
            { name: "Geometry of Banach Spaces", icon: Boxes },
            { name: "Linear Operators", icon: Activity },
            { name: "Number Theory", icon: Hash },
            { name: "Fractional Differential Equations", icon: FunctionSquare },
            { name: "Controllability, Stability Theory", icon: Scale },
            { name: "Complex Network Dynamics with AI", icon: Share2 },
            { name: "Spectral Graph Theory", icon: BarChart3 },
            { name: "Complex Systems, and Network Analysis", icon: Network },
        ],
        facilities: "Covers Geometry of Banach Spaces, Linear Operators, Number Theory, Fractional Differential Equations, Controllability, Stability Theory, Complex Network Dynamics, Spectral Graph Theory, and Network Analysis."
    },
    {
        id: 4,
        title: "Networked Intelligence Transportation System (N-ITS) Lab",
        courses: [
            { name: "Self-driving vehicles", icon: Car },
            { name: "Drone", icon: Plane },
            { name: "Intelligent Transportation Systems", icon: MapPin },
            { name: "5G, and Beyond", icon: Wifi },
            { name: "Computing (AGX Xavier, LiDAR, etc.)", icon: HardDrive },
        ],
        facilities: "N-ITS consists of Ph.D., UG, and Intern students working on next-generation technologies. The lab contains AGX Xavier, Turtle bot3, LiDAR, High Computing Server, etc., and runs sponsored projects."
    }
]
export { Research as ResearchData }

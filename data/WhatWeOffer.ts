import {
    ShieldCheck, Code, Network, Database,
    MonitorSmartphone, Cpu, Braces, Binary, Boxes, Layers,
    Calculator, FunctionSquare, BarChart3, Atom, BookHeart, Bot
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
        facilities: "Some paragraph about the facilities"
    }
]

export { Academics as AcademicsData }



const Research = [
    {
        id: 1,
        title: "Computer Science and Engineering",
        courses: [
            { name: "Network Security", icon: ShieldCheck },
            { name: "High Performance Computing", icon: Cpu },
            { name: "Distributed Algorithms", icon: Binary },
            { name: "Blockchain Technology", icon: Layers },
            { name: "Cloud Infrastructure", icon: Network },
            { name: "Embedded Systems", icon: Boxes },
            { name: "Software Verification", icon: Code },
            { name: "Human Computer Interaction", icon: MonitorSmartphone },
        ],
        facilities: "The department provides state-of-the-art research facilities including high-performance computing clusters"
    },
    {
        id: "2",
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
        ],
        facilities: "Some paragraph about the facilities"
    }
]
export { Research as ResearchData }
const BarItems = [
    {
        id: 1,
        heading: "Home",
        route: "/",
    },
    {
        id: 2,
        heading: "About Us",
        route: "/",
    },
    {
        id: 3,
        heading: "Why Recruit Us",
        route: "/",
    },
    {
        id: 4,
        heading: "Recruitment Process",
        route: "/",
    },
    {
        id: 5,
        heading: "For Companies",
        route: "/",
        drop: [
            {
                id: 5.1,
                heading: "Internship Brochure",
                href: "/INTERNSHIP_BROCHURE.pdf",
            },
            {
                id: 5.2,
                heading: "Placement Brochure",
                href: "/PLACEMENT_BROCHURE.pdf",
            },
            {
                id: 5.3,
                heading: "Recruitment Form",
                href: "https://forms.gle/c8aXW35ay6L34Dro9",
            },
        ],
    },
    {
        id: 6,
        heading: "For Students",
        route: "/",
        drop: [
            {
                id: 6.1,
                heading: "Internship Rules",
                href: "https://drive.google.com/file/d/1kLIgPIYWsZQKrXbGTBuJq5CiRMz2CBKw/view?usp=sharing",
            },
            {
                id: 6.2,
                heading: "Placement Rules",
                href: "https://drive.google.com/file/d/1ixv4FdMTPm8C28ga4K7WHqVwV9ef8NkB/view?usp=sharing",
            },
        ],
    },
    {
        id: 7,
        heading: "Team Members",
        route: "https://iiitr.ac.in/contact",
    },
];

export default BarItems;

export type TeamMember = {
    id: string;
    name: string;
    role: string;
    image: string;
    email?: string;
    linkedin?: string;
};

export const facultyIncharge: TeamMember[] = [
    {
        id: "fic-1",
        name: "Dr. Jahnvi Tiwari",
        role: "Faculty In-Charge (T&P)",
        image: "/images/core-members/jahnvi.jpg",
        email: "fic.csc@iiitr.ac.in",
    },
    {
        id: "fic-2",
        name: "Dr. Dheerendra",
        role: "Placement Officer",
        image: "/images/core-members/dheerendra.jpg",
        email: "dheerendra@iiitr.ac.in",
    },
    {
        id: "fic-3",
        name: "Abhijeet",
        role: "Consultant - Corporate Relation",
        image: "/images/core-members/abhijeet.jpeg",
        email: "csc@iiitr.ac.in",
    },
    // {
    //     id: "fic-3",
    //     name: "Mitalee Agrawal",
    //     role: "Professor of Practice - Corporate Relation",
    //     image: "/images/core-members/mitalee.jpg",
    //     email: "vijaymita94@gmail.com",
    // },
];

export const studentCoordinator: TeamMember = {
    id: "1",
    name: "Rudra",
    role: "Student Coordinator",
    image: "/images/team-members/rudra.jpg",
    email: "ad23b1047@iiitr.ac.in",
    linkedin: "https://www.linkedin.com/in/rudra-pratap-singh-677149314/"
}

export const volunteers: TeamMember[] = [
    {
        id: "vol-1",
        name: "Aman Kumar",
        role: "Volunteer",
        image: "/images/team-members/aman.jpeg",
        email: "cs23b1003@iiitr.ac.in",
        linkedin: "https://www.linkedin.com/in/aman-kumar-6082321a9/"
    },
    {
        id: "vol-2",
        name: "Subhav Kumar",
        role: "Volunteer",
        image: "/images/team-members/subhav.png",
        email: "cs23b1071@iiitr.ac.in",
        linkedin: "https://www.linkedin.com/in/subhav-kumar-706401200/"
    },
    {
        id: "vol-3",
        name: "Deepak Kumar",
        role: "Volunteer",
        image: "/images/team-members/deepak.png",
        email: "ad23b1016@iiitr.ac.in",
        linkedin: "https://www.linkedin.com/in/deepak-kumar-673a7830a/"
    },
    {
        id: "vol-4",
        name: "Ansh Gupta",
        role: "Volunteer",
        image: "/images/team-members/ansh.jpg",
        email: "ad23b1005@iiitr.ac.in",
        linkedin: "https://www.linkedin.com/in/ansh-gupta-iiitr/"
    }
];

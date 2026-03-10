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
        image: "/images/team/placeholder.png",
        email: "fic.csc@iiitr.ac.in",
    },
    {
        id: "fic-2",
        name: "Abhijeet",
        role: "Consultant - Corporate Relation",
        image: "/images/team/placeholder.png",
        email: "csc@iiitr.ac.in",
    },
    {
        id: "fic-3",
        name: "Mithalee Agarwal",
        role: "Professor of Practice - Corporate Relation",
        image: "/images/team/placeholder.png",
        email: "vijaymita94@gmail.com",
    },
];

export const studentCoordinators: TeamMember[] = [
    {
        id: "sc-1",
        name: "Student Name 1",
        role: "Student Coordinator",
        image: "/images/team/placeholder.png",
        email: "student1@iiitr.ac.in",
    },
    {
        id: "sc-2",
        name: "Student Name 2",
        role: "Student Coordinator",
        image: "/images/team/placeholder.png",
        email: "student2@iiitr.ac.in",
    },
    {
        id: "sc-3",
        name: "Student Name 3",
        role: "Student Coordinator",
        image: "/images/team/placeholder.png",
        email: "student3@iiitr.ac.in",
    },
    {
        id: "sc-4",
        name: "Student Name 4",
        role: "Student Coordinator",
        image: "/images/team/placeholder.png",
        email: "student4@iiitr.ac.in",
    },
];

export const volunteers: TeamMember[] = [
    {
        id: "vol-1",
        name: "Volunteer 1",
        role: "Volunteer",
        image: "/images/team/placeholder.png",
    },
    {
        id: "vol-2",
        name: "Volunteer 2",
        role: "Volunteer",
        image: "/images/team/placeholder.png",
    },
    {
        id: "vol-3",
        name: "Volunteer 3",
        role: "Volunteer",
        image: "/images/team/placeholder.png",
    },
    {
        id: "vol-4",
        name: "Volunteer 4",
        role: "Volunteer",
        image: "/images/team/placeholder.png",
    }
];

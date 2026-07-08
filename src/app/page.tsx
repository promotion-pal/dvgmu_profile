export default function Index() {
  const employee = {
    id: "EMP-2024-001",
    name: "Ростислав Коноплев",
    position: "Senior Fullstack Developer",
    department: "IT Department",
    email: "rostislav.konoplev@company.com",
    phone: "+7 (999) 123-45-67",
    location: "Moscow, Russia",
    joinDate: "January 2020",
    status: "Active",
    avatar: null,
    skills: ["React", "TypeScript", "Go", "PostgreSQL", "Docker", "gRPC"],
    projects: [
      { name: "Digital Platform", role: "Tech Lead", status: "In Progress" },
      { name: "Analytics System", role: "Developer", status: "Completed" },
      { name: "Mobile App", role: "Consultant", status: "Planning" },
    ],
    stats: {
      tasksCompleted: 142,
      projectsActive: 3,
      yearsExperience: 5,
    },
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return PROFILES.map(item => <></>);
}
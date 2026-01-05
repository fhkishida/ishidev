export const profile = {
    name: "Fabricio Ishida",
    headline: "FullStack Software Engineer | React | PHP | Python",
    location: "Ribeirão Preto, São Paulo, Brazil",
    email: "ishida.fabricio@gmail.com",
    linkedin: "www.linkedin.com/in/fabrício-ishida",

    summary: [
        "Senior software engineer with experience building scalable, high-performance systems for both enterprise and high-traffic digital platforms.",
        "Currently working as a backend developer at Emagine (allocated to Philip Morris International) on a global platform processing millions of user records with strict SLA and low-latency requirements.",
        "Strong background in cloud-native architectures, serverless systems, and graph-based data modeling using AWS, GraphQL, and Amazon Neptune.",
    ],

    topSkills: ["Go", "AWS", "Neptune", "GraphQL", "Laravel", "React"],

    stats: [
        { label: "Global scale", value: "Millions of users" },
        { label: "SLA", value: "10 min" },
        { label: "APIs", value: "<300ms" },
    ],

    experience: [
        {
            company: "Emagine (Philip Morris International)",
            role: "Senior Backend Developer",
            period: "Mar 2024 — Present",
            place: "Lisboa, Portugal",
            bullets: [
                "Processing millions of user records worldwide, ensuring data availability within 15 minutes SLA.",
                "Modeling and storing complex relationships using Amazon Neptune (GraphDB).",
                "Exposing data through GraphQL APIs (AWS AppSync) with sub-300ms response times.",
                "Building serverless and containerized solutions using AWS Lambda and ECS.",
            ],
            tech: ["AWS", "Lambda", "ECS", "AppSync", "Neptune", "GraphQL"],
        },
        {
            company: "YMonetize",
            role: "Senior Fullstack Engineer",
            period: "Aug 2024 — Mar 2025",
            place: "Ribeirão Preto, Brazil",
            bullets: [
                "Built a dynamic URL redirection system (YLink) routing traffic based on ROI performance.",
                "Developed and maintained a Single Sign-On (SSO) platform for internal systems.",
                "Created a mass Facebook Ads publishing platform supporting multiple ad accounts at scale.",
            ],
            tech: ["Laravel", "Golang", "React", "MySQL", "PostgreSQL", "Docker"],
        },
        {
            company: "Metal Toad",
            role: "Fullstack Software Engineer",
            period: "Jun 2023 — Aug 2024",
            place: "Oregon, USA",
            bullets: [
                "Development and maintenance of features and pages using React, React Query, and React Testing Library.",
                "Worked with PHP, Python, Lambdas, and AWS Services.",
            ],
            tech: ["React", "React Query", "PHP", "Python", "AWS", "Neptune"],
        },
        {
            company: "Edify Education",
            role: "Fullstack Software Engineer",
            period: "Oct 2021 — Jun 2023",
            place: "Rio de Janeiro, Brazil",
            bullets: [
                "Built educational products (Booklab), a web platform used by kids to create books.",
                "Finalist at Reimagine Education Awards 2022 (pedagogical practices).",
            ],
            tech: ["Laravel", "React", "Node/NestJS", "S3", "Docker", "MySQL"],
        },
    ],

    projects: [
        {
            title: "Global Registration Platform",
            subtitle: "High-scale backend with GraphQL + Neptune",
            image: "/images/Philip-Morris.jpg",
            tags: ["AWS", "AppSync", "Neptune", "Lambda"],
            description:
                "Global platform to register and serve user data across multiple countries with strict SLAs.",
            href: "#",
        },
        {
            title: "YLink — ROI-based Redirection",
            subtitle: "Performance marketing routing engine",
            image: "/images/ym.png",
            tags: ["Laravel", "Golang", "MySQL"],
            description:
                "Dynamic URL redirection system routing traffic based on ROI performance of destinations.",
            href: "#",
        },
    ],
};

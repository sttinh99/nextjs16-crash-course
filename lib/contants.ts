export type Event = {
  title: string;
  slug: string;
  image: string;
  location: string;
  date: string; // human-readable date
  time?: string; // human-readable time or range
  description?: string;
  tags?: string[];
  url?: string;
};

// Realistic upcoming/popular tech events. Images reference files in public/images so
// they can be passed directly to Next.js <Image src={...} /> (public path).
export const events: Event[] = [
  {
    title: "React Summit 2026",
    slug: "react-summit-2026",
    image: "/images/event1.png",
    location: "Amsterdam, Netherlands & Online",
    date: "Mar 12–13, 2026",
    time: "09:00 - 18:00",
    description:
      "A community-driven conference focused on React, React Native and the surrounding ecosystem. Talks, workshops and networking.",
    tags: ["React", "Frontend", "Web"],
    url: "https://reactsummit.com/",
  },
  {
    title: "Node.js Interactive / NodeConf 2026",
    slug: "nodeconf-2026",
    image: "/images/event2.png",
    location: "Portland, OR, USA",
    date: "Apr 20–22, 2026",
    time: "10:00 - 17:00",
    description:
      "Official Node.js conference covering server-side JavaScript, performance, and ecosystem updates.",
    tags: ["Node.js", "Backend", "Performance"],
    url: "https://nodejs.org/en/",
  },
  {
    title: "JSConf US 2026",
    slug: "jsconf-us-2026",
    image: "/images/event3.png",
    location: "San Francisco, CA, USA",
    date: "May 15–16, 2026",
    time: "09:30 - 18:00",
    description:
      "Independent JavaScript conference with a mix of talks, workshops and community events — great for web and full-stack devs.",
    tags: ["JavaScript", "Web", "Tools"],
    url: "https://jsconf.com/",
  },
  {
    title: "AWS re:Invent (Dev Track) 2025",
    slug: "aws-reinvent-2025",
    image: "/images/event4.png",
    location: "Las Vegas, NV, USA & Online",
    date: "Dec 1–5, 2025",
    time: "All day",
    description:
      "Cloud, infrastructure and developer-focused sessions from AWS. The dev track covers services, serverless, and modern architectures.",
    tags: ["Cloud", "AWS", "DevOps"],
    url: "https://reinvent.awsevents.com/",
  },
  {
    title: "Google I/O (Developer Summaries)",
    slug: "google-io-2026",
    image: "/images/event5.png",
    location: "Mountain View, CA, USA & Online",
    date: "May 2026 (TBD)",
    time: "All day",
    description:
      "Google's annual developer conference — Android, web, AI, and cloud platform updates with hands-on codelabs.",
    tags: ["Android", "AI", "Web"],
    url: "https://events.google.com/io/",
  },
  {
    title: "Major Hackathon: Build the Future 2025",
    slug: "build-the-future-hack-2025",
    image: "/images/event6.png",
    location: "Remote (Global)",
    date: "Nov 28–30, 2025",
    time: "48 hours",
    description:
      "A large online hackathon that attracts student and professional teams building prototypes across web, mobile and AI categories.",
    tags: ["Hackathon", "AI", "Product"],
    url: "https://hackathon.example.com/",
  },
  {
    title: "Dev Meetup: Design Systems & Accessibility",
    slug: "design-systems-accessibility-2025",
    image: "/images/event-full.png",
    location: "Online meetup (Monthly)",
    date: "Dec 10, 2025",
    time: "18:30 - 20:00 (UTC)",
    description:
      "Local/online meetup covering practical design system patterns and accessibility best practices for component libraries.",
    tags: ["Accessibility", "Design Systems", "Frontend"],
    url: "https://meetup.example.com/design-systems",
  },
];

export default events;

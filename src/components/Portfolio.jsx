import React, { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Portfolio = () => {
  const projects = [
    {
      title: "Blockchain Voting System",
      description: "A secure voting system built with Ethereum and Web3.js.",
      gitHubLink: "https://github.com/sameera0406/blockchain-voting",
      challenges: [
        "Keeping votes secure and private at the same time.",
        "Handling many voters without slowing down the system.",
        "Making sure only real voters can vote once.",
        "Making the app easy for everyone to use.",
      ],
      solutions: [
        "Used Ethereum smart contracts to store votes securely and immutably.",
        "Optimized contract design to handle multiple voters efficiently.",
        "Implemented voter authentication with unique IDs to prevent double voting.",
        "Designed a simple, clear user interface for easy voting.",
      ],
    },
    {
      title: "Sarcasm Detector ML Project",
      description:
        "A machine learning model detecting sarcasm in text, built using NLP techniques.",
      colabLink:
        "https://colab.research.google.com/drive/1dPBpE5gnbqDjt3eo8nLe_Ou05Dg5AeXy?usp=sharing#scrollTo=s6-Q2VXSUeq2",
      challenges: [
        "Getting enough good examples of sarcastic sentences to train the model.",
        "Understanding sarcasm needs context, which is hard for computers.",
        "Sarcasm can be confused with jokes or irony, making detection tricky.",
        "Making the model work well on different kinds of text.",
      ],
      solutions: [
        "Collected a diverse dataset with labeled sarcastic and non-sarcastic examples.",
        "Used NLP techniques to capture context around sentences.",
        "Trained the model to distinguish sarcasm from jokes and irony using specific features.",
        "Tested and fine-tuned the model on different text sources for better accuracy.",
      ],
    },
    {
      title: "Portfolio Website",
      description: "Responsive developer portfolio using React and Tailwind.",
      challenges: [
        "Learning new technologies and best practices.",
        "Ensuring the site is responsive and user-friendly.",
        "Debugging and optimizing the code for performance.",
        "Customizing design to reflect my personal style.",
      ],
      solutions: [
        "Studied documentation and tutorials to get up to speed quickly.",
        "Used Tailwind CSS to create responsive layouts effortlessly.",
        "Performed thorough testing and debugging.",
        "Designed custom components for a consistent look and feel.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 p-6">
      <header className="flex flex-col items-center md:flex-row md:items-start md:justify-center gap-6 mb-10">
  {/* Image */}
  <img
    src="\sameera-profile.jpg"
    alt="Ragha Sameera Vasa"
    className="w-32 h-32 rounded-full object-cover border-4 border-indigo-300 shadow-lg"
  />

  {/* Name and Title */}
  <div className="text-center md:text-left z-10">
  <h1 className="text-4xl font-extrabold text-indigo-800 tracking-tight mb-2">
    Ragha Sameera Vasa
  </h1>
  <p className="text-lg text-gray-700">
    Frontend Developer | Full-Stack Learner | AI Explorer
  </p>
  <p className="mt-2 text-sm md:text-base text-gray-600 max-w-xl">
  Passionate about crafting engaging web experiences and building impactful digital solutions through the blend of creativity and code.
  </p>
</div>

</header>

      {/* Education Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-8">
          Education
        </h2>
        <div className="bg-white p-6 shadow rounded-xl text-gray-800">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">
            Bachelor of Technology (B.Tech)
          </h3>
          <p className="mb-1">Computer Science and Engineering</p>
          <p className="mb-1">GITAM University, Visakhapatnam</p>
          <p className="mb-1">2023 – Present (Currently in 2nd Year)</p>
          <p className="mb-4 font-semibold text-indigo-600">GPA: 9.64 / 10</p>

          <ul className="list-disc pl-5 space-y-2">
            <li>Actively building skills in web development and AI/ML.</li>
            <li>Developed and showcased multiple technical projects (see below).</li>
          </ul>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-8">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Frontend</h3>
            <ul className="space-y-2">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Web3.js — Intermediate</li>
              <li>React — Intermediate</li>
              <li>Tailwind CSS — Intermediate</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Backend</h3>
            <ul className="space-y-2">
              <li>Node.js — Intermediate</li>
              <li>Express.js — Intermediate</li>
              <li>REST API Development</li>
              <li>Firebase Authentication</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">AI / ML</h3>
            <ul className="space-y-2">
              <li>Python — Intermediate</li>
              <li>Scikit-learn</li>
              <li>Pandas</li>
              <li>NumPy</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Languages</h3>
            <ul className="space-y-2">
              <li>C — Advanced</li>
              <li>Java — Advanced</li>
              <li>Python — Intermediate</li>
            </ul>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h3 className="text-xl font-bold text-indigo-600 mb-4">Tools</h3>
            <ul className="space-y-2">
              <li>Git / GitHub</li>
              <li>Cursor</li>
              <li>Ethereum</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="mb-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-8">
          Projects
        </h2>

        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </section>
      </section>

      {/* Leadership & Volunteering Section */}
      <section className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-indigo-700 text-center mb-8">
          Leadership & Volunteering
        </h2>
        <div className="bg-white p-6 shadow rounded-xl text-gray-800 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-1">YES+ Club</h3>
            <p>
              <strong>Secretary</strong> – Organized well-being and leadership
              sessions for students. Promoted public speaking, emotional resilience,
              and mindfulness among peers. Facilitated workshops and campus
              activities to foster a growth mindset.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold text-indigo-600 mb-1">
              EduYouthMeet 2024
            </h3>
            <p>
              <strong>Core Team Member & Organizer</strong> – Played a key role in
              planning and executing South India's largest youth conference. Led
              outreach initiatives, coordinated speakers and volunteers, and managed
              event logistics for over 1500 participants.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16 max-w-4xl mx-auto text-center">
  <h2 className="text-3xl font-semibold text-indigo-700 mb-6">
    Personal Interests
  </h2>

  <div className="bg-white p-6 shadow rounded-xl text-gray-800 text-left">
    <p className="mb-4">
      When I am not engaged in technology, I dedicate time to several enriching
      activities that contribute to my personal growth:
    </p>
    <ul className="list-disc list-inside space-y-3">
      <li>
        <strong>Music:</strong> I enjoy a wide variety of music genres, which help me stay relaxed.
      </li>
      <li>
        <strong>Kuchipudi Dance:</strong> I am learning Kuchipudi, a classical Indian dance form,
        which allows me to explore rhythm, storytelling, and cultural heritage.
      </li>
      <li>
        <strong>Reading:</strong> I have a passion for reading, ranging from technology updates
        to interesting facts, which keeps me constantly learning.
      </li>
      <li>
        <strong>Films:</strong> Watching films is a way for me to relax and gain new perspectives
        by experiencing diverse stories and cultures.
      </li>
    </ul>
  </div>
</section>


      {/* Footer */}
      <footer className="text-center text-gray-500 mb-8">
        &copy; 2025 Ragha Sameera Vasa. All rights reserved.
      </footer>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="flex flex-col">
      <CardContent className="flex flex-col h-full">
        <div className="flex-grow flex flex-col">
          <h2 className="text-xl font-semibold text-indigo-700">{project.title}</h2>
          <p className="text-gray-700 mt-2">{project.description}</p>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="mt-4 text-indigo-600 font-semibold hover:underline self-start"
          >
            {showDetails ? "Hide Details ▲" : "Show Details ▼"}
          </button>

          {showDetails && (
            <div className="mt-4 space-y-4 overflow-auto max-h-60">
              <div>
                <h3 className="font-semibold text-indigo-600 mb-2">Challenges Faced:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {project.challenges.map((challenge, cidx) => (
                    <li key={cidx}>{challenge}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-indigo-600 mb-2">How I Solved Them:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {project.solutions.map((solution, sidx) => (
                    <li key={sidx}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6">
          {(project.gitHubLink || project.colabLink) ? (
            <a
              href={project.gitHubLink || project.colabLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>View Project</Button>
            </a>
          ) : (
            <Button disabled>No Link Available</Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;

# Ragha Sameera Vasa - Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills, projects, education, leadership activities, and contact information as a Frontend Developer, Full-Stack Learner, and AI Explorer.

---

## 🚀 Features

- **Fully built with React** using functional components and React hooks.
- **Tailwind CSS** for modern, responsive, and utility-first styling.
- **Reusable UI Components:** Custom `Button` and `Card` components for consistency.
- **Dynamic Projects Section:** Each project displays title, description, links, challenges, and solutions with show/hide details.
- **Skills Section:** Categorized skill cards showing technical proficiencies.
- **Education Section:** Detailed academic info with GPA and key highlights.
- **Leadership & Volunteering:** Highlights roles and contributions in student clubs and events.
- **Personal Interests:** Showcases hobbies and interests outside coding.
- **Contact Section:** Includes social media icons (Email, GitHub, LinkedIn) with smooth hover effects using `react-icons`.
- **Accessible external links** with proper `target="_blank"` and `rel="noopener noreferrer"`.
- **Smooth Hover Effects:** Buttons and social icons lift and change colors on hover for better interactivity.
- **Responsive Layout:** Grid and flexbox layouts ensure compatibility across devices.
- **Transitions & Animations:** CSS transitions for color and transform for UI polish.

---

## 📁 Project Structure & Components

- **Portfolio.jsx:** The main component assembling the entire portfolio page.
- **ProjectCard Component:** Handles rendering of individual project details with toggle functionality.
- **SkillCard Component:** Renders categorized lists of skills.
- **Contact.jsx:** A standalone contact section featuring email, GitHub, and LinkedIn icons from `react-icons/fa` with hover animations.
- **ui/Button.jsx:** Custom reusable button component with base styling and hover lift effect.
- **ui/Card.jsx:** Custom card component (assumed to provide styling wrapper around content).
- **Assets:** Profile picture (e.g. `sameera-profile.jpg`) placed in the public folder and used in the header.

---

## 🛠️ Technologies & Libraries Used

- **React** (Functional Components, useState hook)
- **Tailwind CSS** for utility-first responsive styling
- **React Icons** for social media icons (`FaEnvelope`, `FaGithub`, `FaLinkedin`)
- **JavaScript ES6+** (map, arrow functions, destructuring)
- **CSS Transitions & Transforms** via Tailwind for hover effects and animations

---

## 🎨 Styling Highlights

- Gradient backgrounds (`bg-gradient-to-br from-white to-blue-100`)
- Responsive grid layouts (`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`)
- Flexbox for header and button layout
- Rounded borders and shadows for cards and images
- Hover transitions for buttons and icons (color changes, scale-up lifting effect)
- Scrollable details with max height and overflow for project challenges & solutions

---

## 🚀 How to Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/sameera0406/portfolio.git
   cd portfolio

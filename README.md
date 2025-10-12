# Farah Abdi — Portfolio

Welcome to my personal portfolio website.  
This site highlights my projects, technical skills, and professional background in software engineering and data science.

### Live Demo
**Visit:** [https://portfolio.farahabdi.com](https://portfolio.farahabdi.com)

## Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Styling:** Tailwind CSS (utility-first design system)  
- **Animations:** GSAP, ScrollTrigger, Framer Motion (planned)  
- **Hosting:** AWS Lightsail  
- **Version Control & CI/CD:** GitHub Actions → Lightsail SSH Deployment Pipeline

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* **Node.js** and **npm**
  ```sh
  npm install npm@latest -g
  ```

* **Git** 
  ```sh
  git --version
  ```
  
### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Aabdi22k/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**  
   ```sh
   npm install
   ```

4. **Run locally**
   ```sh
   npx live-server
   ```

5. **(Optional) Configure deployment**  
   - Add your AWS Lightsail SSH credentials and domain in your GitHub repository secrets:
     ```bash
     HOST=<your-server-ip>
     USERNAME=<your-ssh-user>
     KEY=<your-private-key>
     ```
   - The GitHub Actions workflow in `.github/workflows/ci-cd.yml` will handle automatic deployment.

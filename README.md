# Farah Abdi — Portfolio

Welcome to my personal portfolio website.  
This site highlights my projects, technical skills, and professional background in software engineering and data science.

## Live Demo
**Visit:** [https://portfolio.farahabdi.com](https://portfolio.farahabdi.com)

## Built With
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url] 

## ⚙️ Getting Started

Follow these instructions to get a local copy of the project running, and understand how to modify or deploy it.

---

### Prerequisites

Make sure you have the following installed:

* **Node.js** and **npm** (for Tailwind builds or dev tools)
  ```sh
  npm install npm@latest -g
  ```

* **Git** (for cloning and version control)
  ```sh
  git --version
  ```

---

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/Aabdi22k/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**  
   (If you’re using Tailwind or a build setup)
   ```sh
   npm install
   ```

3. **Optional — Build Tailwind CSS**  
   If you’ve customized your Tailwind setup, rebuild styles:
   ```sh
   npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
   ```

4. **Run locally**
   - Option 1: Open directly in your browser  
     ```sh
     open index.html
     ```
   - Option 2: Start a local development server  
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
   - The GitHub Actions workflow in `.github/workflows/deploy.yml` will handle automatic deployment.

---

### 🔍 Verify Setup

Once everything’s running, visit:
```
http://localhost:3000
```
You should see the hero section load in with your typewriter animation (“Farah Abdi”) and navbar links active.

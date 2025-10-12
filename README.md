# 🌐 Farah Abdi — Portfolio

Welcome to my personal portfolio website.  
This site highlights my projects, technical skills, and professional background in software engineering and data science.

## 🚀 Live Demo
**Visit:** [https://portfolio.farahabdi.com](https://portfolio.farahabdi.com)

## 🧠 Overview
This portfolio was built to serve as a dynamic, single-page showcase for my work.  
It focuses on clean visuals, smooth animations, and simple navigation — all coded from scratch without bloated templates.

## 🛠️ Tech Stack
- **Frontend:** HTML, CSS, JavaScript  
- **Styling:** Tailwind CSS (utility-first design system)  
- **Animations:** GSAP, ScrollTrigger, Framer Motion (planned)  
- **Hosting:** AWS Lightsail  
- **Version Control & CI/CD:** GitHub Actions → Lightsail SSH Deployment Pipeline  

## 📁 Project Structure
```
Portfolio/
│
├── index.html             # Main landing page
├── app.js                 # Animation logic & typewriter effect
├── styles.css             # Base and custom styles
├── assets/                # Icons, images, logos
└── dist/                  # Compiled production files (if deployed)
```

## ✨ Features
- Responsive, minimal, and performance-optimized design  
- Typewriter effect on hero section (`Farah Abdi` text animation)  
- Smooth scrolling & scroll-triggered GSAP animations  
- Sticky navbar with active-section highlighting  
- Deployed through an automated CI/CD pipeline (GitHub → AWS)  

## 🧰 Setup & Installation

Clone the repository:
```bash
git clone https://github.com/Aabdi22k/Portfolio.git
cd Portfolio
```

Open the site locally:
```bash
# Option 1: Open directly in browser
open index.html

# Option 2: Serve locally (if using VSCode)
npx live-server
```

No build step required — this project runs as a static site.

## 🧩 Configuration

If you're deploying or customizing:
- Update domain references in `index.html` and deployment configs  
- Adjust GSAP / ScrollTrigger animation timings in `app.js`  
- Modify Tailwind or custom styles in `styles.css`  

## 🧱 Deployment

This site is automatically deployed using **GitHub Actions** via SSH to an **AWS Lightsail** instance.  
To replicate:
1. Generate SSH keys for your instance  
2. Add them as GitHub repository secrets (`HOST`, `USERNAME`, `KEY`)  
3. Set up a workflow in `.github/workflows/deploy.yml`


## 🧪 Future Improvements
- Add project cards with hover effects and modal previews  
- Implement dark/light theme toggle  
- Add Framer Motion or 3D animation intro sequence  
- Integrate analytics to track traffic and engagement  

## 📬 Contact

**Farah Abdi**  
📍 Columbus, OH  
🌐 [Portfolio](https://portfolio.farahabdi.com)  
💼 [LinkedIn](https://linkedin.com/in/farah-abdi)  
💻 [GitHub](https://github.com/Aabdi22k)

## 🧾 License
This project is licensed under the **MIT License**.  
Feel free to fork, modify, and reuse with attribution.


## ⭐ Acknowledgements
- GSAP & ScrollTrigger — for smooth, modern animation control  
- Tailwind CSS — for rapid responsive design  
- AWS Lightsail — for stable deployment and CI/CD integration  

> Built with focus, caffeine, and a refusal to settle for average.  
> © 2025 Farah Abdi. All rights reserved.


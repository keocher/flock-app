# Contributing Guidelines

Thanks for contributing to our project!  
This document explains how we collaborate, manage branches, and review code.

---

## 🧠 Project Overview
This project is developed as part of our group coursework for CS353.  
Our goal is to build a social media/forums app for students.

---

## 👥 Team Members & Roles

| Name | Student No. | CompSci No. | Main Area |
|------|-------------|-------------|-----------|
| Aayush | 23370203 | u240634 | Back-End |
| Arran | 23452532 | u240218 | Full-Stack |
| Caitlin| 22521999 | u230289 | Front-End |
| David-Williams | 23406252 | u240223 | Back-End |
| Kevin | 23410606 | u240649 | Front-End |
| Reema | 24767945 | u250456 | Front-End |
| Samuel | 23438342 | u240637 | Full-Stack |



## Technologies Used
- Git
- Docker

### Front-End
- Next.js
- React
- Typescript
- Prettier linting
- Tailwind CSS

### Back-End
- Express 
- Node.js
- Typescript
- MongoDB

## Required Software
 - Node.js
 - Git - to contribute code 
 - Either WSL or Git Bash - if using Windows (All the commands documented will be written in bash so this is important. Bash commands will not work on powershell or cmd. macOS uses zsh by default which is ok)
 - Text/Code editor, VsCode recommended.

### Recommended
#### VsCode Extensions
 - npm intellisense
 - tailwindsCSS intellisense
 - VS Code ES7+ React/Redux/React-Native/JS snippets

## 🌿 Branching Strategy
- `main` → always **stable**, only contains working code.  
- `dev` → main development branch (merged into main after testing).  
- Feature branches:
  - `feature/<short-description>` for new features (e.g. `feature/login-page`)

### Git Setup

Before setting up the repository on your machine you must set up an ssh key and add your public key to your Maynooth gitlab account.

If you don’t have the repo yet:
```bash
git clone git@gitlab.cs.nuim.ie:group16/flock-app.git
cd flock-app
```
---
Install Dependencies
```bash
cd client 
npm install
cd ..
cd server
npm install
```
---

### Example Workflow
1. Create a new branch from `dev`  
```bash
   git switch dev //switch to dev
   git pull
   git switch -c feature/my-feature //create branch (e.g. for homepage feature/home-page)   
   git add . //stage all changes
   git commit -m 'added feature' //commit changes with short description of what you changed 
   git push -u origin feature/my-feature //push your commits to the online repository and set upstream to current branch. once upstream is set you will only need to do "git push" until you wish to change the branch you push.
   
```

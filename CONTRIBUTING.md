# Contributing Guidelines

Thanks for contributing to our project!  
This document explains how we collaborate, manage branches, and review code.

---

## 🧠 Project Overview
This project is developed as part of our group coursework for CS353.  
Our goal is to build a social media/forums app for students.

---

## 👥 Team Members & Roles
| Name | Studnet No | Main Area |
|------|------|------------|
| Aayush |  | |
| Arran| | |
| Caitlin|  |  |
| David-Williams ||  |
|Kevin|||
|Reema|||
|Samuel|||
---


## Required Technologies
 - Node.js - needed to install dependencies
 - VS Code - to view and edit code
 - Git - to contribute code 
 - Either WSL or Git Bash - if using Windows (All the commands documented will be written in bash so this is important. Bash commands will not work on powershell or cmd. macOS uses bash by default)
 - Figma - wireframes
 - 

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
  - `bugfix/<short-description>` for fixes (e.g. `bugfix/session-timeout`)


### Git Setup
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
   git checkout dev
   git pull
   git checkout -b feature/add-client-form
```

# Contributing Guidelines

Thanks for contributing to our project!  
This document explains how we collaborate, manage branches, and review code.

---

## 🧠 Project Overview
This project is developed as part of our group coursework for [Module Name].  
Our goal is to build a [short description, e.g. “Therapist Client Management System using React, Node.js, and SQL”].

---

## 👥 Team Members & Roles
| Name | Role | Main Area |
|------|------|------------|
| Arran |  | |
| Bob | | |
| Charlie |  |  |
| Dana | QA & Docs | Testing / Documentation |

---

## 🌿 Branching Strategy
- `main` → always **stable**, only contains working code.  
- `dev` → main development branch (merged into main after testing).  
- Feature branches:
  - `feature/<short-description>` for new features (e.g. `feature/login-page`)
  - `bugfix/<short-description>` for fixes (e.g. `bugfix/session-timeout`)

### Example Workflow
1. Create a new branch from `dev`  
   ```bash
   git checkout dev
   git pull
   git checkout -b feature/add-client-form


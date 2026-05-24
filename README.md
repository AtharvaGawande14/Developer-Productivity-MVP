# Developer Productivity Insights Dashboard (Full-Stack MVP)

A full-stack MVP that transforms raw developer productivity metrics into actionable insights and recommendations.

This project focuses on solving a common engineering problem where teams can see metrics like lead time or bug rate, but struggle to understand what those numbers actually mean and what actions should be taken next.

---

#  Features

- Developer selection interface
- Displays 5 key productivity metrics:
  - Lead Time
  - Cycle Time
  - Bug Rate
  - Deployment Frequency
  - PR Throughput
- Rule-based insights generation
- Actionable workflow improvement suggestions
- Clean and responsive UI
- Full-stack architecture using React and Node.js

---

#  Problem Statement

Developers and engineering teams often have access to productivity metrics, but metrics alone do not provide enough context to identify bottlenecks or improve workflows.

This MVP bridges that gap by:
- Interpreting metrics
- Explaining likely productivity issues
- Suggesting practical next steps

The goal is to move from:

```text
Raw Metrics → Understanding → Action
```

---

#  Tech Stack

## Frontend
- React.js
- JavaScript
- Inline CSS Styling

## Backend
- Node.js
- Express.js
- REST APIs

## Data Handling
- Mocked JSON datasets simulating:
  - Jira-like issue tracking
  - Pull request systems
  - CI/CD deployment systems

---

#  Productivity Metrics Used

| Metric | Description |
|---|---|
| Lead Time | Time from PR creation to production deployment |
| Cycle Time | Time from issue start to completion |
| Bug Rate | Production bugs divided by completed issues |
| Deployment Frequency | Number of successful deployments |
| PR Throughput | Number of merged pull requests |

---

#  Key Functionalities

## Developer Selection
Users can select an individual developer profile to view productivity information.

## Metrics Dashboard
Displays important productivity metrics in a clean card-based UI.

## Insights Engine
The application interprets productivity metrics using rule-based logic.

Example:
- High Lead Time → Slower deployments
- High Bug Rate → Possible quality issues

## Actionable Recommendations
Provides practical suggestions such as:
- Breaking large PRs into smaller changes
- Improving testing before deployment
- Reducing review bottlenecks

---

#  Backend APIs

## Get Developers
```http
GET /developers
```

## Get Metrics by Developer
```http
GET /metrics/:developerId
```

---

#  Project Structure

```text
Developer-Productivity-MVP
│
├── frontend
│   ├── src
│   ├── public
│
├── backend
│   ├── server.js
│
├── README.md
├── .gitignore
```

---

#  Installation & Setup

## 1. Clone Repository

```bash
git clone https://github.com/AtharvaGawande14/Developer-Productivity-MVP.git
```

---

## 2. Frontend Setup

```bash
cd frontend
npm install
npm start
```

Frontend runs on:
```text
http://localhost:3000
```

---

## 3. Backend Setup

```bash
cd backend
npm install
npm run dev
```

Backend runs on:
```text
http://localhost:5000
```

---

#  Responsible AI Usage

AI tools were used to:
- Understand developer productivity concepts
- Assist with architecture planning
- Help generate and refine code
- Improve explanation clarity

All generated solutions were manually reviewed, understood, and validated before implementation.

---

#  Future Improvements

- Team-level productivity view
- Real-time data integration
- Historical trends and analytics
- Charts and visualizations
- Authentication system
- Database integration

---

#  Key Learning Outcomes

- Full-stack application development
- REST API integration
- Product-focused thinking
- Rule-based insight generation
- React state management
- Backend data handling
- Responsible AI-assisted development

---

#  Author

**Atharva Gawande**

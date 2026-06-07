const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Developers data
const developers = [
  {
    id: 1,
    name: "Atharva Gawande",
    role: "Frontend Developer",
    team: "Web Platform"
  },
  {
    id: 2,
    name: "Neha Patil",
    role: "Backend Developer",
    team: "API Team"
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "Full Stack Developer",
    team: "Product Engineering"
  }
];

// Metrics data
const metrics = {
  1: {
    leadTime: 5.2,
    cycleTime: 4.1,
    bugRate: 0.32,
    deploymentFrequency: 6,
    prThroughput: 14
  },
  2: {
    leadTime: 2.8,
    cycleTime: 3.2,
    bugRate: 0.12,
    deploymentFrequency: 10,
    prThroughput: 18
  },
  3: {
    leadTime: 6.5,
    cycleTime: 5.8,
    bugRate: 0.41,
    deploymentFrequency: 4,
    prThroughput: 9
  }
};

// Routes
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.get("/developers", (req, res) => {
  res.json(developers);
});

app.get("/metrics/:developerId", (req, res) => {
  const developerId = req.params.developerId;
  res.json(metrics[developerId]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
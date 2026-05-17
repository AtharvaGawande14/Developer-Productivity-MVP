import { useEffect, useState } from "react";

function getInsights(metrics) {
  const insights = [];

  if (metrics.leadTime > 4) {
    insights.push({
      title: "Lead time is high",
      meaning: "Changes are taking longer to reach production.",
      action: "Break large PRs into smaller parts and reduce review delays."
    });
  }

  if (metrics.cycleTime > 4) {
    insights.push({
      title: "Cycle time is high",
      meaning: "Work is staying in progress for too long.",
      action: "Check if tasks are too large or blocked during development."
    });
  }

  if (metrics.bugRate > 0.3) {
    insights.push({
      title: "Bug rate is high",
      meaning: "More production bugs are escaping after release.",
      action: "Improve testing before deployment and review risky changes carefully."
    });
  }

  if (metrics.deploymentFrequency < 5) {
    insights.push({
      title: "Deployment frequency is low",
      meaning: "The team is shipping less often.",
      action: "Use smaller releases and improve deployment confidence."
    });
  }

  if (metrics.prThroughput < 10) {
    insights.push({
      title: "PR throughput is low",
      meaning: "Fewer pull requests are being merged.",
      action: "Check for review bottlenecks or unclear task ownership."
    });
  }

  if (insights.length === 0) {
    insights.push({
      title: "Metrics look healthy",
      meaning: "No major bottleneck is visible from this data.",
      action: "Continue current workflow and monitor trends over time."
    });
  }

  return insights;
}

function App() {
  const [developers, setDevelopers] = useState([]);
  const [selectedDeveloper, setSelectedDeveloper] = useState(null);
  const [metrics, setMetrics] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/developers")
      .then((res) => res.json())
      .then((data) => setDevelopers(data))
      .catch((err) => console.error("Error fetching developers:", err));
  }, []);

  const handleSelectDeveloper = (developer) => {
    setSelectedDeveloper(developer);

    fetch(`http://localhost:5000/metrics/${developer.id}`)
      .then((res) => res.json())
      .then((data) => setMetrics(data))
      .catch((err) => console.error("Error fetching metrics:", err));
  };

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h1>Developer Productivity MVP</h1>
        <p>
          Understand developer productivity metrics and convert them into clear
          next steps.
        </p>
      </div>

      <div style={styles.layout}>
        <div style={styles.panel}>
          <h2>Select Developer</h2>

          {developers.map((dev) => (
            <button
              key={dev.id}
              onClick={() => handleSelectDeveloper(dev)}
              style={{
                ...styles.devButton,
                backgroundColor:
                  selectedDeveloper?.id === dev.id ? "#2563eb" : "#ffffff",
                color: selectedDeveloper?.id === dev.id ? "#ffffff" : "#111827"
              }}
            >
              <strong>{dev.name}</strong>
              <span>{dev.role}</span>
            </button>
          ))}
        </div>

        <div style={styles.mainContent}>
          {!selectedDeveloper && (
            <div style={styles.emptyCard}>
              <h2>No developer selected</h2>
              <p>Select a developer to view productivity metrics and insights.</p>
            </div>
          )}

          {selectedDeveloper && metrics && (
            <>
              <div style={styles.profileCard}>
                <h2>{selectedDeveloper.name}</h2>
                <p>
                  {selectedDeveloper.role} • {selectedDeveloper.team}
                </p>
              </div>

              <h2>Metrics Overview</h2>

              <div style={styles.metricsGrid}>
                <MetricCard title="Lead Time" value={`${metrics.leadTime} days`} />
                <MetricCard title="Cycle Time" value={`${metrics.cycleTime} days`} />
                <MetricCard title="Bug Rate" value={metrics.bugRate} />
                <MetricCard
                  title="Deployment Frequency"
                  value={`${metrics.deploymentFrequency}/month`}
                />
                <MetricCard
                  title="PR Throughput"
                  value={`${metrics.prThroughput} PRs/month`}
                />
              </div>

              <h2 style={{ marginTop: "30px" }}>
                Insights & Suggested Next Steps
              </h2>

              {getInsights(metrics).map((insight, index) => (
                <div key={index} style={styles.insightCard}>
                  <h3>{insight.title}</h3>
                  <p>
                    <strong>Meaning:</strong> {insight.meaning}
                  </p>
                  <p>
                    <strong>Next Step:</strong> {insight.action}
                  </p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ title, value }) {
  return (
    <div style={styles.metricCard}>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f3f4f6",
    fontFamily: "Arial, sans-serif",
    padding: "30px"
  },
  header: {
    backgroundColor: "#111827",
    color: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    marginBottom: "25px"
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "280px 1fr",
    gap: "25px"
  },
  panel: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },
  devButton: {
    width: "100%",
    border: "1px solid #ddd",
    padding: "14px",
    marginBottom: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  mainContent: {
    backgroundColor: "#ffffff",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
  },
  emptyCard: {
    padding: "40px",
    textAlign: "center",
    color: "#6b7280"
  },
  profileCard: {
    borderBottom: "1px solid #e5e7eb",
    marginBottom: "20px"
  },
  metricsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "15px"
  },
  metricCard: {
    backgroundColor: "#f9fafb",
    padding: "18px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb"
  },
  insightCard: {
    backgroundColor: "#f9fafb",
    borderLeft: "5px solid #2563eb",
    padding: "18px",
    borderRadius: "10px",
    marginBottom: "15px"
  }
};

export default App;
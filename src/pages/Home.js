import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px" }}>

      <section
        style={{
          background: "#f5f7ff",
          padding: "60px",
          borderRadius: "12px",
          marginBottom: "80px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "44px", marginBottom: "15px", textAlign:"center" }}>
          Hi, I'm Aryan 
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px", color: "#444" }}>
          Final-year Information Technology student with a strong interest in web development,
          machine learning, and Java programming.
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "15px" }}>
          <Link
            to="/projects"
            style={{
              background: "#2563eb",
              color: "white",
              padding: "12px 26px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px"
            }}
          >
            View My Work
          </Link>

          <a
            href="https://drive.google.com/file/d/1dcvSk2rbxkiHQHGMmkuUP1Q7nH8QlFFK/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            style={{
              background: "white",
              color: "#2563eb",
              padding: "12px 26px",
              borderRadius: "8px",
              textDecoration: "none",
              fontSize: "18px",
              border: "2px solid #2563eb"
            }}
          >
            Here is my Resume
          </a>
        </div>
      </section>

      <section
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "50px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px", textAlign:"center" }}>About Me</h2>

        <p style={{ fontSize: "16px", marginBottom: "15px", color: "#555" }}>
          I am a passionate developer who enjoys building web applications and working on
          data-driven and AI-based projects that solve real-world problems.
        </p>

        <Link to="/about" style={{ color: "#2563eb", fontWeight: "500" }}>
          View More →
        </Link>
      </section>

      <section
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "50px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "15px",textAlign:"center" }}>Projects</h2>

        <ul style={{ paddingLeft: "20px", marginBottom: "15px", color: "#555" }}>
          <li style={{ marginBottom: "8px" }}>Gym Management System</li>
          <li style={{ marginBottom: "8px" }}>
            Respiratory Disease Detection using Chest X-ray Images and Deep Learning
          </li>
          <li>Campus Placement Prediction for MBA Students</li>
        </ul>

        <Link to="/projects" style={{ color: "#2563eb", fontWeight: "500" }}>
          View More →
        </Link>
      </section>

      <section
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "50px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px",textAlign:"center" }}>Skills</h2>

        <p style={{ fontSize: "16px", marginBottom: "15px", color: "#555" }}>
          Java, HTML, CSS, MySQL, React, Machine Learning, Deep Learning, Jupyter Notebook, VS Code
        </p>

        <Link to="/skills" style={{ color: "#2563eb", fontWeight: "500" }}>
          View More →
        </Link>
      </section>

      <section
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "10px",textAlign:"center" }}>Contact</h2>

        <p style={{ fontSize: "16px", marginBottom: "15px", color: "#555" }}>
          Feel free to reach out if you'd like to collaborate or discuss opportunities.
        </p>

        <Link to="/contact" style={{ color: "#2563eb", fontWeight: "500" }}>
          View More →
        </Link>
      </section>

    </div>
  );
}

export default Home;

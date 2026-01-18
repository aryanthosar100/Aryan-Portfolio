import { useState } from "react";

import gym1 from "../assets/projects/gym/gym1.png";
import gym2 from "../assets/projects/gym/gym2.png";
import gym3 from "../assets/projects/gym/gym3.png";
import gym4 from "../assets/projects/gym/gym4.png";
import gym5 from "../assets/projects/gym/gym5.png";
import gym6 from "../assets/projects/gym/gym6.png";

import resp1 from "../assets/projects/respiratory/resp1.jpeg";
import resp2 from "../assets/projects/respiratory/resp2.jpeg";
import resp3 from "../assets/projects/respiratory/resp3.jpeg";

function ProjectsPage() {
  const [activeImage, setActiveImage] = useState(null);

  const openImage = (img) => setActiveImage(img);
  const closeImage = () => setActiveImage(null);

  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px" }}>

      <section
        style={{
          background: "#f5f7ff",
          padding: "50px",
          borderRadius: "12px",
          marginBottom: "60px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>My Projects</h1>
        <p style={{ fontSize: "18px", color: "#444" }}>
          A showcase of my academic, technical, and real-world development projects.
        </p>
      </section>

      <ProjectBlock
        title="Gym Management System"
        description="A full-stack web application designed to manage gym memberships, user authentication, and personalized owner and member dashboards through a modern and responsive interface."
        tech="React, HTML, CSS, Node.js, MySQL"
        images={[gym1, gym2, gym3,gym4,gym5,gym6]}
        onImageClick={openImage}
      />

      <ProjectBlock
        title="Respiratory Disease Detection using Chest X-ray Images"
        description="A deep learning based healthcare project focused on detecting and classifying lung diseases using chest X-ray images with high accuracy."
        tech="Python, CNN, ResNet50, VGG16, Deep Learning"
        images={[resp1, resp2, resp3]}
        onImageClick={openImage}
      />

      <TextProjectBlock
        title="Campus Placement Prediction for MBA Students"
        description="A machine learning project developed to predict the placement probability of MBA students using academic and demographic data."
        tech="Python, Machine Learning, Logistic Regression"
        result="Achieved 88% accuracy and identified key academic factors influencing placement outcomes."
      />

      {activeImage && (
        <div
          onClick={closeImage}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000
          }}
        >
          <img
            src={activeImage}
            alt="Project Preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px"
            }}
          />
        </div>
      )}
    </div>
  );
}

function ProjectBlock({ title, description, tech, images, onImageClick }) {
  return (
    <section
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        marginBottom: "50px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
      }}
    >
      <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>{title}</h2>

      <p style={{ fontSize: "15px", color: "#555", marginBottom: "8px" }}>
        {description}
      </p>

      <p style={{ fontSize: "14px", color: "#777", marginBottom: "20px" }}>
        Tech Stack: {tech}
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px"
        }}
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Project"
            onClick={() => onImageClick(img)}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
              cursor: "pointer"
            }}
          />
        ))}
      </div>
    </section>
  );
}

function TextProjectBlock({ title, description, tech, result }) {
  return (
    <section
      style={{
        background: "white",
        padding: "40px",
        borderRadius: "12px",
        marginBottom: "50px",
        boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
      }}
    >
      <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>{title}</h2>

      <p style={{ fontSize: "15px", color: "#555", marginBottom: "8px" }}>
        {description}
      </p>

      <p style={{ fontSize: "14px", color: "#777", marginBottom: "8px" }}>
        Tech Stack: {tech}
      </p>

      <p style={{ fontSize: "14px", color: "#666" }}>
        {result}
      </p>
    </section>
  );
}

export default ProjectsPage;

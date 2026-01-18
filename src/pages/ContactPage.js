function ContactPage() {
  return (
    <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "50px" }}>

      <section
        style={{
          background: "#f5f7ff",
          padding: "60px",
          borderRadius: "12px",
          marginBottom: "50px",
          textAlign: "center"
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Contact Me
        </h1>

        <p style={{ fontSize: "18px", color: "#444" }}>
          Feel free to reach out for collaborations, opportunities, or any professional discussion.
        </p>
      </section>

      <section
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 10px 20px rgba(0,0,0,0.05)"
        }}
      >
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          My Contact Details
        </h2>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
          Name: Aryan Ravindra Thosar
        </p>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
          Email: aryan.thosar.100@gmail.com
        </p>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
          Phone: +91 9156699886
        </p>

        <p style={{ fontSize: "16px", color: "#555", marginBottom: "10px" }}>
          Location: Nagpur, Maharashtra, India
        </p>

        <p style={{ fontSize: "16px", color: "#555" }}>
          LinkedIn: www.linkedin.com/in/aryan-thosar  
          <br />
          GitHub: github.com/aryanthosar100
        </p>
      </section>

    </div>
  );
}

export default ContactPage;

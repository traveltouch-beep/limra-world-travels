function WhatsApp() {
  return (
    <a
      href="https://wa.me/919840555649"
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "25px",
        right: "25px",
        width: "60px",
        height: "60px",
        background: "#25D366",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        fontSize: "30px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        zIndex: 999,
      }}
    >
      💬
    </a>
  );
}

export default WhatsApp;
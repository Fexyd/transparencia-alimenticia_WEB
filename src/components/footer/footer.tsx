export default function Footer() {
  const year = new Date().getFullYear();

  const sectionStyle = {
    display: "flex",
    flexDirection: "column" as const,
    gap: "0.5rem",
  };

  const linkStyle = {
    color: "#a0e7e5",
    textDecoration: "none",
  };

  const footerStyle = {
    backgroundColor: "#1f1f1f",
    color: "#f1f1f1",
    padding: "2rem 4rem",
    display: "flex",
    flexDirection: "column" as const,
    gap: "2rem",
    fontSize: "0.9rem",
  };

  const h4Style = {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: 0,
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <p>© {year} copyright</p>
      </div>

      <div style={sectionStyle}>
        <h4 style={h4Style}>Recursos visuales</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <a
              href="https://es.vecteezy.com/fotos-gratis/comida-saludable"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Comida Saludable Fotos de Stock por Vecteezy
            </a>
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h4 style={h4Style}>Fuentes de información</h4>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          <li>
            <a
              href="https://www.gob.mx/cofepris/documentos/etiquetado-frontal-de-advertencia"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Gobierno de México - COFEPRIS: Etiquetado frontal
            </a>
          </li>
          <li>
            <a
              href="https://www.fao.org/mexico/noticias/detail-events/es/c/1307631/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              FAO México - Información sobre etiquetado y salud
            </a>
          </li>
          <li>
            <a
              href="https://saludpublica.mx/index.php/spm/article/view/11890"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Revista Salud Pública de México - Estudio sobre etiquetado
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

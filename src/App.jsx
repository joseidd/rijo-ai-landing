import React from "react";
import "../styles.css";

function App() {
  const year = new Date().getFullYear();
  return (
    <>
    <main id="top">
      <section className="hero one-page">
        <div className="container">
          {/* Logo: isotipo blanco de la página 11 del PDF (branding 2025) */}
          <div className="brand-hero">
            <img
              src="/rijo-logo-page11.png"
              alt="RIJO AI"
              className="isotipo logo-page11"
            />
            <div className="brand-text-block">
              <span className="brand-name">RIJO AI</span>
              <span className="brand-tagline">Inteligencia Artificial</span>
            </div>
          </div>

          {/* Brand Manifesto (del PDF) */}
          <div className="block manifesto-block">
            <h2 className="block-title">BRAND MANIFESTO</h2>
            <div className="manifesto-text">
              <p>
                En RIJO AI, creemos en el poder de las ideas cuando se combinan con propósito. Nuestro nombre nace de la fusión entre Riquel y José, pero representa mucho más: una visión compartida, una colaboración auténtica y la determinación de transformar el mañana. Somos la unión de talentos jóvenes dominicanos con una misión clara: acercar la inteligencia artificial a las pequeñas y medianas empresas, de forma humana, estratégica y accesible.
              </p>
              <p>
                Sabemos que la tecnología, cuando se aplica con empatía, puede ser el motor de grandes cambios. Por eso creamos soluciones que no sólo automatizan procesos, sino que impulsan decisiones inteligentes. Desde análisis de datos hasta asistentes virtuales personalizados, ayudamos a las PYMES a convertir información en acción.
              </p>
              <p>
                Nos movemos con confianza. Inspiramos empoderamiento. Miramos hacia el futuro sin perder la simplicidad. Y, sobre todo, cultivamos la curiosidad que enciende cada innovación. Queremos que cada cliente diga: &ldquo;Esto es lo que necesitaba y no sabía que existía.&rdquo;
              </p>
              <p className="manifesto-close">
                Porque en RIJO AI, no solo usamos inteligencia artificial. La hacemos significativa.
              </p>
            </div>
          </div>

          {/* Concepto (del PDF) */}
          <div className="block concept-block">
            <h2 className="block-title">CONCEPTO</h2>
            <div className="concept-grid">
              <div className="concept-text">
                <p>
                  En esta propuesta, RIJO AI se presenta con un logotipo compuesto por un símbolo de cuatro lados (isotipo) acompañado de su nombre. El isotipo, en su forma primitiva, es una figura abstracta derivada de la unión de las letras R y J, en alusión a los nombres de sus fundadores. A través de un giro en cuatro etapas, la forma se mantiene unida, transmitiendo interconexión, cercanía y profesionalismo.
                </p>
                <p>
                  Por su parte, el nombre RIJO AI está representado en una tipografía de palo seco (sin serifas) y de trazo extendido, lo que refuerza una atmósfera de virtualidad, tecnología y minimalismo.
                </p>
              </div>
              <div className="concept-isotipo">
                <img src="/rijo-logo-page11.png" alt="Isotipo RIJO AI" className="logo-page11" />
              </div>
            </div>
          </div>

          {/* Contacto */}
          <div id="contacto" className="block contact-block">
            <h2 className="block-title">Contacto</h2>
            <p className="contact-intro">
              Puedes escribirnos directamente a:
            </p>
            <p className="contact-email">
              <a href="mailto:rijofh@gmail.com">rijofh@gmail.com</a>
            </p>
            <p className="small-text">
              Cuéntanos brevemente quién eres y qué te gustaría explorar. Te responderemos con una mirada honesta sobre posibles caminos (o si quizá no es el momento aún).
            </p>
          </div>
        </div>
      </section>
    </main>
    <footer className="site-footer">
      <div className="container footer-inner">
        <span>© {year} RIJO AI. Todos los derechos reservados.</span>
      </div>
    </footer>
    </>
  );
}

export default App;

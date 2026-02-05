"use client";

import { useEffect } from "react";
import Footer from "./footer";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site">
      {/* FONDOS DECORATIVOS */}
      <div className="glow glow1" />
      <div className="glow glow2" />

      {/* HERO */}
      <section className="hero">
        <span className="badge heroAnim delay1">Agencia Digital</span>

        <h1 className="heroTitle">
          <span className="heroLine delay2">Tu web no es un gasto.</span>
          <span className="heroLine delay3">Es tu mejor vendedor.</span>
        </h1>

        <p className="heroText delay4">
          Diseñamos sitios modernos, rápidos y pensados para convertir visitas
          en clientes reales.
        </p>

        <button
          onClick={() => {
            window.location.href =
              "https://www.instagram.com/direct/t/17842474719680507/";
          }}
          className="heroBtn delay5"
        >
          Quiero mi web
        </button>
      </section>

      {/* PROBLEMA + ESTUDIO */}
      <section className="section">
        <h2 className="reveal">Pierdes el 75% de los clientes</h2>
        <p className="reveal subtle">
          Un estudio de la Universidad de Stanford demostró que el 75% de los
          usuarios juzga la credibilidad de un negocio por su sitio web.
        </p>
        <img className="reveal imgSmall" src="/grafic.png" />
        <a
          className="reveal link"
          href="https://credibility.stanford.edu/guidelines/index.html"
          target="_blank"
        >
          Ver estudio
        </a>
      </section>

      {/* BENEFICIOS */}
      <section className="cards">
        <div className="card reveal">
          <span>⚡</span>
          <h3>Velocidad</h3>
          <p>
            Sitios optimizados para cargar rápido y no perder usuarios
            impacientes.
          </p>
        </div>
        <div className="card reveal">
          <span>🎨</span>
          <h3>Diseño que convence</h3>
          <p>Diseño limpio, moderno y profesional que transmite confianza.</p>
        </div>
        <div className="card reveal">
          <span>🕒</span>
          <h3>Trabaja 24/7</h3>
          <p>
            Tu web vende incluso cuando dormís o estás con tu vida personal.
          </p>
        </div>
      </section>

      {/* PROCESO */}
      <section className="process">
        <h2 className="reveal">Cómo trabajamos</h2>
        <div className="line" />
        <div className="steps">
          <div className="step reveal">🔍 Analizamos tu negocio</div>
          <div className="step reveal">🧠 Pensamos una estrategia</div>
          <div className="step reveal">💻 Desarrollamos tu web</div>
          <div className="step reveal">🚀 Lanzamos y escalamos</div>
        </div>
      </section>

      {/* PROMOS */}
      <section className="section">
        <h2 className="reveal">Te regalamos material promocional</h2>
        <p className="reveal subtle">
          Incluimos diseños listos para Instagram, WhatsApp y publicidad paga.
        </p>

        <div className="promoGallery">
          <img className="promoSmall reveal" src="/publi.png" />
          <img className="promoMedium reveal" src="/publi2.png" />
          <img className="promoLarge reveal" src="/publ.png" />
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2 className="reveal">¿Listo para mejorar tu presencia online?</h2>
        <p className="reveal">
          Escribinos y armamos una web a medida para tu negocio.
        </p>
        <button
          onClick={() => {
            window.location.href = "https://www.instagram.com/zai.tech.webs/";
          }}
          className="reveal"
        >
          Contactar
        </button>
      </section>

      <Footer />

      {/* ESTILOS */}
      <style jsx global>{`
        body {
          margin: 0;
          font-family: "Montserrat", sans-serif;
          background: #050814;
          color: #eef1ff;
          overflow-x: hidden;
        }

        .site {
          position: relative;
        }

        /* GLOWS */
        .glow {
          position: absolute;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, #5a7dff55, transparent 70%);
          filter: blur(90px);
          z-index: 0;
        }

        .glow1 {
          top: -120px;
          left: -160px;
        }

        .glow2 {
          bottom: 300px;
          right: -160px;
        }

        /* HERO */
        .hero {
          min-height: 85vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .badge {
          background: rgba(90, 125, 255, 0.15);
          color: #9fb4ff;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 0.8rem;
          margin-bottom: 16px;
        }

        .heroTitle {
          font-size: 2.7rem;
          max-width: 820px;
          margin: 0;
        }

        .heroLine {
          display: block;
          opacity: 0;
          transform: translateY(20px);
          animation: heroIn 0.8s ease forwards;
        }

        .heroText,
        .heroBtn,
        .heroAnim {
          opacity: 0;
          transform: translateY(20px);
          animation: heroIn 0.8s ease forwards;
        }

        .delay1 {
          animation-delay: 0.2s;
        }
        .delay2 {
          animation-delay: 0.4s;
        }
        .delay3 {
          animation-delay: 0.6s;
        }
        .delay4 {
          animation-delay: 0.8s;
        }
        .delay5 {
          animation-delay: 1s;
        }

        @keyframes heroIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .heroText {
          color: #cfd8ff;
          margin: 18px 0 28px;
          font-size: 1.05rem;
          max-width: 700px;
        }

        .heroBtn {
          padding: 15px 44px;
          border-radius: 40px;
          border: none;
          background: linear-gradient(135deg, #5a7dff, #8aa2ff);
          color: white;
          font-weight: 600;
          cursor: pointer;
          animation:
            heroIn 0.8s ease forwards,
            pulse 3s ease-in-out infinite;
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 #5a7dff55;
          }
          70% {
            box-shadow: 0 0 0 16px transparent;
          }
          100% {
            box-shadow: 0 0 0 0 transparent;
          }
        }

        /* SECCIONES */
        .section {
          padding: 70px 20px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .subtle {
          color: #aab3ff;
        }

        .imgSmall {
          width: 260px;
          margin: 30px 0;
        }

        .link {
          color: #9fb4ff;
          font-size: 0.9rem;
        }

        /* CARDS */
        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 24px;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px 70px;
        }

        .card {
          background: rgba(255, 255, 255, 0.04);
          padding: 30px;
          border-radius: 18px;
          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.07);
        }

        /* PROCESO */
        .process {
          padding: 70px 20px;
          text-align: center;
        }

        .line {
          width: 120px;
          height: 2px;
          background: #5a7dff;
          margin: 18px auto 36px;
        }

        .steps {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .step {
          padding: 14px 22px;
          border-radius: 30px;
          background: rgba(90, 125, 255, 0.15);
          color: #cfd8ff;
          font-size: 0.9rem;
        }

        /* PROMOS */
        .promoGallery {
          display: flex;
          justify-content: center;
          align-items: flex-end;
          gap: 40px;
          flex-wrap: wrap;
          margin-top: 40px;
        }

        .promoSmall {
          width: 170px;
        }

        .promoMedium {
          width: 230px;
        }

        .promoLarge {
          width: 310px;
        }

        /* CTA */
        .cta {
          padding: 80px 20px;
          text-align: center;
        }

        .cta button {
          margin-top: 24px;
          padding: 16px 46px;
          border-radius: 40px;
          border: none;
          background: #5a7dff;
          color: white;
          font-weight: 600;
          cursor: pointer;
        }

        /* ANIMACIONES SCROLL */
        .reveal {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease;
        }

        .reveal.show {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}

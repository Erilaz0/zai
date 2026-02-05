"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const nav = document.querySelector(".nav");
    requestAnimationFrame(() => nav.classList.add("navShow"));
  }, []);

  return (
    <>
      <header className="nav">
        <nav className="navInner">
          <div className="logoWrap">
            <img src="/logo.png" alt="Zai Tech" />
          </div>

          {/* BOTÓN HAMBURGUESA */}
          <button
            className={`menuBtn ${open ? "open" : ""}`}
            onClick={() => setOpen(!open)}
            aria-label="Abrir menú"
          >
            <span />
            <span />
            <span />
          </button>

          <ul className={`navLinks ${open ? "open" : ""}`}>
            <li>
              <a href="/" onClick={() => setOpen(false)}>
                Inicio
              </a>
            </li>
            <li>
              <a href="/equipo" onClick={() => setOpen(false)}>
                Equipo
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/zai.tech.webs/"
                className="ctaNav"
                onClick={() => setOpen(false)}
              >
                Contactanos
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <style jsx>{`
        .nav {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 100;
          background: rgba(5, 8, 20, 0.6);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(90, 125, 255, 0.18);
          transform: translateY(-100%);
          transition: transform 0.9s ease;
        }

        .navShow {
          transform: translateY(0);
        }

        .navInner {
          max-width: 1300px;
          margin: auto;
          padding: 20px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* LOGO */
        .logoWrap img {
          width: 120px;
          filter: drop-shadow(0 0 26px rgba(90, 125, 255, 0.75));
        }

        /* LINKS DESKTOP */
        .navLinks {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .navLinks a {
          color: #dbe2ff;
          text-decoration: none;
          font-size: 0.95rem;
          position: relative;
        }

        .navLinks a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #5a7dff, #8aa2ff);
          transition: width 0.3s ease;
        }

        .navLinks a:hover::after {
          width: 100%;
        }

        .ctaNav {
          padding: 12px 26px;
          border-radius: 32px;
          background: linear-gradient(135deg, #5a7dff, #8aa2ff);
          color: white !important;
          font-weight: 600;
          box-shadow: 0 0 30px rgba(90, 125, 255, 0.55);
        }

        .ctaNav::after {
          display: none;
        }

        /* BOTÓN HAMBURGUESA */
        .menuBtn {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menuBtn span {
          width: 26px;
          height: 2px;
          background: #dbe2ff;
          transition: 0.3s;
        }

        .menuBtn.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .menuBtn.open span:nth-child(2) {
          opacity: 0;
        }

        .menuBtn.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .menuBtn {
            display: flex;
          }

          .navLinks {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            background: rgba(5, 8, 20, 0.95);
            backdrop-filter: blur(18px);
            flex-direction: column;
            gap: 28px;
            padding: 32px 0;
            transform: translateY(-20px);
            opacity: 0;
            pointer-events: none;
            transition: 0.4s ease;
          }

          .navLinks.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
        }
      `}</style>
    </>
  );
}

"use client";

import { useEffect } from "react";

export default function Nav() {
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

          <ul className="navLinks">
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/equipo">Equipo</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/zai.tech.webs/"
                className="ctaNav"
              >
                Contactanos
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <style jsx>{`
        /* NAV */
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
          width: 120px; /* 🔥 BIEN GRANDE */
          height: auto;
          filter: drop-shadow(0 0 26px rgba(90, 125, 255, 0.75));
          transition: transform 0.35s ease;
        }

        .logoWrap img:hover {
          transform: scale(1.05);
        }

        /* LINKS */
        .navLinks {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 36px;
          margin: 0;
          padding: 0;
        }

        .navLinks a {
          text-decoration: none;
          color: #dbe2ff;
          font-size: 0.95rem;
          position: relative;
        }

        .navLinks a::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -6px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #5a7dff, #8aa2ff);
          transition: width 0.3s ease;
        }

        .navLinks a:hover::after {
          width: 100%;
        }

        /* CTA */
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

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .logoWrap img {
            width: 95px;
          }

          .navLinks {
            gap: 24px;
          }
        }

        @media (max-width: 600px) {
          .navInner {
            padding: 16px 20px;
          }

          .logoWrap img {
            width: 78px;
          }

          .navLinks a {
            font-size: 0.85rem;
          }

          .ctaNav {
            padding: 10px 20px;
          }
        }

        @media (max-width: 420px) {
          .logoWrap img {
            width: 68px;
          }

          .navLinks {
            gap: 14px;
          }
        }
      `}</style>
    </>
  );
}

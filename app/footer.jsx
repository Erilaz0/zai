import { useState } from "react";

export default function Footer() {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <>
      <footer className="footer">
        <div className="footerContent">
          <div className="footerBrand">
            <h3>Zai Tech Webs</h3>
            <p>Creamos sitios web modernos, rápidos y pensados para vender.</p>
          </div>

          <div className="footerLinks">
            <h4>Servicios</h4>
            <a href="#">Landing Pages</a>
            <a href="#">Sitios Web</a>
            <a href="#">E-commerce</a>
            <a href="#">Optimización</a>
          </div>

          <div className="footerLinks">
            <h4>Contacto</h4>
            <a
              href="https://www.instagram.com/zai.tech.webs/"
              target="_blank"
              rel="noopener noreferrer"
            >
              📸 Instagram
            </a>

            <button className="emailBtn" onClick={() => setShowEmail(true)}>
              ✉️ Email
            </button>
          </div>
        </div>

        <div className="footerBottom">
          <span>© {new Date().getFullYear()} Zai Tech Webs</span>
          <span>Todos los derechos reservados</span>
        </div>
      </footer>

      {showEmail && (
        <div className="modalOverlay" onClick={() => setShowEmail(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="closeBtn" onClick={() => setShowEmail(false)}>
              ✖
            </button>
            <h4>📩 Contacto por Email</h4>
            <p>Podés escribirnos a:</p>
            <strong>alonsoalonsl431432@gmail.com</strong>
          </div>
        </div>
      )}

      <style jsx global>{`
        .footer {
          background: #050814;
          padding: 80px 20px 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        .footerContent {
          max-width: 1200px;
          margin: 0 auto 50px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 40px;
        }

        .footerBrand h3 {
          font-size: 1.4rem;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .footerBrand p {
          color: #bfc9ff;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 320px;
        }

        .footerLinks h4 {
          font-size: 1rem;
          margin-bottom: 15px;
          color: #ffffff;
        }

        .footerLinks a,
        .emailBtn {
          display: block;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          color: #9fb0ff;
          text-decoration: none;
          font-size: 0.9rem;
          margin-bottom: 10px;
          transition: color 0.2s ease;
          text-align: left;
        }

        .footerLinks a:hover,
        .emailBtn:hover {
          color: #ffffff;
        }

        .footerBottom {
          max-width: 1200px;
          margin: 0 auto;
          padding-top: 25px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #8f9cff;
          flex-wrap: wrap;
          gap: 10px;
        }

        /* MODAL */
        .modalOverlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }

        .modal {
          background: #0b1025;
          padding: 30px 35px;
          border-radius: 12px;
          color: #ffffff;
          position: relative;
          max-width: 90%;
          text-align: center;
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.4);
        }

        .modal h4 {
          margin-bottom: 10px;
        }

        .modal p {
          color: #bfc9ff;
          font-size: 0.9rem;
        }

        .modal strong {
          display: block;
          margin-top: 10px;
          color: #9fb0ff;
          font-size: 0.95rem;
          word-break: break-all;
        }

        .closeBtn {
          position: absolute;
          top: 10px;
          right: 12px;
          background: none;
          border: none;
          color: #ffffff;
          font-size: 1rem;
          cursor: pointer;
        }

        @media (max-width: 600px) {
          .footerBottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

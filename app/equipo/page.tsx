"use client";

export default function Equipo() {
  return (
    <section className="trabaja">
      <h2>¿Querés trabajar con nosotros?</h2>
      <p className="intro">
        En <strong>Zai Tech Webs</strong> buscamos personas con talento,
        creatividad y ganas de crecer profesionalmente.
      </p>

      <div className="cards">
        <div className="card">
          <h3>Perfiles que buscamos</h3>
          <ul>
            <li>Desarrolladores/as web</li>
            <li>Diseñadores/as UI / UX</li>
            <li>Marketing y contenido</li>
            <li>Personas con iniciativa</li>
          </ul>
        </div>

        <div className="card">
          <h3>Lo que ofrecemos</h3>
          <ul>
            <li>Trabajo remoto</li>
            <li>Horarios flexibles</li>
            <li>Buen ambiente</li>
            <li>Crecimiento profesional</li>
          </ul>
        </div>
      </div>

      <form className="form">
        <h3>Formulario de inscripción</h3>

        <label>Nombre completo</label>
        <input type="text" placeholder="Tu nombre" required />

        <label>Email</label>
        <input type="email" placeholder="tu@email.com" required />

        <label>Área de interés</label>
        <select required>
          <option value="">Seleccionar</option>
          <option>Desarrollo Web</option>
          <option>Diseño UI / UX</option>
          <option>Marketing / Contenido</option>
          <option>Otro</option>
        </select>

        <label>Contanos sobre vos</label>
        <textarea placeholder="Experiencia, portfolio, links..." />

        <button type="submit">Enviar postulación</button>
      </form>

      <style jsx>{`
        .trabaja {
          background: linear-gradient(135deg, #0a1a2f, #0f2a4d);
          padding: 70px 20px;
          color: #eaf1ff;
          font-family: Arial, sans-serif;
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 10px;
        }

        .intro {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 50px;
          color: #c7d7ff;
          font-size: 1.1rem;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 30px;
          max-width: 1000px;
          margin: 0 auto 60px;
        }

        .card {
          background: rgba(255, 255, 255, 0.06);
          padding: 25px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
        }

        .card h3 {
          color: #7fb1ff;
          margin-bottom: 15px;
        }

        .card li {
          margin-bottom: 8px;
        }

        .form {
          max-width: 600px;
          margin: 0 auto;
          background: rgba(255, 255, 255, 0.07);
          padding: 35px;
          border-radius: 18px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
        }

        .form h3 {
          text-align: center;
          margin-bottom: 25px;
        }

        label {
          display: block;
          margin-bottom: 6px;
          color: #bcd2ff;
          font-size: 0.9rem;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 12px;
          margin-bottom: 18px;
          border-radius: 10px;
          border: none;
          background: #0b1f3b;
          color: #fff;
          outline: none;
        }

        input::placeholder,
        textarea::placeholder {
          color: #7fa3d9;
        }

        textarea {
          min-height: 100px;
          resize: vertical;
        }

        button {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #3a7bff, #5fa3ff);
          color: white;
          font-weight: bold;
          cursor: pointer;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease;
        }

        button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(58, 123, 255, 0.5);
        }
      `}</style>
    </section>
  );
}

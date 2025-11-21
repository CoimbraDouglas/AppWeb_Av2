import { useState } from "react";
import AlunosPage from "./components/AlunosPage.jsx";
import CursosPage from "./components/CursosPage.jsx";
import MatriculasPage from "./components/MatriculasPage.jsx";

export default function App() {
  const [view, setView] = useState("alunos");
  const [auth, setAuth] = useState({
    username: "admin",
    password: "admin123",
  });

  function handleAuthChange(e) {
    const { name, value } = e.target;
    setAuth((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <div className="app">
      <header className="topbar">
        <div>
          <h1>Sistema Acadêmico</h1>
          <span className="subtitle">Frontend (React + Vite)</span>
        </div>

        <div className="login-box">
          <span>Autenticação (Basic):</span>
          <input
            name="username"
            placeholder="Usuário"
            value={auth.username}
            onChange={handleAuthChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Senha"
            value={auth.password}
            onChange={handleAuthChange}
          />
        </div>
      </header>

      <nav className="navbar">
        <button
          className={view === "alunos" ? "active" : ""}
          onClick={() => setView("alunos")}
        >
          Alunos
        </button>
        <button
          className={view === "cursos" ? "active" : ""}
          onClick={() => setView("cursos")}
        >
          Cursos
        </button>
        <button
          className={view === "matriculas" ? "active" : ""}
          onClick={() => setView("matriculas")}
        >
          Matrículas
        </button>
      </nav>

      <main className="content">
        {view === "alunos" && <AlunosPage auth={auth} />}
        {view === "cursos" && <CursosPage auth={auth} />}
        {view === "matriculas" && <MatriculasPage auth={auth} />}
      </main>

      <footer className="footer">
        <small>
          Sistema Acadêmico — Spring Boot + React — {new Date().getFullYear()}
        </small>
      </footer>
    </div>
  );
}

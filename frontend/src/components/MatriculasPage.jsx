import { useEffect, useState } from "react";
import { fetchAlunos, fetchCursos, matricularAlunoEmCurso } from "../api";

export default function MatriculasPage({ auth }) {
  const { username, password } = auth;
  const [alunos, setAlunos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [idAluno, setIdAluno] = useState("");
  const [idCurso, setIdCurso] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregar() {
      try {
        const [a, c] = await Promise.all([
          fetchAlunos(username, password),
          fetchCursos(username, password),
        ]);
        setAlunos(a);
        setCursos(c);
      } catch (e) {
        setErro(e.message);
      }
    }
    if (username && password) {
      carregar();
    }
  }, [username, password]);

  async function handleMatricular(e) {
    e.preventDefault();
    setMensagem("");
    setErro("");
    if (!idAluno || !idCurso) {
      setErro("Selecione aluno e curso.");
      return;
    }
    try {
      const resultado = await matricularAlunoEmCurso(
        idAluno,
        idCurso,
        username,
        password
      );
      setMensagem(resultado || "Aluno matriculado com sucesso!");
    } catch (e) {
      setErro(e.message);
    }
  }

  return (
    <div className="card">
      <h2>Matrículas (Aluno x Curso)</h2>

      {erro && <div className="error">{erro}</div>}
      {mensagem && <div className="success">{mensagem}</div>}

      <form onSubmit={handleMatricular} className="form-inline">
        <select
          value={idAluno}
          onChange={(e) => setIdAluno(e.target.value)}
          required
        >
          <option value="">Selecione um aluno</option>
          {alunos.map((aluno) => (
            <option key={aluno.id} value={aluno.id}>
              {aluno.id} - {aluno.nome}
            </option>
          ))}
        </select>

        <select
          value={idCurso}
          onChange={(e) => setIdCurso(e.target.value)}
          required
        >
          <option value="">Selecione um curso</option>
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>
              {curso.id} - {curso.nome}
            </option>
          ))}
        </select>

        <button type="submit">Matricular</button>
      </form>

      <p className="hint">
        Dica: primeiro cadastre alunos e cursos nas abas correspondentes.
      </p>
    </div>
  );
}

import { useEffect, useState } from "react";
import {
  fetchCursos,
  createCurso,
  updateCurso,
  deleteCurso,
} from "../api";

export default function CursosPage({ auth }) {
  const { username, password } = auth;
  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [form, setForm] = useState({
    id: null,
    nome: "",
    cargaHoraria: "",
  });

  async function carregarCursos() {
    try {
      setLoading(true);
      setErro("");
      const data = await fetchCursos(username, password);
      setCursos(data);
    } catch (e) {
      setErro(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (username && password) {
      carregarCursos();
    }
  }, [username, password]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      nome: form.nome,
      cargaHoraria: parseInt(form.cargaHoraria || 0, 10),
    };

    try {
      if (form.id) {
        await updateCurso(form.id, payload, username, password);
      } else {
        await createCurso(payload, username, password);
      }
      setForm({ id: null, nome: "", cargaHoraria: "" });
      carregarCursos();
    } catch (e) {
      setErro(e.message);
    }
  }

  function handleEdit(curso) {
    setForm({
      id: curso.id,
      nome: curso.nome || "",
      cargaHoraria: curso.cargaHoraria?.toString() || "",
    });
  }

  async function handleDelete(id) {
    if (!confirm("Deseja realmente deletar este curso?")) return;
    try {
      await deleteCurso(id, username, password);
      carregarCursos();
    } catch (e) {
      setErro(e.message);
    }
  }

  return (
    <div className="card">
      <h2>Cursos</h2>

      {erro && <div className="error">{erro}</div>}

      <form onSubmit={handleSubmit} className="form">
        <input
          name="nome"
          placeholder="Nome do curso"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          name="cargaHoraria"
          placeholder="Carga horária (horas)"
          type="number"
          value={form.cargaHoraria}
          onChange={handleChange}
          required
        />
        <button type="submit">
          {form.id ? "Atualizar" : "Cadastrar"}
        </button>
        {form.id && (
          <button
            type="button"
            className="secondary"
            onClick={() => setForm({ id: null, nome: "", cargaHoraria: "" })}
          >
            Cancelar edição
          </button>
        )}
      </form>

      <div className="list">
        {loading ? (
          <p>Carregando...</p>
        ) : cursos.length === 0 ? (
          <p>Nenhum curso cadastrado.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Carga Horária</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {cursos.map((curso) => (
                <tr key={curso.id}>
                  <td>{curso.id}</td>
                  <td>{curso.nome}</td>
                  <td>{curso.cargaHoraria}</td>
                  <td>
                    <button onClick={() => handleEdit(curso)}>Editar</button>
                    <button
                      className="danger"
                      onClick={() => handleDelete(curso.id)}
                    >
                      Excluir
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

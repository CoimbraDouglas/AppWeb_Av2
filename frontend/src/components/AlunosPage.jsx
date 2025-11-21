import { useEffect, useState } from "react";
import {
  fetchAlunos,
  createAluno,
  updateAluno,
  deleteAluno,
} from "../api";

export default function AlunosPage({ auth }) {
  const { username, password } = auth;
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [form, setForm] = useState({
    id: null,
    nome: "",
    email: "",
    matricula: "",
  });

  async function carregarAlunos() {
    try {
      setLoading(true);
      setErro("");
      const data = await fetchAlunos(username, password);
      setAlunos(data);
    } catch (e) {
      setErro(e.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (username && password) {
      carregarAlunos();
    }
  }, [username, password]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if (form.id) {
        await updateAluno(form.id, form, username, password);
      } else {
        await createAluno(form, username, password);
      }
      setForm({ id: null, nome: "", email: "", matricula: "" });
      carregarAlunos();
    } catch (e) {
      setErro(e.message);
    }
  }

  function handleEdit(aluno) {
    setForm({
      id: aluno.id,
      nome: aluno.nome || "",
      email: aluno.email || "",
      matricula: aluno.matricula || "",
    });
  }

  async function handleDelete(id) {
    if (!confirm("Deseja realmente deletar este aluno?")) return;
    try {
      await deleteAluno(id, username, password);
      carregarAlunos();
    } catch (e) {
      setErro(e.message);
    }
  }

  return (
    <div className="card">
      <h2>Alunos</h2>

      {erro && <div className="error">{erro}</div>}

      <form onSubmit={handleSubmit} className="form">
        <input
          name="nome"
          placeholder="Nome"
          value={form.nome}
          onChange={handleChange}
          required
        />
        <input
          name="email"
          placeholder="E-mail"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          name="matricula"
          placeholder="Matrícula"
          value={form.matricula}
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
            onClick={() =>
              setForm({ id: null, nome: "", email: "", matricula: "" })
            }
          >
            Cancelar edição
          </button>
        )}
      </form>

      <div className="list">
        {loading ? (
          <p>Carregando...</p>
        ) : alunos.length === 0 ? (
          <p>Nenhum aluno cadastrado.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>Matrícula</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {alunos.map((aluno) => (
                <tr key={aluno.id}>
                  <td>{aluno.id}</td>
                  <td>{aluno.nome}</td>
                  <td>{aluno.email}</td>
                  <td>{aluno.matricula}</td>
                  <td>
                    <button onClick={() => handleEdit(aluno)}>Editar</button>
                    <button
                      className="danger"
                      onClick={() => handleDelete(aluno.id)}
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

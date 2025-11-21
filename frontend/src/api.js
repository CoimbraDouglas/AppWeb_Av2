const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

function getAuthHeader(username, password) {
  if (!username || !password) return {};
  const token = btoa(`${username}:${password}`);
  return { Authorization: `Basic ${token}` };
}

// -------- ALUNOS --------
export async function fetchAlunos(username, password) {
  const res = await fetch(`${API_URL}/api/alunos`, {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(username, password),
    },
  });
  if (!res.ok) throw new Error("Erro ao buscar alunos");
  return res.json();
}

export async function createAluno(aluno, username, password) {
  const res = await fetch(`${API_URL}/api/alunos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(username, password),
    },
    body: JSON.stringify(aluno),
  });
  if (!res.ok) throw new Error("Erro ao criar aluno");
  return res.json();
}

export async function updateAluno(id, aluno, username, password) {
  const res = await fetch(`${API_URL}/api/alunos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(username, password),
    },
    body: JSON.stringify(aluno),
  });
  if (!res.ok) throw new Error("Erro ao atualizar aluno");
  return res.json();
}

export async function deleteAluno(id, username, password) {
  const res = await fetch(`${API_URL}/api/alunos/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(username, password),
    },
  });
  if (!res.ok) throw new Error("Erro ao deletar aluno");
}

// -------- CURSOS --------
export async function fetchCursos(username, password) {
  const res = await fetch(`${API_URL}/api/cursos`, {
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(username, password),
    },
  });
  if (!res.ok) throw new Error("Erro ao buscar cursos");
  return res.json();
}

export async function createCurso(curso, username, password) {
  const res = await fetch(`${API_URL}/api/cursos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(username, password),
    },
    body: JSON.stringify(curso),
  });
  if (!res.ok) throw new Error("Erro ao criar curso");
  return res.json();
}

export async function updateCurso(id, curso, username, password) {
  const res = await fetch(`${API_URL}/api/cursos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...getAuthHeader(username, password),
    },
    body: JSON.stringify(curso),
  });
  if (!res.ok) throw new Error("Erro ao atualizar curso");
  return res.json();
}

export async function deleteCurso(id, username, password) {
  const res = await fetch(`${API_URL}/api/cursos/${id}`, {
    method: "DELETE",
    headers: {
      ...getAuthHeader(username, password),
    },
  });
  if (!res.ok) throw new Error("Erro ao deletar curso");
}

// -------- MATRÍCULA ALUNO x CURSO --------
export async function matricularAlunoEmCurso(idAluno, idCurso, username, password) {
  const res = await fetch(`${API_URL}/alunocurso/${idAluno}/cursos/${idCurso}`, {
    method: "POST",
    headers: {
      ...getAuthHeader(username, password),
    },
  });
  if (!res.ok) throw new Error("Erro ao matricular aluno no curso");
  return res.text();
}

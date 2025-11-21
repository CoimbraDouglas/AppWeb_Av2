package com.seuusuario.sistema_academico.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seuusuario.sistema_academico.model.Aluno;
import com.seuusuario.sistema_academico.model.AlunoCurso;
import com.seuusuario.sistema_academico.model.Curso;
import com.seuusuario.sistema_academico.repository.AlunoCursoRepository;
import com.seuusuario.sistema_academico.repository.AlunoRepository;
import com.seuusuario.sistema_academico.repository.CursoRepository;

@Service
public class AlunoCursoService {

    @Autowired
    private AlunoRepository alunoRepository;

    @Autowired
    private CursoRepository cursoRepository;

    @Autowired
    private AlunoCursoRepository alunoCursoRepository;

    public void matricularAlunoEmCurso(Long idAluno, Long idCurso) {

        // 1. Buscar aluno
        Aluno aluno = alunoRepository.findById(idAluno)
                .orElseThrow(() -> new RuntimeException("Aluno não encontrado"));

        // 2. Buscar curso
        Curso curso = cursoRepository.findById(idCurso)
                .orElseThrow(() -> new RuntimeException("Curso não encontrado"));

        // 3. Verificar se já está matriculado
        if (alunoCursoRepository.existsByAlunoIdAndCursoId(idAluno, idCurso)) {
            throw new RuntimeException("Aluno já matriculado neste curso");
        }

        // 4. Criar o relacionamento
        AlunoCurso alunoCurso = new AlunoCurso();
        alunoCurso.setAluno(aluno);
        alunoCurso.setCurso(curso);

        alunoCursoRepository.save(alunoCurso);
    }
}



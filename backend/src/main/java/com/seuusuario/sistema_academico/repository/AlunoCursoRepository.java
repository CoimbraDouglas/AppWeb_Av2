package com.seuusuario.sistema_academico.repository;

import com.seuusuario.sistema_academico.model.AlunoCurso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoCursoRepository extends JpaRepository<AlunoCurso, Long> {
    boolean existsByAlunoIdAndCursoId(Long alunoId, Long cursoId);

}


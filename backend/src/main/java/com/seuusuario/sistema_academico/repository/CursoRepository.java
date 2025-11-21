package com.seuusuario.sistema_academico.repository;

import com.seuusuario.sistema_academico.model.Curso;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CursoRepository extends JpaRepository<Curso, Long> {
}


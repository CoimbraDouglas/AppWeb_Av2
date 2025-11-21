package com.seuusuario.sistema_academico.repository;



import com.seuusuario.sistema_academico.model.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}


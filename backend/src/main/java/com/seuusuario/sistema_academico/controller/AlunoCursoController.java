package com.seuusuario.sistema_academico.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seuusuario.sistema_academico.service.AlunoCursoService;

@RestController
@RequestMapping("/alunocurso")
public class AlunoCursoController {

    @Autowired
    private AlunoCursoService alunoCursoService;

    @PostMapping("/{idAluno}/cursos/{idCurso}")
    public ResponseEntity<String> matricular(
            @PathVariable Long idAluno,
            @PathVariable Long idCurso) {

        alunoCursoService.matricularAlunoEmCurso(idAluno, idCurso);

        return ResponseEntity.ok("Aluno matriculado com sucesso!");
    }
}


package com.seuusuario.sistema_academico.service;


import com.seuusuario.sistema_academico.model.Aluno;
import com.seuusuario.sistema_academico.repository.AlunoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlunoService {

    private final AlunoRepository repo;

    public AlunoService(AlunoRepository repo) {
        this.repo = repo;
    }

    public Aluno criar(Aluno aluno) {
        return repo.save(aluno);
    }

    public List<Aluno> listarTodos() {
        return repo.findAll();
    }

    public Aluno buscarPorId(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Aluno não encontrado"));
    }

    public Aluno atualizar(Long id, Aluno alunoAtualizado) {
        Aluno existente = buscarPorId(id);
        existente.setNome(alunoAtualizado.getNome());
        existente.setEmail(alunoAtualizado.getEmail());
        existente.setMatricula(alunoAtualizado.getMatricula());
        return repo.save(existente);
    }

    public void deletar(Long id) {
        repo.deleteById(id);
    }
}


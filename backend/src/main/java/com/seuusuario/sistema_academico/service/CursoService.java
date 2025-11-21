package com.seuusuario.sistema_academico.service;


import com.seuusuario.sistema_academico.model.Curso;
import com.seuusuario.sistema_academico.repository.CursoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CursoService {

    private final CursoRepository repo;

    public CursoService(CursoRepository repo) {
        this.repo = repo;
    }

    public Curso criar(Curso curso) {
        return repo.save(curso);
    }

    public List<Curso> listarTodos() {
        return repo.findAll();
    }

    public Curso buscarPorId(Long id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Curso não encontrado"));
    }

    public Curso atualizar(Long id, Curso cursoAtualizado) {
        Curso existente = buscarPorId(id);
        existente.setNome(cursoAtualizado.getNome());
        existente.setCargaHoraria(cursoAtualizado.getCargaHoraria());
            
        return repo.save(existente);
    }

    public void deletar(Long id) {
        repo.deleteById(id);
    }
}


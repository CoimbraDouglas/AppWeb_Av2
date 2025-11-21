package com.seuusuario.sistema_academico.service;


import com.seuusuario.sistema_academico.model.Aluno;
import com.seuusuario.sistema_academico.repository.AlunoRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

class AlunoServiceTest {

    @Test
    void deveListarAlunos() {
        AlunoRepository repo = Mockito.mock(AlunoRepository.class);
        AlunoService service = new AlunoService(repo);

        Aluno a = new Aluno();
        a.setNome("Teste");
        when(repo.findAll()).thenReturn(List.of(a));

        List<Aluno> alunos = service.listarTodos();
        assertThat(alunos).hasSize(1);
        assertThat(alunos.get(0).getNome()).isEqualTo("Teste");
    }
}

# 🎓 Sistema Acadêmico — Projeto Completo  

Este repositório contém um sistema acadêmico dividido em **Backend (Spring Boot)** e **Frontend (React)**.  
Ele foi desenvolvido para fins educacionais, demonstrando:  
- API REST completa  
- Relacionamento entre entidades  
- Segurança com Spring Security  
- Monitoramento com Prometheus + Grafana  
- Testes de carga com JMeter  
- Deploy em Render e Vercel  

---

## Para conferir esse projeto no VERCEL

Bastar clicar no link a baixo: https://appweb-aluno-matricula.vercel.app

Para ver os builds logs: https://appweb-aluno-matricula-git-main-douglascoimbras-projects.vercel.app

---

## Informação Adicional

Esse projeto tem uma pasta com imagens do projeto detalhada e documentação basta acessar:

```
frontend/screenshots
```

---

⚡ Testes de carga/stress (JMeter)

Eu fiz testes para esse projeto com o JMETER. Baixei os logs de testes e adicionei ao projeto na pasta 
```
backend/testes
```

Você pode acessar os arquivos .jmx para conferir. 

```
backend/testes/Carga Alunos e Cursos..jmx
ou
backend/testes/sistema-academico-loadtest.jmx
```

---

## 📁 Estrutura do Repositório

```
/backend
└─ README.md ← Documentação completa do backend da API
/frontend
└─ README.md ← Como rodar, visualizar e consumir a API
README.md ← Este arquivo contendo uma descrição geral do projeto
```

---

Cada parte do projeto tem seu próprio README detalhado para facilitar o estudo.

---

## 🚀 Como navegar no repositório

| Pasta | Descrição |
|------|-----------|
| `/backend` | API REST em Spring Boot (Java) |
| `/frontend` | Interface web em React que consome a API |
| `/docs` (opcional) | Caso deseje adicionar diagramas, prints e documentação adicional |

---


## 📌 Requisitos gerais

Antes de rodar qualquer parte do sistema, instale:

### 🔧 Softwares Necessários

- Java 17+
- Maven 3.8+
- Node.js 18+
- Docker
- JMeter (para testes de carga)


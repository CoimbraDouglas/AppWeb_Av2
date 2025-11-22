
# ✅ FRONTEND 

# 🎨 Frontend — Sistema Acadêmico (React)

Este é o frontend do Sistema Acadêmico, criado em **React**, consumindo a API desenvolvida em Spring Boot.

O layout é simples, focado em aprendizado, demonstrando:

- Consumo de API
- Tela de cadastro de alunos
- Tela de listagem
- Integração entre backend + frontend

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

# 🧪 1. Tecnologias

- React 18
- Vite (caso tenha sido usado)
- Axios
- JavaScript
- HTML + CSS

---

# ▶ 2. Como Rodar o Frontend Localmente

Na pasta `/frontend`:

```
npm install
npm run dev
```

Acesse:

```
http://localhost:5173
```

❗ Possível problema:
Se aparecer erro “Failed to fetch”:

O backend não está rodando.

Porta errada (front usa 5173, back usa 8080).

CORS bloqueando (verifique backend).

---

🔌 3. Como consumir a API
Exemplo GET usando Axios:

js
```
axios.get("http://localhost:8080/api/alunos")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

```

Exemplo POST:

js
```
axios.post("http://localhost:8080/api/alunos", {
  nome: "Douglas",
  email: "email@email.com"
});
```

⚠ Atenção com CORS
No backend você precisa liberar:

java
```
@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();
        config.addAllowedOrigin("http://localhost:5173");
        config.addAllowedMethod("*");
        config.addAllowedHeader("*");
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

---

🚀 4. Deploy no Vercel

Como fazer o deploy no Vercel
4.1 Primeiro:

Crie conta: https://vercel.com

Clique em New Project

Selecione seu repositório GitHub

Configure:
```
Framework: React
```
```
Diretório: /frontend
```

Deploy

❗ Importante:

Se seu backend estiver em Render/Vercel, atualize o arquivo .env:

ini
```
VITE_API_URL=https://seu-backend-no-render.com/api
```

E no código:

```
axios.get(`${import.meta.env.VITE_API_URL}/alunos`);
```

Pronto! 

Se você quiser conferir esse projeto já no meu VERCEL, basta clicar no link abaixo

https://appweb-aluno-matricula.vercel.app

----

## 5. Imagens

Esse projeto contém imagem e documentação bem detalhada na pasta seguindo o caminho:

```
/frontend/screenschots
```

Você pode ver imagens do projeto, como uso do swagger, docker, api, etc..

5.1 Imagem do Sistema de Cadastro de alunos em modo web

![Descrição da imagem](/frontend/screenshots/CapturaFrontendaAlunos1.png)

5.2 Imagem do Sistema de Matricula em modo mobile

![Descrição da imagem](/frontend/screenshots/CapturaFrontendaMatricula2.png)


# ✅ **README 3 — FRONTEND `/frontend/README.md`**

```markdown
# 🎨 Frontend — Sistema Acadêmico (React)

Este é o frontend do Sistema Acadêmico, criado em **React**, consumindo a API desenvolvida em Spring Boot.

O layout é simples, focado em aprendizado, demonstrando:

- Consumo de API
- Tela de cadastro de alunos
- Tela de listagem
- Integração entre backend + frontend

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

```bash
npm install
npm run dev
Acesse:

arduino
Copiar código
http://localhost:5173
❗ Possível problema:
Se aparecer erro “Failed to fetch”:

O backend não está rodando.

Porta errada (front usa 5173, back usa 8080).

CORS bloqueando (verifique backend).

🔌 3. Como consumir a API
Exemplo GET usando Axios:

js
Copiar código
axios.get("http://localhost:8080/api/alunos")
  .then(res => console.log(res.data))
  .catch(err => console.error(err));
Exemplo POST:

js
Copiar código
axios.post("http://localhost:8080/api/alunos", {
  nome: "Douglas",
  email: "email@email.com"
});
⚠ Atenção com CORS
No backend você precisa liberar:

java
Copiar código
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
🚀 4. Deploy no Vercel
Passos:

Crie conta: https://vercel.com

Clique em New Project

Selecione seu repositório GitHub

Configure:

Framework: React

Diretório: /frontend

Deploy

❗ Importante:
Se seu backend estiver em Render/Vercel, atualize o arquivo .env:

ini
Copiar código
VITE_API_URL=https://seu-backend-no-render.com/api
E no código:

js
Copiar código
axios.get(`${import.meta.env.VITE_API_URL}/alunos`);
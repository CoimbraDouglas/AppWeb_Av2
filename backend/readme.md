# 🎓 Backend — Sistema Acadêmico (Spring Boot)

Este backend é uma API REST desenvolvida com **Spring Boot**, oferecendo gerenciamento de:

- 👨‍🎓 Alunos  
- 📚 Cursos  
- 📝 Matrículas  
- 🔐 Autenticação e autorização  
- 📊 Métricas para observabilidade (Prometheus + Grafana)

A documentação abaixo foi preparada para ser simples e direta, destacando pontos onde iniciantes costumam errar.

---

# 📌 1. Tecnologias Utilizadas

- **Java 17**
- **Spring Boot 3**
- Spring Web
- Spring Data JPA
- Spring Security
- H2 Database
- Actuator + Micrometer
- Prometheus
- Docker
- Maven

---

# ▶ 2. Como Rodar o Backend Localmente

### ✔ Comando para rodar
Dentro da pasta `/backend`:

```bash
mvn spring-boot:run
```

✔ Endpoint principal
bash
```
http://localhost:8080/api
```

--- 
❗ Pontos de atenção
Use Java 17+. Usuários com Java 8/11 terão erros de compilação.

Se der erro "port 8080 already in use", significa que outro app está usando a porta.

📄 3. Como acessar o Swagger (documentação da API)
Acesse:

bash
Copiar código
http://localhost:8080/swagger-ui.html
O projeto possui autenticação Basic.

---

🔐 Credenciais padrão

```
user: admin
password: admin123
```
Se o Swagger abrir mas não listar nada:
→ Você esqueceu de incluir as dependências springdoc-openapi.

🔐 4. Autenticação (Spring Security)
A API usa HTTP Basic.

Para testar qualquer endpoint protegido:

bash
Copiar código
curl -u admin:admin123 http://localhost:8080/api/alunos
📊 5. Configurando Prometheus e Grafana
✔ 5.1. Verificar se o Actuator está habilitado
Acesse:

bash
Copiar código
http://localhost:8080/actuator
Você DEVE ver o item /prometheus.

Se NÃO aparecer:
→ Você esqueceu de adicionar no application.yml:

yaml
Copiar código
management:
  endpoints:
    web:
      exposure:
        include: "prometheus"
  metrics:
    export:
      prometheus:
        enabled: true
✔ 5.2. Configuração do prometheus.yml
yaml
Copiar código
global:
  scrape_interval: 15s

scrape_configs:
  - job_name: 'spring-boot-app'
    metrics_path: '/actuator/prometheus'
    static_configs:
      - targets: ['host.docker.internal:8080']
⚠ Ponto crítico:
Se usar Linux → host.docker.internal NÃO funciona.
Trocar para:

csharp
Copiar código
host.docker.internal → 172.17.0.1
✔ 5.3. Acessando o Grafana
Acesse:

arduino
Copiar código
http://localhost:3000
Login padrão:

pgsql
Copiar código
user: admin
password: admin
Se aparecer erro de login:
→ Você ativou LDAP no grafana.ini sem querer.

⚡ 6. Testes de carga/stress (JMeter)
✔ 6.1. Instale o Apache JMeter
Site oficial: https://jmeter.apache.org

✔ 6.2. Criar um Test Plan
Endpoints recomendados:

GET /api/alunos

GET /api/cursos

POST /api/alunos

Configurações básicas
Thread Group:

Número de usuários: 50 / 100

Ramp-up: 10 segundos

Loop Count: 1 ou infinito

Adicionar Listeners:

Summary Report

Aggregate Report

View Results Tree

✔ 6.3. Como rodar o JMeter
▶ Modo gráfico (GUI)
Abra:

Copiar código
jmeter.bat
▶ Modo terminal (mais leve)
nginx
Copiar código
jmeter -n -t testes.jmx -l resultados.jtl
⚠ Se der erro "Java heap space":
Edite JMeter.bat aumentando a memória.

🚀 7. Deploy no Render
Crie conta em https://render.com

New → Web Service

Conecte seu repositório

Configure:

Environment: Java 17

Build Command:

go
Copiar código
mvn clean package -DskipTests
Start Command:

bash
Copiar código
java -jar target/sistema-academico-0.0.1-SNAPSHOT.jar
⚠ Atenção:
Render Free adormece após 15 minutos (cold start lento).

📚 8. Referências
Spring Boot Docs

Spring Security Docs

Swagger / OpenAPI

Prometheus Docs

Grafana Docs

JMeter Docs


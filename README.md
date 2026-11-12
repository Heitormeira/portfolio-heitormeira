# Portfólio — Heitor Meira

Portfólio pessoal de Heitor Meira — estudante de Ciência da Computação (UNICAP) e
estagiário de redes na **UM Telecom** (equipe N2 · CMC), com foco em **Redes,
Infraestrutura de TI e Telecomunicações**.

Construído com **Next.js (App Router) + React + CSS puro** (sem bibliotecas de UI).

## Rodando o projeto

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

Build de produção:

```bash
npm run build
npm start
```

## Páginas

| Rota         | Descrição                                                                 |
| ------------ | ------------------------------------------------------------------------- |
| `/`          | Portfólio em coluna única: abertura, Experiência, Formação, Projetos, Ferramentas e Contato |
| `/curriculo` | Currículo imprimível (Ctrl+P / botão "Baixar / Imprimir PDF")              |
| `/forca`     | Jogo da Forca com palavras de tecnologia, programação e redes              |

## Jogo da Forca

- 36 palavras de tecnologia, programação e redes; sorteio evita repetir a palavra anterior
- 6 erros máximo; teclado virtual + campo de entrada (aceita maiúsculas/minúsculas)
- Validação de letras repetidas e caracteres inválidos
- Boneco em SVG que evolui a cada erro, com animação discreta
- Telas de vitória/derrota com botão "Jogar novamente"

## Estrutura

```
app/
  page.jsx          # Página inicial (portfólio)
  layout.jsx        # Layout raiz (Navbar + Footer)
  globals.css       # Design system e estilos
  curriculo/page.jsx
  forca/page.jsx
components/
  Navbar.jsx        # Navegação responsiva (inclui link p/ /forca)
  Footer.jsx
  HangmanGame.jsx   # Lógica completa do jogo
  PrintButton.jsx   # Botão de impressão do currículo
scripts/
  forca-e2e.mjs     # Teste E2E do jogo (Chrome headless via CDP)
```

## Teste E2E do jogo

Com o site rodando (`npm start`), ajuste a constante `APP` em `scripts/forca-e2e.mjs`
se necessário e rode:

```bash
node scripts/forca-e2e.mjs
```

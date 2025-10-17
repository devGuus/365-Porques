# 💘 365 Motivos para te Amar

Um site simples e romântico criado para mostrar **um motivo por dia** do porquê você ama alguém especial ❤️  
Cada dia exibe uma nova mensagem automaticamente, e só o motivo do dia é revelado — os próximos permanecem em segredo até o dia chegar ✨  

---

## 💡 Funcionalidades

- 📅 **Um novo motivo por dia** — o site libera automaticamente o motivo correspondente à data atual.
- 💌 **Lista personalizável** — você pode editar o arquivo `motivos.txt` e adicionar seus próprios 365 motivos.
- 🎨 **Design animado e responsivo** — corações flutuantes e uma transição suave ao abrir o site.
- 🖼️ **Fundo personalizado** — use sua própria imagem de fundo (arquivo `fundo.jpg`).
- 💾 **Memória local** — o site guarda o primeiro dia de acesso no navegador, para manter a contagem estável mesmo recarregando.

---

## 🧱 Estrutura do Projeto

📁 365-motivos/
├── index.html # Página principal
├── style.css # Estilos e animações
├── script.js # Lógica de exibição e contagem de dias
├── motivos.txt # Lista de motivos (um por linha)
└── fundo.jpg # Imagem de fundo do site

---

## ⚙️ Como Funciona

1. O **JavaScript** carrega a lista de motivos do arquivo `motivos.txt`.
2. O navegador armazena o **primeiro dia de acesso** usando `localStorage`.
3. A cada novo dia (a partir da meia-noite), o site exibe o próximo motivo da lista.
4. O usuário pode ver os motivos anteriores, mas nunca os futuros.

---

## 🚀 Como Hospedar (GitHub + Vercel)

1. Crie um repositório no **GitHub** e envie todos os arquivos acima.
2. Vá até [Vercel](https://vercel.com), conecte sua conta ao GitHub.
3. Clique em **New Project** → escolha o repositório → selecione **Framework: Other**.
4. Mantenha o **Root Directory** como `/` e clique em **Deploy**.
5. Seu site ficará disponível em algo como: https://seu-projeto.vercel.app

---

## 📝 Como Editar os Motivos

Abra o arquivo `motivos.txt` e adicione um motivo por linha, exemplo:
"Seu sorriso ilumina meu dia"
"Você sempre acredita em mim"
"Seu abraço é meu lugar favorito"


O primeiro motivo da lista será exibido no **dia 1**, o segundo no **dia 2**, e assim por diante 💖

---

## 🌸 Créditos

Feito com 💕 por [Gustavo Marcos Xavier Dos Santos Silva](https://github.com/)  
Um projeto criado com amor, para espalhar amor.  

# Projeto DevLinks 🚀

![Status](https://img.shields.io/badge/status-concluído-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

Um agregador de links no estilo "link in bio" para ser usado em redes sociais, totalmente personalizável e construído com tecnologias web puras. Este projeto foi desenvolvido como um desafio para praticar e aprimorar habilidades em HTML, CSS e JavaScript.

## 🔗 Acesse a Versão de Exemplo

Você pode ver uma versão funcional do projeto original no link abaixo:

- **[Clique aqui para ver o projeto online](https://maykbrito.github.io/devlinks/)**

## 📸 Preview

<p align="center">
  <em>(Adicione aqui um print do seu projeto, se desejar)</em>
</p>
<p align="center">
  O projeto conta com um tema claro e um tema escuro, que podem ser alternados dinamicamente.
</p>

## ✨ Funcionalidades

-   **🎨 Tema claro e escuro:** Alterne entre os modos com um clique.
-   **🖼️ Troca de foto de perfil:** A foto de perfil muda de acordo com o tema selecionado.
-   **🖱️ Efeitos Interativos:** Animação suave na foto de perfil ao passar o mouse.
-   **🌈 Fundo Animado:** Um gradiente sutil e animado no fundo da página.
-   **📱 Layout Responsivo:** Se adapta bem a diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando apenas as tecnologias fundamentais da web, sem o uso de frameworks ou bibliotecas externas complexas.

-   **HTML5:** Para a estrutura e semântica do conteúdo.
-   **CSS3:** Para estilização, animações, layout (Flexbox) e variáveis de cores.
-   **JavaScript (Vanilla JS):** Para a interatividade, como a troca de tema e a lógica de mudança de imagens.

## ⚙️ Como Executar

Por ser um projeto estático, você não precisa de um servidor ou de processos de build complexos.

1.  **Clone o repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repositorio.git
    ```
2.  **Abra o arquivo `index.html`:**
    Navegue até a pasta do projeto e abra o arquivo `index.html` diretamente no seu navegador de preferência.

## ✏️ Como Personalizar

Para deixar o projeto com a sua cara, siga os passos abaixo:

#### 1. Alterar a Foto de Perfil

-   Coloque suas duas fotos (uma para o tema escuro e outra para o tema claro) dentro da pasta `/assets`.
-   No arquivo `script.js`, altere os nomes dos arquivos de imagem para corresponderem aos seus:

    ```javascript
    // Em script.js
    if (html.classList.contains("light")) {
      img.setAttribute("src", "./assets/sua-foto-clara.png"); // Mude aqui
    } else {
      img.setAttribute("src", "./assets/sua-foto-escura.png"); // Mude aqui
    }
    ```

-   Não se esqueça de atualizar a imagem inicial no `index.html`:

    ```html
    <!-- Em index.html -->
    <img src="./assets/sua-foto-escura.png" ... />
    ```

#### 2. Alterar Nome e Links

-   Abra o arquivo `index.html`.
-   Altere o seu nome de usuário no parágrafo dentro da `div#profile`:

    ```html
    <p>@seu-usuario</p>
    ```

-   Modifique os textos e os `href` dos links dentro da lista `<ul>`.

#### 3. Alterar as Cores

-   Abra o arquivo `style.css`.
-   As cores principais estão definidas como variáveis CSS no topo do arquivo.
-   Modifique as variáveis dentro de `:root` para o tema escuro e dentro de `.light` para o tema claro.

    ```css
    /* Em style.css */
    :root {
      --text-color: #E0E0E0; /* Cor do texto no tema escuro */
      /* ... outras variáveis ... */
    }

    .light {
      --text-color: #212121; /* Cor do texto no tema claro */
      /* ... outras variáveis ... */
    }
    ```

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

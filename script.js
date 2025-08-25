function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {

    img.setAttribute("src", "./assets/foto.jpeg")
    img.setAttribute("alt", "Foto de Dudu sorrindo, com os braços esticados em uma escada.")
  } else {

    img.setAttribute("src", "./assets/imagem.jpeg")
    img.setAttribute("alt", "Foto de dudu sorrindo na liberdade SP.")
  }
}
let body = document.querySelector("body")

function fillHeader() {
    
    let titulo = document.createElement("h2")
    titulo.innerHTML = "Olá, sou Brenda Christine"
    titulo.setAttribute ("id","titulo")
    body.appendChild(titulo)
}
function fillMainSection() {
    let subtitulo = document.createElement("h2")
    subtitulo.innerHTML = "O animal que me identifico mais é o gato 🐱"
    subtitulo.setAttribute ("id","subtitulo")
    body.appendChild(subtitulo)

    let descricao = document.createElement("h2")
    descricao.innerHTML = "Gatos são animais livres, sagazes, brincalhões. <br> O que mais me identifico é na individualidade e independência do animal."
    descricao.setAttribute ("id","descricao")
    body.appendChild(descricao)

    let conteiner = document.createElement("div")
    conteiner.classList.add("conteiner")

    let info = document.createElement("div")
    info.classList.add("info")

   //espécie
   let paragrafo = document.createElement("p")
   paragrafo.innerHTML = "Felino - Espécie: Gato doméstico (Felis silvestris catus)"
   info.appendChild(paragrafo)


    //curiosidades
   let curiosidades = document.createElement("p")
   curiosidades.innerHTML = "Curiosidades"
   curiosidades.classList.add("curiosidades")
   info.appendChild(curiosidades)


   //lista
   let lista = document.createElement("ul")
   lista.innerHTML = "<li>O cérebro de um gato é biologicamente mais similar ao de um humano do que o cérebro de um cão. Ambos, humanos e gatos, têm uma região idêntica no cérebro responsável pelas emoções.</li> <li>Existem mais de 500 milhões de gatos domésticos no mundo, e aproximadamente 40 raças reconhecidas.</li> <li>Um gato salta 5 vezes a sua altura num único salto.</li> <li>A raça mais popular de gatos é a persa, seguida pela Maine Coon e Siamesa.</li>"
   info.appendChild(lista)


   let link = document.createElement("a")
   link.setAttribute("href","https://www.hospvetsantamarinha.com/blog/60-curiosidades-gatos/")
   link.innerHTML = "Curiosidades sobre gatos"
   info.appendChild(link)

   //div imagem
   let img = document.createElement("div")
   img.classList.add("img")

   //imagem
   let imagem = document.createElement("img")
   imagem.setAttribute("src","cat.jpg")
   img.appendChild(imagem)


   conteiner.appendChild(info)
   conteiner.appendChild(img)
   body.appendChild(conteiner)

}
fillHeader()
fillMainSection()

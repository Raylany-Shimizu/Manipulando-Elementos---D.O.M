const arrayPostagens = [
    {
        titulo: "Pop Vegan",
        subtitulo: "Comida vegana para todos!",
        data: "06/07/2022",
        texto: "Restaurante em Consolação com comida por kilo no almoço e rodízio de pizzas à noite, tudo 100% vegano. Vale muito a pena conhecer :)"
    },
    {
        titulo: "Make Hommus. Not War",
        subtitulo: "Só delivery, para curtir em casa!",
        data: "18/08/2022",
        texto: "Neste restaurante não só pode, como é encorajado comer o antepasto como prato principal. Recomendamos kibes e a kafta bovina."
    },
    {
        titulo: "Churrascada do Mar",
        subtitulo: "Melhor do que estar na praia!",
        data: "30/08/2022",
        texto: "Todos conhecemos e amamos um bom churrasco, mas o que você acha de experimentar um churrasco focao em frutos do mar? Nós gostamos, experimente e nos conte o que você achou!"
    },
]

for (let i = 0; i < arrayPostagens.length; i++){
    console.log(arrayPostagens[1].titulo)

    // Criar um elemento
    let article = document.createElement("article")
    
    // Manipular o elemento
    article.innerHTML = `
    <h3>${arrayPostagens[i].titulo}</h3>
    <p class="subtitulo">${arrayPostagens[i].subtitulo}</p>
    <div class="data">${arrayPostagens[i].data}</div>
    <p>${arrayPostagens[i].texto}
    </p>
    `
    article.id = `post-${i + 1}`
    
    // Adicionar o elemento na página
    let main = document.querySelector("main")
    main.appendChild(article)
}
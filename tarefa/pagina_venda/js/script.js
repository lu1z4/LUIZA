const produtos = [
    { nome: "Base Dior", preco: 415.00, imagem: "https://http2.mlstatic.com/D_NQ_NP_878971-MLU69427857473_052023-O.webp"},
    { nome: "Lip Glow Dior", preco: 265.00, imagem: "https://cdn.pacifiko.com/image/cache/catalog/p/Nzg0M2QxMz-500x500.jpg"},
    { nome: "Rímel Dior", preco: 279.00, imagem: "https://images-americanas.b2w.io/produtos/2418156248/imagens/dior-diorshow-iconic-overcurl-694-brown-mascara-para-cilios-6g/2418156248_1_xlarge.jpg" },
    { nome: "Sérum Dior", preco: 989.00, imagem: "https://cdn2.primor.eu/media/catalog/product/cache/8d3aba296f7a18b5251ee30fa5db42b2/3/3/3348901624022_0efc.jpg"}
];

const produtosDiv = document.getElementById("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalElement = document.getElementById("total");

let carrinho = [];

function exibirProdutos() {
    produtos.forEach(produto => {
        const produtoDiv = document.createElement("div");
        produtoDiv.classList.add("produto");
        produtoDiv.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho('${produto.nome}', ${produto.preco})">
            Adicionar ao Carrinho</button>
        `;
        produtosDiv.appendChild(produtoDiv);
    });
}

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    atualizarCarrinho();
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function atualizarCarrinho() {
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach((item, index) => {
        const itemLista = document.createElement("li");
        itemLista.innerHTML = `${item.nome} - R$ ${item.preco.toFixed(2)} <button onclick="removerDoCarrinho(${index})">Remover</button>`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });
    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}

exibirProdutos();
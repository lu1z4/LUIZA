const produtos = [
    {nome: "Produto 1", preço:85.00, imagem:"/image/produto1.jpg"}
    {nome: "Produto 2", preço:29.00, imagem:"/image/produto2.jpg"}
    {nome: "Produto 3", preço:45.00, imagem:"/image/produto3.jpg"}
    {nome: "Produto 4", preço:69.00, imagem:"/image/produto4.jpg"}

];

let carrinho =[];

const produtosDiv = document.gerElementByld("produtos");
const carrinhoLista = document.getElementById("carrinho");
const totalSpan = document.getElementById("total");

//Função para exibir os produtos na Tela
function exibirProdutos() {
    produtos.forEach(produto => {
    const produtoDiv =document.createElement("div");
    produtosDiv.classList.add("produto");
    produtoDiv.innerHTML = 
    <img src="${produto.imagem}" alt="${produto.nome}">
    <h3>${produto.nome}</h3>
    <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
    <button onclik="adicionarApCarrinho (`${produto.name}`, ${produto.preço})">
        ';
        produtDiv.appendChild(produtoDiv);
    });
}

//Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    carrinho.push({nome, preço});
    atualizarCarrinho();
}

function removerDoCarrinho(index){
    carrinho.splice(index, 1);
    atualizarCarriho()
}

//Função atualiza a exibição do carrinho e o total
function atualizarCarrinho() {
    carrinhoLista.innerHTML = "";
    let total = 0;
    carrinho.forEach(item, index) => {
        const itemLista = document.createElement("li");
        intemLista.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;
        carrinhoLista.appendChild(itemLista);
        total += item.preco;
    });
    totalSpan.textContent = `Total: R$ ${total.toFixed(2)}`;
}

//Inicializa a exibiçãodos produtos
exibirProdutos();


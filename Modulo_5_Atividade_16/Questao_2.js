const prompt = require('prompt-sync')();

class Product {
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }
}

class Client {
    constructor (name, cpf) {
        this.name = name;
        this.cpf = cpf
    }
}

class Sale {
    constructor (client, products) {
        this.client = client;
        this.products = products;
    }
    total() {
        let total = 0;
        for (let i = 0; i < this.products.length; i++) {
            total += this.products[i].price;
        }
        return total;
    }
}

const clientsStringJson = '[{"name":"Client 1", "cpf":"12345678901"},'+
'{"name":"Client 2", "cpf":"10987654321"},'+
'{"name":"Client 3", "cpf":"12345098765"},'+
'{"name":"Client 4", "cpf":"12345098765"},'+ 
'{"name":"Client 5", "cpf":"12345098765"},'+
'{"name":"Client 6", "cpf":"12345098765"},'+
'{"name":"Client 7", "cpf":"12345098765"},'+
'{"name":"Client 8", "cpf":"12345098765"},'+
'{"name":"Client 9", "cpf":"12345098765"},'+
'{"name":"Client 10", "cpf":"12345098765"}]';

const clients = JSON.parse(clientsStringJson);

const productsStringJson = '[{"name":"Product 1", "price":1.00},'+
'{"name":"Product 2", "price":2.00},'+
'{"name":"Product 3", "price":3.00},'+
'{"name":"Product 4", "price":4.00},'+
'{"name":"Product 5", "price":5.00},'+
'{"name":"Product 6", "price":6.00},'+
'{"name":"Product 7", "price":7.00},'+
'{"name":"Product 8", "price":8.00},'+
'{"name":"Product 9", "price":9.00},'+
'{"name":"Product 10", "price":10.00}]';

const products = JSON.parse(productsStringJson);

const sale1 = new Sale(clients[0], products);
console.log(sale1.total());

function Menu() {
    while (true) {
        console.log("\n1. Inserir Cliente");
        console.log("2. Inserir Produto");
        console.log("3. Realizar Venda");
        console.log("4. Sair");

        const opcao = prompt('\nSelecione uma opção: ');

    
        if (opcao === '1') {
            console.log('Inserindo um novo cliente...');
            const name = prompt('Nome do Cliente: ');
            const cpf = prompt('CPF: ');
            const novoCliente = new Client(name, cpf);
            clients.push(novoCliente);
            console.log('Cliente inserido com sucesso!');
            console.log('\nLista de Clientes:')
            console.log(clients)
        }

        else if (opcao === '2') {
            console.log('Inserindo um novo produto...');
            const name = prompt('Nome do Produto: ');
            const price = parseint(prompt('Preço: '));
            const novoProduto = new Product(name, price);
            products.push(novoProduto);
            console.log('Produto inserido com sucesso!');
            console.log('\nLista de Produtos:')
            console.log(products)
        }

        else if (opcao === '3') {
            console.log('Realizando venda...');
            console.log(products)
            const produtos = prompt('\nSelecione os produtos que deseja da seguinte forma(1, 2, 3): ')
            const indexProdutos = produtos.split(',').map(index => parseInt(index));
            const produtosVenda = indexProdutos.map(index => products[index - 1]);

            let totalVenda = 0;
            console.log('Produtos que foram selecionados:');
            produtosVenda.forEach(produto => {
                console.log(`- ${produto.name}: R$ ${produto.price}`);
                totalVenda += produto.price;
            });
            console.log(`Total da Venda: R$ ${totalVenda.toFixed(2)}`);
        }

        else if (opcao === '4') {
            console.log('Encerrando Programa.');
            break;
        }

        else {
            console.log('Opção inválida. Selecione uma das opções abaixo:')
        }
    }
}

Menu();
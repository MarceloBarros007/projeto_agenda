const form = document.getElementById("form-agenda");
const contatos = [];
const telefone = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
  
});

function adicionaLinha() {
    const inputNomeDoContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('telefone-contato');

        if (telefone.includes(inputNumeroTelefone.value)) {
            alert(`O Telefone: ${inputNumeroTelefone.value} já foi inserido`);
        }else{
            contatos.push(inputNumeroTelefone.value);
            telefone.push(inputNumeroTelefone.value);
        
        let linha = '<tr>';
        linha += `<td>${inputNomeDoContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '</tr>';
        
        linhas += linha;
    }


    inputNomeDoContato.value = '';
    inputNumeroTelefone.value = '';
    }

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


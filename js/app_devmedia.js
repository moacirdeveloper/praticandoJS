let asidediv = document.getElementsByClassName("aside");
let itemaside = document.getElementsByClassName("itemNoticia");
let itemBusca = document.getElementById("itemBusca");

//Array armazenar noticias
let itens = [];
let frmCadastro, tituloCadastro, noticiaCadastro, objNoticia, trNoticia;
let valorBusca, resultadoBusca;

//Criando local armazenamento
localStorage.noticias = "[]";

//asidediv.addEventListener("click", cadastrarNoticia);

function cadastrarNoticia(){

    //asidediv[0].innerHTML= " ";

    asidediv[0].innerHTML = `
                            <form id="idCadastrar" name="nameCadastrar" frmaction="#">
                                <input id="tituloItem" type="text" placeholder="Digite o titulo da noticia">
                                <textarea name="notica" id="noticiaItem" cols="30" rows="10" placeholder="Entre com a noticia"></textarea>
                                <input onclick="cadastrarItemNoticia()" type="button" value="Cadastrar">
                            </form>
                            `
}

function buscarNoticias(){

    //Carregando noticias itens local
    //itens = JSON.parse(localStorage.getItem("noticias"));

    valorBusca = itemBusca.value;
    console.log(valorBusca);

    resultadoBusca = itens.filter(function(item){    
                            //if(item.titulo == valorBusca){
                                if(item.titulo.match(valorBusca)){
                                    //if(item.noticia.indexOf(valorBusca, 0) >= 0){
                                        console.log(item.titulo.indexOf(valorBusca, 0));
                                return item;
                            };
                           
            });

    console.log(resultadoBusca);

    trNoticia = `<table>
                    <thead>
                    <tr>
                            <th>Titulo</th>
                            <th>Noticia</th>
                        </tr>
                    </thead>
                    <tbody>
                `;

    if(resultadoBusca){

                //resultadoBusca.forEach(function(itemTR){
                //resultadoBusca.map(function(itemTR){
                resultadoBusca.filter(function(itemTR){
                    if(itemTR){
                                trNoticia += `
                                            <tr>
                                                <td>${itemTR.titulo}</td>
                                                <td>${itemTR.noticia}</td>
                                            </tr>
                                            `
                            };
                        }
                )

                console.log(resultadoBusca);

    }else{

        trNoticia += `
                     <tr>
                        <td>Sem</td>
                        <td>Resultados</td>
                    </tr>
                    `;

    }

    trNoticia += `
                    </tbody>
                    </table>
                `

    asidediv[0].innerHTML = trNoticia;

}

function exibirNoticias(){

    //Carregando noticias itens local
    itens = JSON.parse(localStorage.getItem("noticias"));

    //console.log(itens);

    trNoticia = `<table>
                    <thead>
                    <tr>
                            <th>Titulo</th>
                            <th>Noticia</th>
                        </tr>
                    </thead>
                    <tbody>
                `;

    itens.forEach(function(itemTR){
                               trNoticia += `
                                            <tr>
                                                <td>${itemTR.titulo}</td>
                                                <td>${itemTR.noticia}</td>
                                            </tr>
                                            `
                            });

    trNoticia += `
                    </tbody>
                    </table>
                `

    asidediv[0].innerHTML = trNoticia;

}

function cadastrarItemNoticia(){
    //alert("Botao Cadastrar");
    frmCadastro = document.getElementsByTagName("form");
    tituloCadastro = frmCadastro[0].tituloItem;
    noticiaCadastro = frmCadastro[0].noticiaItem;
    //console.log(frmCadastro[0].tituloItem.value);
    //console.log(frmCadastro[0].tituloCadastro.value);

    objNoticia = {
                    titulo: `${tituloCadastro.value}`,
                    noticia: `${noticiaCadastro.value}`
    }

    //inserindo objeto array itens
    itens.push(objNoticia);

    //console.log(itens);

    localStorage.setItem("noticias", JSON.stringify(itens));

    //inicializando formulario
    tituloCadastro.value = "";
    noticiaCadastro.value = "";

    tituloCadastro.focus();
}
const endereco = {
    rua: "Algum Lugar",
    cep: "46500000",
    Estado: "Bahia",
    municipio: "Macaúbas",
      contato: {
        nome: "Nilton",
        telefone: "4002-8922",
        whatsapp: "(123)4002-8922",
      }
}
console.log(endereco.contato.whatsapp)//<<< propriedade do objeto
delete endereco.contato// <<posso excluir
endereco.referencia = "maconha doidona"//<<posso adicionar 
console.log(endereco)// << mostra tudo que está nas chaves
console.log(contato["nome"]) //<<outra forma
console.log(endereco["contato"].contato)//<<forma mista
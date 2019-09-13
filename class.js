class question{
	constructor(id, items, itemCorreto){
	this.id = id;
	this.items = items;
	this.itemCorreto = itemCorreto;
}
	criar(id, items){
		//tenho que pegar o arquivo, e tirar uma questao de la

	}
	buscar(){

	}
	consultar{
		//consultar uma questao especifica pra saber a % de acerto
	}
	editar(){
		//

	}
	remover(){
		
	}

}

class saveFile{
	constructor(jsonString){
	this.jsonString = jsonString;
}
	fs.writeFile('./newCustomer.json', jsonString, err => {
    	if (err) {
        console.log('Error writing file', err)
   	  } else {
        console.log('Successfully wrote file')
    }
})
}

class readFile{
	constructor(jsonString){
	this.jsonString = jsonString;
}
	const fs = require('fs');
	fs.readFile('./newCustomer.json', 'utf8', (err, jsonString) => {
    if (err) {
        console.log("Error reading file from disk:", err);
        return
    }
    try {
        const customer = JSON.parse(jsonString);
        console.log("Customer address is:", customer.address); // => "Customer address is: Infinity Loop Drive"
	} catch(err) {
        console.log('Error parsing JSON string:', err);
    }
})

}

class register{
	constructor(nome,id,dataNascimento,descricao,sexo){
	this.nome = nome;
	this.id = id;
	this.dataNascimento = dataNascimento;
	this.descricao = descricao;
	this.sexo = sexo;
}
	novo(id, items){
		//tenho que pegar o arquivo, e tirar uma questao de la

	}
	buscar(){

	}
	consultar{
		//consultar uma questao especifica pra saber a % de acerto
	}
	editar(){
		//

	}
	remover(){
		
	}

}

class configuration{
	constructor(){
	this.;
	this.;
}
}

class test{
	constructor(){
	this.;
	this.;
}
}

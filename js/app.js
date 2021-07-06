class Lista{
	
	constructor(){
		this.arrayProduto = []
		this.id = 1
	}
	
	salvar(){
		let produto = {}
		this.pegarDados(produto)
		if(this.validaDados(produto) == true){
			this.adicionar(produto)
		}
		this.listarProduto(produto)
		this.limpar()
	}
	
	cancela(){
		this.limpar()
	}
	
	listarProduto(){
		let tbody = document.getElementById('tbody')
		tbody.innerText = ''
		for(let i = 0;i < this.arrayProduto.length;i++){
			let tr = tbody.insertRow()
			
			//let td_id = tr.insertCell()
			let td_descricao = tr.insertCell()
			let td_qtd = tr.insertCell()
			let td_preco = tr.insertCell()
			let td_total = tr.insertCell()
			//let td_acao = tr.insertCell()
			
			//td_id.innerText = this.arrayProduto[i].id
			td_descricao.innerText = this.arrayProduto[i].descricao
			td_qtd.innerText = this.arrayProduto[i].qtd
			td_preco.innerText = this.arrayProduto[i].preco
			//td_acao.innerText = this.arrayProduto[i].acao
			//td_total.innerText = this.arrayProduto[i].qtd * this.arrayProduto[i].preco
		}
	}
	
	adicionar(produto){
		this.arrayProduto.push(produto)
		this.id++
	}
	
	pegarDados(getProduto){
		getProduto.id = this.id
		getProduto.descricao = document.getElementById('descricao').value
		getProduto.qtd = document.getElementById('qtd').value
		getProduto.preco = document.getElementById('preco').value
		getProduto.preco = parseFloat(getProduto.preco)
		getProduto.qtd = parseFloat(getProduto.qtd)
		
		return
	}
	
	validaDados(produto){
		let msg = ''
		if(produto.descricao == ''){
			msg += '** Descrição inválida **\n- Informe a descrição do produto!'
		}
		
		if(msg != ''){
			alert(msg)
			return false
		}
		
		return true
	}
	
	limpar(){
		document.getElementById('descricao').value = ''
		document.getElementById('qtd').value = ''
		document.getElementById('preco').value = ''
	}
	
	
}

let lista = new Lista()
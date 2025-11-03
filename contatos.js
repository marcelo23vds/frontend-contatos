/* *********************************************************************
* Objetivo: Aprender como fazer o CRUD (todos os verbos) no Frontend
* Data: 03/11/2025
* Autor: Marcelo Vieira
* Versão: 1.0
* **********************************************************************/

'use strict'

async function lerContatos() {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const response = await fetch(url)

    const contatos = await response.json()

    console.log(contatos)

    return contatos
}

async function criarContato(contato) {
    const url = "https://bakcend-fecaf-render.onrender.com/contatos"

    const options = {
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok
}

async function atualizarContato(id, contato) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:"PUT",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(contato)
    }

    const response = await fetch(url, options)

    console.log(response.ok)

    return response.ok
}

async function deletarContato (id) {
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}`

    const options = {
        method:"DELETE"
    }

    const response = await fetch(url, options)

    return response.ok
}

const novoContato = {
    "nome": "Marcelo ATUALIZADO",
    "celular": "11 9 0000-0000",
    "foto": "semFoto.png",
    "email": "marcelo@gmail.com",
    "endereco": "Av. SENAI, 127",
    "cidade": "Jandira"
}

//criarContato(novoContato)
//lerContatos()

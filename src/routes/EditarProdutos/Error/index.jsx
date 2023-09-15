import { useParams, useNavigate } from "react-router-dom"
import {ListaProdutos } from "../../../components/ListaProdutos"
 
export default function EditarProdutos(){

    const lista = ListaProdutos
    const navegacao = useNavigate()
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0]

    const salvar = ()=>{
        alert(`Produto: ${produto.nome} editado com sucesso!`)
        return navegacao(`/produtos`)
    }



    return(
        <main>
            <h1>{produto.nome}</h1>
            <p>Seu preço é de apenas: {produto.preco} </p>
            <img src= {produto.image} alt="Imagem Iphone 13" />
            <button onClick={salvar}>Salvar</button>
        </main>
    )
}
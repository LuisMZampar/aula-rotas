import { useParams, useNavigate } from "react-router-dom"
import {ListaProdutos } from "../../../components/Aparelhos"
 
export default function EditarProdutos(){

    const lista = ListaProdutos
    const {id} = useParams()

    const proc = lista.filter(prod => prod.id == id)
    const produto = proc[0]

    return(
        <main>
            <h1>{produto.nome}</h1>
            <p>Seu preço é de apenas: {produto.preco} </p>
            <img src= {produto.image} alt="Imagem Iphone 13" />
        </main>
    )
}
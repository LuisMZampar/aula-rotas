import { Link } from "react-router-dom"
import { ListaProdutos } from "../../components/Aparelhos"

export default function Produtos() {
    return (
        <main>
            <h1>Produtos</h1>
            {ListaProdutos.map(prod => (
                <div key={prod.id}>
                    <Link to={`/produtos/editar/${prod.id}`}>
                        Ver detalhes: {prod.nome}
                    </Link>
                </div>
            ))}
        </main>
    )
}
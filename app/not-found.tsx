import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h1>Página 404 não encontrada!</h1>
            <p>Essa página que tentou acessar não existe!</p>
            <Link href='/'>Voltar para página home.</Link>
        </div>
    )
}
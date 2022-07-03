import { Container } from './styles'
interface IArticle {
    title: string
    image?: string
    children: React.ReactNode
}

const Article : React.FC<IArticle>= ({title, image, children}) => {

    return (
        <Container>
            <h2>{title}</h2>
            <img src={image} alt="" />
            <p>{children}</p>
        </Container>
    )
}

export default Article
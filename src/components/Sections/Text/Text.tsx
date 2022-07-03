import { Container, Content } from './styles'

interface IText{
    children: React.ReactNode
    title: string
    // icon?: React.ReactNode
}

const Text: React.FC<IText>= ({children, title}) => {

    return (
        <Container>
            <h2> { title }</h2>
            <Content>
                {children}
            </Content>
        </Container>
    )
}

export default Text
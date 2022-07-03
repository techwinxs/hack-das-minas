import { Container, Button, ContentButton } from './styles'
import Person from '../Avatar/Person/Person'

interface IAnalyseSimpthoms {
    title: string
    image?: string
}

const AnalyseSimpthoms : React.FC<IAnalyseSimpthoms>= ({title, image}) => {

    return (
        <Container>
            <h2>{title}</h2>

            <Person />

            <p>Essa semana ela registrou</p>
            <q> Estou me sentindo cansada e sem muita paciência. Queria apenas ficar quietinha deitada na minha cama, assistindo um filme de terror.”</q>

            <ContentButton>
                <Button>Compartilhar</Button>
            </ContentButton>
      
        </Container>
    )
}

export default AnalyseSimpthoms
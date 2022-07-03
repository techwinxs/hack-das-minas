import { Container, ContentButton, Button } from './styles'
import Text from '../Text/Text'


const Tips : React.FC = () => {

    return (
        <Container>
            <Text title="Dicas para o dia de hoje"> 
                <p>Planeje um dia incrível para vocês se divertirem. Quer dicas de lugares e coisas legais pata fazer? Temos uma lista bem legal.</p>
            </Text>
            
            <ContentButton>
                <Button>Saiba Mais</Button>
            </ContentButton>
        </Container>
    )
}

export default Tips
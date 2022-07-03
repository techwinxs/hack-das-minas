import Container from "../components/ui/Container/Container"
import Text from '../components/sections/Text/Text'
import Article from "../components/sections/Article/Article"
import Image1 from '../assets/article1.jpg'
import Image2 from '../assets/article2.jpg'
import Image3 from '../assets/article3.jpg'

const Ideas = () => {
    return (
        <Container>
            <Text title="Dicas para o dia de hoje">
                <p>Planeje um dia incrível para vocês se divertirem. Quer dicas de lugares e coisas legais pata fazer? </p>
                <p>Temos uma lista bem legal. Confira a seguir:</p>
            </Text>

            <Article title="1. Cinema" image={Image1}>
                Nada mais legal e romantico do que ir ao cinema com o seu amor. Aproveite para escolher um filme divertido e a faça rir muito. Chocolatinhos e uma MEGA pipoca são bem vindos.
            </Article>

            <Article title="2. Noite do Chef" image={Image2}>
                Nada mais legal e romantico do que ir ao cinema com o seu amor. Aproveite para escolher um filme divertido e a faça rir muito. Chocolatinhos e uma MEGA pipoca são bem vindos.
            </Article>
            
            <Article title="3. Mimos e Carinhos" image={Image3}>
                Nada mais legal e romantico do que ir ao cinema com o seu amor. Aproveite para escolher um filme divertido e a faça rir muito. Chocolatinhos e uma MEGA pipoca são bem vindos.
            </Article>
        </Container>
    )
}

export default Ideas 
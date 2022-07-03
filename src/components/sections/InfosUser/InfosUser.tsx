import { Container, Content } from './styles'

import Person from '../Avatar/Person/Person'
import Info from './Info'

import { dataUser } from '../../../helpers/dataUser'

const InfosUser : React.FC = () => {
    const data = dataUser

    return (
        <Container>
            <h2>Como você esta se sentindo hoje?</h2>
            <Content>
                <Person />
                <Info infos={dataUser[0].infos} />
            </Content>
        </Container>
    )
}

export default InfosUser
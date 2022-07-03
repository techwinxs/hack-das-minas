import { ListInfo, InfoItem, Button, ContainerInfo} from './styles'

const Info : React.FC<any> = ({height, weight, water, sleep}) => {

    const Item = ({label, value}: any) => {
        return(
            <InfoItem>
                <p>
                    <span>{label}</span>
                    <strong>{value}</strong>
                </p>
            </InfoItem>
        )
    }

    return (
        <ContainerInfo>
            <h4>30 de Julho</h4>

            <ListInfo>
                <Item label="Peso" value="65" />
                <Item label="Altura" value="1.73" />
                <Item label="Sono" value="8" />
                <Item label="Água" value="2" />
            </ListInfo>

            <Button>Editar Informações</Button>
        </ContainerInfo>
    )
}

export default Info
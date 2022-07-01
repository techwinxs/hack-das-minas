import { Container, ListCards, ListCardsItem, ListCardsButton } from "./styles"
import { ShirtOne } from "../Options"

const CustomAvatar: React.FC = () => {
    return (
        <Container>
            <ListCards>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne />
                    </ListCardsButton>
                </ListCardsItem>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne color="#FFCB6D" />
                    </ListCardsButton>
                </ListCardsItem>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne color="#FF9966" />
                    </ListCardsButton>
                </ListCardsItem>
                <ListCardsItem>
                    <ListCardsButton>
                        <ShirtOne color="#FF6699" />
                    </ListCardsButton>
                </ListCardsItem>
            </ListCards>
        </Container>
    )
}

export default CustomAvatar
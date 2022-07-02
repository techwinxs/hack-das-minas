import { Container, Label, Button } from './styles'

const FormMood : React.FC = () => {


    return (
        <Container>
            <Label>
                <strong>Humor</strong>
                <span>
                    <span>Viscosa</span>
                    <input type="checkbox" name="vaginaHealth" value="viscosa" />
                </span>

            </Label>

            <Label>
                <strong>Sintomas</strong>
                <span>
                    <span>Viscosa</span>
                    <input type="checkbox" name="vaginaHealth" value="viscosa" />
                </span>

            </Label>

            <Label>
                <strong>Secreção vaginal</strong>
                <span>
                    <span>Viscosa</span>
                    <input type="checkbox" name="vaginaHealth" value="viscosa" />
                </span>

            </Label>

            <Label>
                <strong>Anotações</strong>
                <textarea name="notes" id=""></textarea>
            </Label>
            
            <Button>Registrar Humor</Button>
        </Container>
    )
}

export default FormMood
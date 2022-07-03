import Container from "../components/ui/Container/Container"
import Text from "../components/Sections/Text/Text"
import AnalyseCalendar from "../components/Sections/AnalyseCalendar/AnalyseCalendar"
import AnalyseSimpthoms from '../components/Sections/AnalyseSimpthoms/AnalyseSimpthoms'
import Tips from "../components/Sections/Tips/Tips"

const ShareCalendar: React.FC = () => {

    return(
        <Container>
            <Text title="Relatório do calendário">
                <p>Ao compartilhar o seu calendário a pessoa irá receber um resumo dos seus registros do dia ou semana selecionada.</p>
                <p>Assim como dicas incríveis e artigos interessantes para que tenham conhecimento sobre delicado esses nossos momentos.</p>
            </Text>

            <AnalyseCalendar title="Análise do calendário" />

            <AnalyseSimpthoms title="Análise de humor e sintomas para essa semana" />
            <Tips /> 
        </Container>
    )
}

export default ShareCalendar 
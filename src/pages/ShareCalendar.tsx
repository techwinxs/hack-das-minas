import Container from "../components/ui/Container/Container"
import Text from "../components/sections/Text/Text"
import AnalyseCalendar from "../components/sections/AnalyseCalendar/AnalyseCalendar"
import AnalyseSimpthoms from '../components/sections/AnalyseSimpthoms/AnalyseSimpthoms'
import Tips from "../components/sections/Tips/Tips"

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
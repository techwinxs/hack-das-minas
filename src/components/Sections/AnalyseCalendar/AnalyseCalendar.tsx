import { Container  } from './styles'
import Calendar from '../../../assets/calendar.jpg'

interface IAnalyseCalendar{
    title: string
    image?: string
}

const AnalyseCalendar : React.FC<IAnalyseCalendar>= ({title, image}) => {

    return (
        <Container>
            <h2>{title}</h2>

            <img src={Calendar} alt="Calendario" />
        </Container>
    )
}

export default AnalyseCalendar
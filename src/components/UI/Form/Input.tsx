import Checkbox from './Checkbox'
import Radio from './Radio'
import TextArea from './TextArea'

interface IInput {
    type: string
    value: string
    name: string
    setDataForm?: React.Dispatch<React.SetStateAction<any[]>>
    dataForm?: any[]
    initialValue?: string
}   

const Input: React.FC<IInput> = ({type, value, name, setDataForm, dataForm, initialValue}) => {

    switch (type){
        case 'checkbox': 
            return <Checkbox value={value} name={name} setDataForm={setDataForm} dataForm={dataForm} />
        case 'radio': 
            return <Radio value={value} name={name} initialValue={initialValue} setDataForm={setDataForm} dataForm={dataForm}/>
        case 'textarea': 
            return <TextArea setDataForm={setDataForm} dataForm={dataForm} name={name}/>
        default :
            return null
    }
}

export default Input
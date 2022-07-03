interface ICheckbox{
    value: string
    name: string
    initialValue?: string,
    setDataForm?: React.Dispatch<React.SetStateAction<any[]>>
    dataForm?: any[]
}

const Radio: React.FC<ICheckbox> = ({value, name, dataForm, setDataForm}) => {

    const updateValueForm = (value: any) => {
        if(dataForm && setDataForm){
            const info = {
                name: name,
                value: value
            }

            if (dataForm.some((item) => item.name === name)){
                const newData = dataForm.filter((item) => item.name !== name)
                setDataForm(() => [...newData, info])
            } else {
                setDataForm(() => [...dataForm, info])
            }
        }
    }


    return (
        <input type="radio" value={value} name={name} onChange={({target}) => { updateValueForm(target.value)}}/>
    )
}

export default Radio
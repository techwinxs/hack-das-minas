import { useState, useEffect } from 'react'

interface ICheckbox{
    value: string
    name: string
    setDataForm?: React.Dispatch<React.SetStateAction<any[]>>
    dataForm?: any[]
}

const Checkbox: React.FC<ICheckbox> = ({value, name, setDataForm, dataForm}) => {
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = () => {
        setIsChecked(!isChecked);
    }

    useEffect(() => {

        if(dataForm !== undefined && setDataForm){
            if (isChecked === true) {
                const info = {
                    name: name,
                    value: value
                }
    
                setDataForm(() => [...dataForm, info])
            } else {
                const data = dataForm.filter((item) => item.value !== value)

                setDataForm(() => data)
            }
        }

    }, [isChecked])

    return (
        <input type="checkbox" value={value} name={name} checked={isChecked} onChange={() => handleChange()} />
    )
}

export default Checkbox
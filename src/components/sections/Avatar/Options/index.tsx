
import Shirt from './Shirt/Shirt'
import Skin from './Skin/Skin'
import Hair from './Hair/Hair'
import Face from './Face/Face'

import { IOptionsCharacteristic } from './typings'

const OptionsCharacteristic: React.FC<IOptionsCharacteristic> = ({ type, specifications })=> {

    switch (type) {
        case 'shirt': 
            return <Shirt {...specifications} />
        case 'skin': 
            return <Skin {...specifications} />
        case 'hair': 
            return <Hair {...specifications} />
        case 'face': 
            return <Face {...specifications} />
        default:
            return null        
    }
}

export default OptionsCharacteristic
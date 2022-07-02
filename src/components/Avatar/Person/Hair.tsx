import { IOptionsSpecifications } from '../Options/typings'
import OptionHair from '../Options/Hair/OptionHair';

const Hair: React.FC<IOptionsSpecifications> = ({ name })  => {
  console.log(`hair`)
  if(!name) {
    return null
  }

  console.log(`hair2`)

  return <OptionHair name={name} />
};

export default Hair;

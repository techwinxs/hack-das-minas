import { IOptionsSpecifications } from '../Options/typings'
import OptionHair from '../Options/Hair/OptionHair';

const Hair: React.FC<IOptionsSpecifications> = ({ name })  => {
  if(!name) {
    return null
  }

  return <OptionHair name={name} />
};

export default Hair;

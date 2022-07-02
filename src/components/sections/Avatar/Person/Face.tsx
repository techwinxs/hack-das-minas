import { IOptionsSpecifications } from '../Options/typings'
import OptionFace from '../Options/Face/OptionFace';

const Face: React.FC<IOptionsSpecifications> = ({ name })  => {

  if(!name) {
    return null
  }

  return <OptionFace name={name}/>
};

export default Face;


import OptionHair from "./OptionHair";
import { IOptionsSpecifications } from "../typings";

const Hair: React.FC<IOptionsSpecifications> = ({ name  }) => {
  
  return (
    <svg width="240" height="240" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0_0_1711" style={{maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="280" height="280">
        <rect width="280" height="280" rx="12" fill="white"/>
        <rect width="280" height="280" rx="12" stroke="white"/>
      </mask>
      <OptionHair name={name} />
    </svg>
  );
};

export default Hair;

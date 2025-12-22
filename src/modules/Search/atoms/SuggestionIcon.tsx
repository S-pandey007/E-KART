import Icons from "@/src/components/atoms/Icons";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  name: string;
};

const SuggestionIcon = ({ name }: Props) => {
  return (
    <Icons
      iconFamily="Ionicons"
      name={name}
      size={RFValue(18)}
      color="#6b7280"
    />
  );
};

export default SuggestionIcon;

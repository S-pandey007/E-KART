import { Text, View } from "react-native";
import {configureReanimatedLogger,ReanimatedLogLevel} from 'react-native-reanimated';
import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
export default function App() {

  configureReanimatedLogger({
    level:ReanimatedLogLevel.warn,
    strict:false
  });

(Text as any).defaultProps = {
  allowFontScaling: false
};

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

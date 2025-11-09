import { Text } from "react-native";
import { configureReanimatedLogger, ReanimatedLogLevel } from "react-native-reanimated";
import Navigation from "./src/navigation/Navigation";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false,
  });

  (Text as any).defaultProps = {
    allowFontScaling: false,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </GestureHandlerRootView>
  );
}

import { StatusBar } from "expo-status-bar";
import { LogBox } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./src/hooks/useCachedResources";
import Navigation from "./src/routes";

export default function App() {
  const isLoadingComplete = useCachedResources();
  LogBox.ignoreAllLogs();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <StatusBar backgroundColor="#fff" />
        <Navigation />
      </SafeAreaProvider>
    );
  }
}

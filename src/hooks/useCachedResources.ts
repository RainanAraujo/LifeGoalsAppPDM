import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import {
  Poppins_300Light as PoppinsLight,
  Poppins_400Regular as Poppins,
  Poppins_500Medium as PoppinsMedium,
  Poppins_600SemiBold as PoppinsSemiBold,
  Poppins_700Bold as PoppinsBold,
} from "@expo-google-fonts/poppins";

import {
  Nunito_400Regular as Nunito,
  Nunito_600SemiBold as NunitoSemiBold,
  Nunito_700Bold as NunitoBold,
} from "@expo-google-fonts/nunito";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          PoppinsLight,
          Poppins,
          PoppinsMedium,
          PoppinsSemiBold,
          PoppinsBold,
          Nunito,
          NunitoSemiBold,
          NunitoBold,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}

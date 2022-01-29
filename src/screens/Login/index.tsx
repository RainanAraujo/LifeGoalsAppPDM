import { useRef, useState } from "react";
import { ActivityIndicator, TextInput } from "react-native";
import DefaultTextInput from "../../components/DefaultTextInput";
import { Container, ScrollView } from "../../components/globalStyles";
import { signIn } from "../../services/auth";
import { Button, TextButton, WrapperContent, LoginText } from "./styles";

export default function Login({ navigation }) {
  const refInputPass = useRef<TextInput>(null);
  const [emailInput, setEmailInput] = useState("");
  const [passInput, setPassInput] = useState("");
  const [isLoading, setLoading] = useState(false);

  const trySignIn = (email: string, password: string) => {
    setLoading(true);
    signIn(email, password)
      .then(() => {
        setLoading(false);
        navigation.navigate("TabNavigation");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error.message);
      });
  };

  return (
    <ScrollView>
      <Container>
        <WrapperContent>
          <LoginText>LOGIN</LoginText>
          <DefaultTextInput
            onChangeText={(value) => setEmailInput(value)}
            value={emailInput}
            autoFocus={true}
            autoCapitalize="none"
            //por algum motivo quando eu coloco tipo email o cursor do textInput some
            keyboardType="email-address"
            label="Email *"
            returnKeyType="next"
            onSubmitEditing={() => refInputPass?.current?.focus()}
          />
          <DefaultTextInput
            onChangeText={(value) => setPassInput(value)}
            value={passInput}
            label="Senha *"
            secureTextEntry={true}
            refInput={refInputPass}
          />
          <Button onPress={() => trySignIn(emailInput, passInput)}>
            {!isLoading ? (
              <TextButton>Fazer Login</TextButton>
            ) : (
              <ActivityIndicator color="#fff" size={25} />
            )}
          </Button>
        </WrapperContent>
      </Container>
    </ScrollView>
  );
}

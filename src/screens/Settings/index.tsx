import ButtonIconTransparent from "../../components/ButtonIconTransparent";
import { Container } from "../../components/globalStyles";

export default function Settings({ navigation }) {
  return (
    <Container>
      <ButtonIconTransparent
        text="Sair"
        onPress={() => navigation.navigate("Login")}
        FeatherIconName="log-out"
      />
    </Container>
  );
}

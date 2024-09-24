import { Modal } from "react-native";

import { Banner, Container, Overlay } from "./styles";
import { NotificationText } from "@/styles/global";

type Props = {
  visible?: boolean;
};

export function Notification({ visible }: Props) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Overlay>
        <Container>
          <Banner />
          <NotificationText>Mensagem Excluída</NotificationText>
        </Container>
      </Overlay>
    </Modal>
  );
}

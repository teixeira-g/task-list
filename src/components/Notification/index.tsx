import { Modal } from "react-native";

import { Banner, NotificationContainer, Overlay } from "./styles";
import { NotificationText } from "@/styles/global";

type Props = {
  visible?: boolean;
};

export function Notification({ visible }: Props) {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <Overlay>
        <NotificationContainer>
          <Banner />
          <NotificationText>Mensagem Excluída</NotificationText>
        </NotificationContainer>
      </Overlay>
    </Modal>
  );
}

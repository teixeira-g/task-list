import { Modal, StatusBar } from "react-native";

import { Banner, NotificationContainer, Overlay } from "./styles";
import { NotificationText } from "@/styles/global";

type Props = {
  visible?: boolean;
};

export const Notification = ({ visible }: Props) => {
  return (
    <Modal transparent animationType="fade" visible={visible}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="rgba(0, 0, 0, 0.6)"
      />
      <Overlay>
        <NotificationContainer>
          <Banner />
          <NotificationText>Mensagem Excluída</NotificationText>
        </NotificationContainer>
      </Overlay>
    </Modal>
  );
};

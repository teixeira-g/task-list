import { Modal, StatusBar, TouchableOpacity } from "react-native";

import { Banner, NotificationContainer, Overlay } from "./styles";
import { NotificationText } from "@/styles/global";

type Props = {
  visible?: boolean;
  onPress: () => void;
};

export const Notification = ({ visible, onPress }: Props) => {
  return (
    <Modal transparent animationType="none" visible={visible}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="rgba(0, 0, 0, 0.6)"
      />
      <Overlay onPress={onPress}>
        <NotificationContainer>
          <Banner />
          <NotificationText>Mensagem Excluída</NotificationText>
        </NotificationContainer>
      </Overlay>
    </Modal>
  );
};

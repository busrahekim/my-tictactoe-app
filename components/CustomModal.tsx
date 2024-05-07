import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  Platform,
  Text,
} from "react-native";
import React from "react";
import { getHistory } from "@/utils/getHistory";

interface CustomModalProps {
  modalVisible: boolean;
  setModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  history: Square[];
}

const CustomModal = ({
  modalVisible,
  setModalVisible,
  history,
}: CustomModalProps) => {
  const historyArray = getHistory({history});

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(false);
      }}
    >
      <Pressable
        style={[
          Platform.OS === "ios" ? styles.iOSBackdrop : styles.androidBackdrop,
          styles.backdrop,
        ]}
        onPress={() => setModalVisible(false)}
      />
      <View className="bg-white rounded-xl my-auto mx-auto p-6 flex justify-center">
        {historyArray.map((step: any, index: number) => (
          <View key={index}>
            <Text className="text-xl tracking-wider mt-2">
              {step.value === "X" ? "You" : "Opponent"} put {step.value} at
              index {step.indexedAt}
            </Text>
          </View>
        ))}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },

  iOSBackdrop: {
    backgroundColor: "#000000",
    opacity: 0.6,
  },
  androidBackdrop: {
    backgroundColor: "#232f34",
    opacity: 0.7,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default CustomModal;

import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

import { colors } from "@/styles/colors";
import { SmallInput } from "@/components/Inputs";
import { DeleteButton, ConfirmButton } from "@/components/Buttons";
import { Notification } from "@/components/Notification";
import { NotificationText } from "@/styles/global";
import { useTasks } from "@/context/TaskContext";

type LocalSearchParams = {
  taskId: string;
};

const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required("*O campo não pode estar vazio")
    .max(80, "*Limite de 80 caracteres"),
});

export default function EditTask() {
  const { tasks, editTask, deleteTask } = useTasks();
  const { taskId } = useLocalSearchParams<LocalSearchParams>(); // Receber o id da tarefa pelo router

  const task = tasks.find((t) => t.id === taskId);

  const [notificationVisible, setNotificationVisible] = useState(false);

  const handleDeletePress = () => {
    deleteTask(taskId);
    setNotificationVisible(true);
  };

  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          isFocused ? { paddingTop: 80 } : { paddingTop: 200 },
        ]}
      >
        <Formik
          initialValues={{ title: task?.title || "" }}
          validationSchema={TaskSchema}
          onSubmit={(values) => {
            if (taskId) {
              editTask(taskId, values.title);
              router.back();
            }
          }}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            errors,
            touched,
            values,
          }) => (
            <>
              <SmallInput
                placeholder={"Edite sua tarefa"}
                value={values.title}
                onChangeText={handleChange("title")}
                onBlur={() => {
                  handleBlur("title");
                  setIsFocused(false);
                }}
                onFocus={() => setIsFocused(true)}
              />
              {errors.title && touched.title ? (
                <NotificationText
                  style={{ fontSize: 14, color: colors.red, marginTop: 20 }}
                >
                  {errors.title}
                </NotificationText>
              ) : null}

              <ConfirmButton onPress={handleSubmit} />
              <DeleteButton onPress={handleDeletePress} />
              <Notification
                visible={notificationVisible}
                onPress={() => router.back()}
              />
            </>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.gray[300],
  },
});

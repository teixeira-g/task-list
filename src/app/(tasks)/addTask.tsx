import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import * as Yup from "yup";

import { colors } from "@/styles/colors";
import { SmallInput } from "@/components/Inputs";
import { ConfirmButton } from "@/components/Buttons";
import { NotificationText } from "@/styles/global";
import { useTasks } from "@/context/TaskContext";

const TaskSchema = Yup.object().shape({
  title: Yup.string()
    .required("*O campo não pode estar vazio")
    .max(80, "*Limite de 80 caracteres"),
});

export default function AddTask() {
  const router = useRouter();
  const { addTask } = useTasks();

  const [isFocused, setIsFocused] = useState(false);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={[
          styles.container,
          isFocused ? { paddingTop: 120 } : { paddingTop: 160 },
        ]}
      >
        <Formik
          initialValues={{ title: "" }}
          validationSchema={TaskSchema}
          onSubmit={(values) => {
            addTask(values.title);
            router.back();
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
                value={values.title}
                placeholder="Digite sua nova tarefa"
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

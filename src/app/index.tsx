import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRouter } from "expo-router";

import { colors } from "@/styles/colors";
import { H2DarkText, NotificationText } from "@/styles/global";
import { SmallInput } from "@/components/Inputs";
import { AuthButton } from "@/components/Buttons";

import * as Yup from "yup";
import { Formik } from "formik";

type LoginFormValues = {
  username: string;
};

export default function Login() {
  const router = useRouter();

  const handleLogin = (values: LoginFormValues) => {
    const { username } = values;
    router.replace({
      pathname: "/home",
      params: { username },
    });
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("*Necessário fornecer um nome")
      .max(26, "*Limite de 26 caracteres"),
  });

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <H2DarkText style={{ fontSize: 30, color: colors.gray[600] }}>
          Digite seu nome
        </H2DarkText>

        <Formik
          initialValues={{ username: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
          }) => (
            <>
              <SmallInput
                value={values.username}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                placeholder={"Nome de usuário"}
              />
              {errors.username && touched.username && (
                <NotificationText
                  style={{ fontSize: 14, color: colors.red, marginTop: 20 }}
                >
                  {errors.username}
                </NotificationText>
              )}
              <View style={{ marginTop: 20 }}>
                <AuthButton title="Entrar" onPress={handleSubmit} />
              </View>
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
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray[300],
  },
});

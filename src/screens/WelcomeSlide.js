import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Button, Text, View } from "react-native";

const WelcomeSlide = () => {

  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate("Registro");
  };
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View>
      <Text>Slides</Text>
      <Button title="Registrarse" onPress={goToRegister}/>
      <Button title="Iniciar sesión" onPress={goToLogin}/>
    </View>
  );
};

export default WelcomeSlide;

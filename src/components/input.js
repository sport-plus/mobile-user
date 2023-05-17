import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../constants";
import { Flex } from "native-base";

const Input = ({
  lable,
  icon,
  error,
  password,
  borderColor,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = useState(password);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={{ height: 90, marginBottom: 20 }}>
      <Text style={style.label}>{lable}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: borderColor
              ? borderColor
              : error
              ? COLORS.red
              : isFocused
              ? COLORS.primary
              : COLORS.light,
            alignItems: "center",
          },
        ]}
      >
        {icon}
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
          style={{ color: COLORS.black, flex: 1, marginLeft: 5 }}
          {...props}
        />
        {password && (
          <>
            {hidePassword ? (
              <Ionicons
                name="eye"
                size={22}
                color={COLORS.lightPrimary}
                onPress={() => setHidePassword(!hidePassword)}
              />
            ) : (
              <Ionicons
                name="eye-off"
                size={22}
                color={COLORS.lightPrimary}
                onPress={() => setHidePassword(!hidePassword)}
              />
            )}
          </>
        )}
      </View>

      {error && (
        <Flex flexDirection="row" alignItems="center" style={{ height: 30 }}>
          <MaterialIcons name="error-outline" size={18} color="red" />
          <Text
            style={{
              color: "red",
              fontSize: 12,
              marginLeft: 4,
            }}
          >
            {error}
          </Text>
        </Flex>
      )}
    </View>
  );
};

export default Input;

const style = StyleSheet.create({
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
});

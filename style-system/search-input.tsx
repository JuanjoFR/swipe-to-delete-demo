import { BoxProps, useTheme } from "@shopify/restyle";
import * as React from "react";
import type { UseControllerReturn } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, TextInput } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import type { Theme } from "../libraries/theme";
import Box from "./box";

const styles = StyleSheet.create({
  icon: { position: "absolute" },
  input: { flex: 1 }
});

function SearchInput(props: BoxProps<Theme>): JSX.Element {
  const theme = useTheme<Theme>();
  const { control } = useForm<{
    search: string;
  }>({
    defaultValues: { search: "" }
  });

  return (
    <Box
      flexDirection="row"
      backgroundColor="inputBackground"
      // paddingHorizontal="l"
      // paddingVertical="m"
      borderRadius={20}
      alignItems="center"
      {...props}
    >
      <Icon
        name="search-outline"
        size={25}
        color={theme.colors.inputColor}
        style={[styles.icon, { marginLeft: theme.spacing.l }]}
      />
      <Controller
        control={control}
        name="search"
        render={({
          field: { onChange, onBlur, value }
        }: UseControllerReturn): JSX.Element => (
          <TextInput
            placeholder="Search..."
            placeholderTextColor={theme.colors.inputColor}
            value={value}
            style={[
              styles.input,
              {
                ...theme.textVariants.input,
                color: theme.colors.text,
                paddingLeft: theme.spacing.l + theme.spacing.m + 25,
                paddingRight: theme.spacing.l,
                paddingVertical: theme.spacing.m
              }
            ]}
            onBlur={onBlur}
            onChangeText={onChange}
          />
        )}
      />
    </Box>
  );
}

export default SearchInput;

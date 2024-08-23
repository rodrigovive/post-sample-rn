import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { PostItem } from "../types/post";

type ContentProps = {
  image: PostItem["image"];
};

const Content = ({ image }: ContentProps) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "70%",
    minHeight: 400,
  },
  image: { flex: 1 },
});

export default Content;

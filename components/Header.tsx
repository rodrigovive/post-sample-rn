import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  Image,
  NativeSyntheticEvent,
  ImageErrorEventData,
  StyleSheet,
} from "react-native";
import { PostItem } from "../types/post";
import Ionicons from "@expo/vector-icons/Ionicons";

type HeaderProps = {
  avatar: PostItem["avatar"];
  location: PostItem["location"];
  name: PostItem["name"];
};

const Header = ({ avatar, location, name }: HeaderProps) => {
  const [isAvatarError, setIsAvatarError] = useState(false);

  const handleAvatarError = useCallback(
    (error: NativeSyntheticEvent<ImageErrorEventData>) => {
      if (error?.nativeEvent?.error) {
        setIsAvatarError(true);
      }
    },
    []
  );

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        {isAvatarError ? (
          <Ionicons name="person-circle" size={36} color="white" />
        ) : (
          <Image
            style={styles.image}
            source={{
              uri: avatar,
            }}
            onError={handleAvatarError}
            resizeMode="cover"
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textLocation}>{location}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "7%",
    minHeight: 60,
    flexDirection: "row",
  },
  avatarContainer: {
    height: "100%",
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { flex: 1, width: 30, height: 30 },
  textName: { color: "white", fontWeight: 900 },
  textLocation: { color: "white" },
  textContainer: { flex: 1, justifyContent: "center" },
});

export default Header;

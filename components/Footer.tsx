import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { PostItem } from "../types/post";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

type FooterProps = {
  likes: PostItem["likes"];
  saved: PostItem["saved"];
  liked: PostItem["liked"];
  comments: PostItem["comments"];
  name: PostItem["name"];
  description: PostItem["description"];
};

const Footer = ({
  likes,
  liked,
  saved,
  comments,
  name,
  description,
}: FooterProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <View style={styles.actionLeftContainer}>
          {liked ? (
            <AntDesign name="heart" size={24} color="white" />
          ) : (
            <AntDesign name="hearto" size={24} color="white" />
          )}
          <MaterialCommunityIcons
            name="message-off-outline"
            size={24}
            color="white"
          />
          <MaterialCommunityIcons
            name="share-off-outline"
            size={24}
            color="white"
          />
        </View>
        <View style={styles.actionRightContainer}>
          {saved ? (
            <FontAwesome name="bookmark" size={24} color="white" />
          ) : (
            <FontAwesome name="bookmark-o" size={24} color="white" />
          )}
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.textLikes}>{likes} Me gusta</Text>
        <Text style={styles.textName}>
          {name} <Text style={styles.textDescription}>{description}</Text>
          <Text style={styles.textMas}> ... mas</Text>
        </Text>
        <Text style={styles.textComments}>{comments} respuestas - Votar</Text>
      </View>
      <View style={styles.commentsContainer}>
        <Ionicons name="person-circle-outline" size={24} color="white" />
        <Text style={styles.textAddComentary}>Agrega un comentario ...</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "20%",
    minHeight: 40,
    flexDirection: "column",
    paddingHorizontal: 20,
  },
  actionContainer: {
    flex: 0.3,
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    paddingVertical: 5,
  },
  actionLeftContainer: {
    flex: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  actionRightContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  detailsContainer: {
    flex: 0.4,
    width: "100%",
  },
  textLikes: { color: "white", fontSize: 12, marginBottom: 5 },
  textName: {
    color: "white",
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 5,
  },
  textDescription: { color: "white", fontWeight: 500 },
  textMas: { color: "white", fontWeight: 300 },
  textComments: {
    color: "white",
    fontSize: 12,
    fontWeight: 300,
    marginBottom: 5,
  },
  commentsContainer: { flex: 0.2, flexDirection: "row", alignItems: "center" },
  textAddComentary: { color: "white", fontWeight: 300, marginLeft: 5 },
});

export default Footer;

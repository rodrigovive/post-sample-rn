import React from "react";
import {  View, Dimensions, StyleSheet } from "react-native";
import { PostItem } from "../types/post";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import useSafeViewArea from "../hooks/use-safe-view-area";

const { width } = Dimensions.get("window");
type PostProps = {
  post: PostItem;
};

const Post = ({ post }: PostProps) => {
  const { height } = useSafeViewArea();
  return (
    <View style={[styles.itemContainer, { height }]}>
      <Header avatar={post.avatar} location={post.location} name={post.name} />
      <Content image={post.image} />
      <Footer
        liked={post.liked}
        likes={post.likes}
        saved={post.saved}
        comments={post.comments}
        name={post.name}
        description={post.description}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: width,
  }
});

export default Post;

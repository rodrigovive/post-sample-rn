import React, { useCallback } from "react";
import { FlatList } from "react-native";
import { PostItem } from "../types/post";
import Post from "./Post";
import useSafeViewArea from "../hooks/use-safe-view-area";

const Reels = ({ posts }: { posts: PostItem[] }) => {
  const { height } = useSafeViewArea();

  const renderItem = useCallback(
    ({ item }: { item: PostItem }) => <Post post={item} />,
    []
  );
  return (
    <FlatList
      testID="reels-list"
      data={posts}
      renderItem={renderItem}
      keyExtractor={(item: PostItem) => item.id}
      horizontal={false}
      pagingEnabled={true}
      showsVerticalScrollIndicator={false}
      getItemLayout={(_, index: number) => ({
        length: height,
        offset: height * index,
        index,
      })}
      maxToRenderPerBatch={2}
      windowSize={2}
      initialNumToRender={1}
      onScroll={event => console.log('eve',event.nativeEvent)}
    />
  );
};

export default Reels;

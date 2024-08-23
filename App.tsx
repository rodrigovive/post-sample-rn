import React from "react";
import { ActivityIndicator, StyleSheet, Text } from "react-native";
import { useGetPosts } from "./hooks/use-posts";
import Reels from "./components/Reels";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
  const { posts, isLoading, isError } = useGetPosts();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {isLoading ? <ActivityIndicator /> : <Reels posts={posts} />}
        {isError ? <MaterialIcons name="wifi-tethering-error" size={48} color="white" /> : null}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
});

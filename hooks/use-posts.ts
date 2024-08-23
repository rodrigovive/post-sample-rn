import { useState, useEffect } from "react";
import axios from "axios";
import { PostItem } from "../types/post";
import { Alert } from "react-native";

export const useGetPosts = (preLoading = true) => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [isLoading, setIsLoading] = useState(preLoading);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const resultPosts = await axios.get(
          "https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts"
        );
        setPosts(resultPosts.data as PostItem[]);
      } catch (err: unknown) {
        let errorMessage = "An unexpected error occurred";
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        Alert.alert("Error", errorMessage);
        setIsError(true)
      }
      setIsLoading(false);
    };

    getPosts();
  }, []);

  return { posts, isLoading, isError };
};

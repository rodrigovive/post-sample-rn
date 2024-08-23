import { renderHook, act } from "@testing-library/react-native";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { useGetPosts } from "../use-posts";

const mock = new MockAdapter(axios);

const endpointMock = "https://662029f13bf790e070af2cd8.mockapi.io/api/v1/posts";

describe("useGetPosts hook", () => {
  beforeEach(() => {
    mock.reset();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("Should fetch and get data", async () => {
    const mockPosts = [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ];

    mock.onGet(endpointMock).reply(200, mockPosts);

    const { result } = renderHook(() => useGetPosts());

    expect(result.current.isLoading).toBe(true);
    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.posts).toEqual(mockPosts);
    expect(result.current.isLoading).toBe(false);
  });

  it("Should set false and set true when an error ocurrs", async () => {
    mock.onGet(endpointMock).reply(500);

    const { result } = renderHook(() => useGetPosts());

    expect(result.current.isLoading).toBe(true);

    await act(async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));
    });

    expect(result.current.posts).toEqual([]);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(true);
  });
});

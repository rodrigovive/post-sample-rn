import React from "react";
import { render, act } from "@testing-library/react-native";
import Reels from "../Reels";
import useSafeViewArea from "../../hooks/use-safe-view-area";
import { PostItem } from "../../types/post";

jest.mock("../../hooks/use-safe-view-area", () => jest.fn());

const mockPosts = [
  {
    createdAt: "2024-04-17T14:06:19.118Z",
    name: "Iris Quitzon",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/388.jpg",
    description: "asymmetric",
    likes: 71953,
    image: "https://loremflickr.com/640/480",
    comments: 21092,
    liked: true,
    saved: true,
    location: "Salinas",
    id: "1",
  },
  {
    createdAt: "2024-04-17T19:10:25.020Z",
    name: "Alberta Little",
    avatar:
      "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/885.jpg",
    description: "discrete",
    likes: 64327,
    image: "https://loremflickr.com/640/480",
    comments: 52193,
    liked: true,
    saved: false,
    location: "Ponce",
    id: "2",
  },
] as PostItem[];

describe("Reels Component", () => {
  beforeEach(() => {
    (useSafeViewArea as jest.Mock).mockReturnValue({ height: 775 });
  });

  it("Should renders the FlatList with the correct number of posts", () => {
    const { getByTestId } = render(<Reels posts={mockPosts} />);

    const flatList = getByTestId("reels-list");

    expect(flatList.props.data).toHaveLength(2);
    expect(flatList.props.renderItem).toBeDefined();
    expect(
      flatList.props.getItemLayout({ length: 600, offset: 600 * 1, index: 1 })
    );
  });

  it("Show renders the post correctly", () => {
    const { getByText } = render(<Reels posts={mockPosts} />);
    expect(getByText(mockPosts[0].name)).toBeTruthy();
  });
});

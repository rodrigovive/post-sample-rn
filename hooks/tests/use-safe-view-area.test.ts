jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: jest
    .fn()
    .mockReturnValue({ top: 0, bottom: 0, left: 0, right: 0 }),
}));

jest.mock("react-native", () => ({
  Dimensions: {
    get: jest.fn().mockReturnValue({ width: 400, height: 800 }),
  },
}));

import { renderHook } from "@testing-library/react-native";
import useSafeViewArea from "../use-safe-view-area";

describe("useSafeViewArea", () => {
  it("Should calculates height and width correctly with insets", () => {
    const { result } = renderHook(() => useSafeViewArea());

    expect(result.current.height).toBe(800);
    expect(result.current.width).toBe(400);
  });
});

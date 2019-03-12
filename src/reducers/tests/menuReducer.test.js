import menuReducer from "../menuReducer";

describe("menuReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      menus: [],
      errors: [],
      order: {},
      orderError: []
    };
    expect(menuReducer(undefined, {})).toEqual(initialState);
  });
    it("should handle GET_USER_MENU", () => {
      expect(menuReducer([], {
        type: "GET_USER_MENU",
        payload: [{ id: 1, title: "some-title" }],
      })).toEqual(
        {
          menus: [{ id: 1, title: "some-title" }],
        },
      );
    });
    it("should handle GET_USER_MENU_ERROR", () => {
      expect(menuReducer([], {
        type: "GET_USER_MENU_ERROR",
        payload: [{ errors: "some errors" }],
      })).toEqual(
        {
          errors: [{ errors: "some errors" }],
        },
      );
    });
    it("should handle POST_USER_ORDER", () => {
      expect(menuReducer([], {
        type: "POST_USER_ORDER",
        payload: { id: 1, quantity: 5 },
      })).toEqual(
        {
          order: { id: 1, quantity: 5 },
        },
      );
    });
    it("should handle POST_USER_ORDER_ERROR", () => {
      expect(menuReducer([], {
        type: "POST_USER_ORDER_ERROR",
        payload: [{ error: "some bad error" }],
      })).toEqual(
        {
          orderError: [{ error: "some bad error" }],
        },
      );
    });
});

import authReducer from "../authReducer";

describe("authReducer", () => {
  it("should return the initial state", () => {
    const initialState = {
      registerUser: {},
      registerErrors: [],
      user: {},
      errors: []
    };
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it("should handle REGISTER_USER", () => {
    expect(
      authReducer([], {
        type: "REGISTER_USER",
        payload: [{ id: 1, email: "me@domain.com" }]
      })
    ).toEqual({
      registerUser: [{ id: 1, email: "me@domain.com" }]
    });
  });
  it("should handle REGISTER_USER_ERROR", () => {
    expect(
      authReducer([], {
        type: "REGISTER_USER_ERROR",
        payload: [{ errors: "some errors" }]
      })
    ).toEqual({
      registerErrors: [{ errors: "some errors" }]
    });
  });
  it("should handle LOGIN_USER", () => {
    expect(
      authReducer([], {
        type: "LOGIN_USER",
        payload: { id: 1, email: "me@domain.com" }
      })
    ).toEqual({
      user: { id: 1, email: "me@domain.com" }
    });
  });
  it("should handle LOGIN_USER_ERROR", () => {
    expect(
      authReducer([], {
        type: "LOGIN_USER_ERROR",
        payload: [{ error: "some bad error" }]
      })
    ).toEqual({
      errors: [{ error: "some bad error" }]
    });
  });
});

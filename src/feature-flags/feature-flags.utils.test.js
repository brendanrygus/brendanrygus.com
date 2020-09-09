import { getFlagFromQueryParams } from "./feature-flags.utils";

describe("Feature Flag Utils", () => {
  beforeEach(() => {
    delete global.window.location;
    global.window = Object.create(window);
  });

  it("Should parse a truthy value from the query string", () => {
    global.window.location = { search: "darkMode=true" };
    const paramName = "darkMode";
    const defaultValue = false;

    const flag = getFlagFromQueryParams(paramName, defaultValue);
    expect(flag).toBeTruthy();
  });

  it("Should parse a falsy value from the query string", () => {
    global.window.location = { search: "darkMode=false" };
    const paramName = "darkMode";
    const defaultValue = true;

    const flag = getFlagFromQueryParams(paramName, defaultValue);
    expect(flag).toBeFalsy();
  });

  it("Should return the default value when a param is not set", () => {
    global.window.location = { search: "unlocked=true" };
    const paramName = "darkMode";
    const defaultValue = false;

    const flag = getFlagFromQueryParams(paramName, defaultValue);
    expect(flag).toBeFalsy();
  });
});

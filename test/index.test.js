const {
  capitalizeWords,
  filterActiveUsers,
  logAction,
} = require("../index");

describe("capitalizeWords", () => {
  test("capitalizes each word", () => {
    expect(capitalizeWords("hello world")).toBe("Hello World");
  });

  test("handles single word", () => {
    expect(capitalizeWords("hello")).toBe("Hello");
  });

  test("handles empty string", () => {
    expect(capitalizeWords("")).toBe("");
  });

  test("handles multiple spaces", () => {
    expect(capitalizeWords("hello   world")).toBe("Hello   World");
  });
});

describe("filterActiveUsers", () => {
  test("returns only active users", () => {
    const users = [
      { name: "Alice", isActive: true },
      { name: "Bob", isActive: false },
    ];

    expect(filterActiveUsers(users)).toEqual([
      { name: "Alice", isActive: true },
    ]);
  });

  test("returns empty array if none are active", () => {
    const users = [{ name: "Bob", isActive: false }];
    expect(filterActiveUsers(users)).toEqual([]);
  });

  test("handles empty array", () => {
    expect(filterActiveUsers([])).toEqual([]);
  });

  test("handles invalid input", () => {
    expect(filterActiveUsers(null)).toEqual([]);
  });
});

describe("logAction", () => {
  test("returns correct message format", () => {
    const result = logAction("login", "Alice");
    expect(result).toContain("User Alice performed login at");
  });

  test("includes timestamp", () => {
    const result = logAction("logout", "Bob");
    const regex = /\d{4}-\d{2}-\d{2}T/;
    expect(regex.test(result)).toBe(true);
  });
});
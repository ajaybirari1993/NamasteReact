import { sum } from "../sum";

describe("sum function", () => {
  test("should do the sum of 2 numbers", () => {
    const result = sum(10, 20);

    expect(result).toBe(30);
  });

  test("should do the sum of negative values", () => {
    const result = sum(-10, -20);

    expect(result).toBe(-30);
  });
});

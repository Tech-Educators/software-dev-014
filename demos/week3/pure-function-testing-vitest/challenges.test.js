//If I have exported an element, I can import it in the file I also want to use it in
//You can import individual elements and also import whole files
import { test, expect } from "vitest";
import { add, subtract } from "./challenges"; //destructuring --> I am importing ONE element from a whole file

//I am going to write a test for my add function

test("add", function () {
  const result = add(3, 7);
  const expected = 10;

  expect(result).toBe(expected);
});

//I am going to write a test for my subtract function
test("subtract", function () {
  const result = subtract(5, 1);
  const expected = 4;

  expect(result).toBe(expected);
});

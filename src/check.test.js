const check = require("./check");

test("correct guess equals 4 black and 0 white", () => {
  expect(
    check(
      ["red", "green", "blue", "yellow"],
      ["red", "green", "blue", "yellow"]
    )
  ).toStrictEqual({ black: 4, white: 0 });
});

test("one correctly palced and one color that matches one color equals 1 black and 1 white", () => {
  expect(
    check(
      ["red", "purple", "green", "purple"],
      ["red", "green", "blue", "yellow"]
    )
  ).toStrictEqual({ black: 1, white: 1 });
});

test("one correctly palced and two colors that matches one color equals 1 black and 1 white", () => {
  expect(
    check(
      ["red", "purple", "green", "green"],
      ["red", "green", "blue", "yellow"]
    )
  ).toStrictEqual({ black: 1, white: 1 });
});

test("two correctly palced and one color that matches one color equals 2 black and 1 white", () => {
  expect(
    check(
      ["yellow", "green", "yellow", "blue"],
      ["yellow", "blue", "yellow", "yellow"]
    )
  ).toStrictEqual({ black: 2, white: 1 });
});

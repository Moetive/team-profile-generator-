const Engineer = require("../lib/Engineer");

test("creates an Engineer object", () => {
  const engineer = new Engineer("Johnny", 1, "johnny@gmail.com", "johnny425");

  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer github value", () => {
  const engineer = new Engineer("Johnny", 1, "johnny@gmail.com", "johnny425");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github.toString())
  );
});

test("gets role of employee", () => {
  const engineer = new Engineer("Johnny", 1, "johnny@gmail.com", "johnny425");

  expect(engineer.getRole()).toEqual("Engineer");
});

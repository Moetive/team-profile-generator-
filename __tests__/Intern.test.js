const Intern = require("../lib/Intern");

test("creates an Intern object", () => {
  const intern = new Intern("Johnny", 1, "johnny@gmail.com", "MIT");

  expect(intern.school).toEqual(expect.any(String));
});

test("gets employee school", () => {
  const intern = new Intern("Johnny", 1, "johnny@gmail.com", "MIT");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});

test("gets role of employee", () => {
  const intern = new Intern("Johnny", 1, "johnny@gmail.com", "MIT");

  expect(intern.getRole()).toEqual("Intern");
});

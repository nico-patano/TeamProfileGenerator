const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("Should create an object when initialized", () => {
    const test = new Engineer();
    expect(typeof test).toBe("object");
  });

  it("Should get engineer github value", () => {
    const engineer = new Engineer(
      "Bob",
      123456,
      "BobEng@mail.com",
      "BobEng"
    );

    expect(engineer.getGithub()).toEqual(
      expect.stringContaining(engineer.github.toString())
    );
  });
  it("gets role of employee", () => {
    const engineer = new Engineer(
      "Bob",
      123456,
      "BobEng@mail.com",
      "BobEng"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
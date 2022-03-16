import { myFunction } from "./main"

describe("Default test", () => {
  it("should work", () => {
    expect(myFunction()).toEqual(undefined)
  })
})

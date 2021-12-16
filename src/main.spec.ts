import { MyFunction } from "./main"

describe("Default test", () => {
  it("should work", () => {
    expect(MyFunction()).toEqual(undefined)
  })
})

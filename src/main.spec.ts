import { MyFunction } from "./main"

describe("Default test", () => {
  it("should work", () => {
    expect(MyFunction("1,2")).toEqual(undefined)
  })
})

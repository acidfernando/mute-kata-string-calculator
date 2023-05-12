import { describe, it, expect } from "vitest"
import { add } from "./main.js"

describe("Default test", () => {
  it("should return 0 if no input is given", () => {
    expect(add("")).toEqual(0)
  })

  it("should work in case you have only one number", () => {
    expect(add("4")).toEqual(4)
  })
})

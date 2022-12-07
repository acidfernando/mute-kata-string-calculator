import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

describe("Default test", () => {
  it("should work", () => {
    expect(myFunction()).toEqual(undefined)
  })
})

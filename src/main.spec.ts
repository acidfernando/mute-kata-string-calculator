import { describe, it, expect } from "vitest"
import { add } from "./main.js"

describe("Default test", () => {
  it("shouldn't do anything if numbers not passed", () => {
    expect(add("")).toEqual(undefined)
  })
})

import test from "tape"
import ahoyClient from "../src"

test("ahoyClient", (t) => {
  t.plan(1)
  t.equal(true, ahoyClient(), "return true")
})

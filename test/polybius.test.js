// Write your tests here!
const { expect } = require("chai")
const { polybius } = require("../src/polybius")

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const expected = "4432423352125413"
        const actual = polybius("thinkful")
        expect(actual).to.equal(expected)
    })
    it("should translate 42 for both i/j", () => {
        const expected = "th(i/j)nkful"
        const actual = polybius("4432423352125413", false)
        expect(actual).to.equal(expected)
    })
    it("should leave spaces as they were", () => {
        const expected = '3251131343 2543241341'
        const actual = polybius("Hello world")
        expect(actual).to.equal(expected)
    })
    it("should return false if the length of numbers is odd", () => {
        const expected = false
        const actual = polybius("44324233521254134", false)
        expect(actual).to.equal(expected)
    })
    it("should decode a message by translating each pair of numbers into a letter", () => {
        const expected = "hello world"
        const actual = polybius("3251131343 2543241341", false)
        expect(actual).to.equal(expected)
    })
})

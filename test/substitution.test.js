// Write your tests here!
const { expect } = require("chai")
const { substitution } = require("../src/substitution")

describe("substitution", () => {
    it("returns false if given alphabet is not 26 characters", () => {
        const actual = substitution("message", "qwertyuiopasdfghjklzxcvbnmlk")
        expect(actual).to.be.false
    })
    it("returns false if given alphabet contains any duplicate characters", () => {
        const actual = substitution("greetings", "mnbbcxzlkjhgfdsapoiuyrewqt")
        expect(actual).to.be.false

    })
    it("properly translates phrase with given alphabet", () => {
        const expected = "lcggs"
        const actual = substitution("hello", "mnbvcxzlkjhgfdsapoiuytrewq")
        expect(actual).to.eql(expected)

    })
    it("maintains spaces before and after en/decoding", () => {
        const expected = "howdy yall"
        const actual = substitution("lsrvw wmgg", "mnbvcxzlkjhgfdsapoiuytrewq", encode = false)
        expect(actual).to.equal(expected)
    })
    it("ignores capital letters", () => {
        const expected = "got milk"
        const actual = substitution("Zsu Fkgh", "mnbvcxzlkjhgfdsapoiuytrewq", encode = false)
        expect(actual).to.equal(expected)
    })
})
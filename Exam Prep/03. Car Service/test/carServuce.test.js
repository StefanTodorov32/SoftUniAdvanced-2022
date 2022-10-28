const { assert, expect } = require("chai");
const { carService } = require("../carService");
describe("Tests carService", () => {
  describe("Tests isItExpensive", () => {
    it("Should give proper results with proper parameter", () => {
      assert.equal(
        carService.isItExpensive("Engine"),
        "The issue with the car is more severe and it will cost more money"
      );
      assert.equal(
        carService.isItExpensive("Transmission"),
        "The issue with the car is more severe and it will cost more money"
      );
    });
    it("Should give different result with other parameter", () => {
      assert.equal(
        carService.isItExpensive("Breaks"),
        "The overall price will be a bit cheaper"
      );
      assert.equal(
        carService.isItExpensive("Stops"),
        "The overall price will be a bit cheaper"
      );
    });
  });
  describe("Tests discount", () => {
    it("Should throw an error if the parameters are not numbers", () => {
      expect(() => carService.discount([3], undefined)).to.throw(
        "Invalid input"
      );
      expect(() => carService.discount(3, {})).to.throw("Invalid input");
    });
    it("Should not applay any discounts when the numberOfParts are below or equal 2", () => {
      assert.equal(carService.discount(2, 2), "You cannot apply a discount");
      assert.equal(carService.discount(1, 100), "You cannot apply a discount");
    });
    it("Should apply a discount when the numberOfParts are more than 2 or 7", () => {
      assert.equal(
        carService.discount(3, 5),
        "Discount applied! You saved 0.75$"
      );
      assert.equal(
        carService.discount(77, 5),
        "Discount applied! You saved 1.5$"
      );
    });
  });
  describe("Tests partsToBuy", () => {
    it("Should throw an error if the parameters are not arrays", () => {
      expect(() => carService.partsToBuy([3], undefined)).to.throw(
        "Invalid input"
      );
      expect(() => carService.partsToBuy(3, [3])).to.throw("Invalid input");
      expect(() => carService.partsToBuy(NaN, [3])).to.throw("Invalid input");
    });
    it("Should give a proper result", () => {
      assert.equal(
        carService.partsToBuy([{ part: "car", price: 145 }], ["car"]),
        145
      );
      assert.equal(
        carService.partsToBuy(
          [
            {
              part: "car",
              price: 145,
            },
            {
              part: "ball",
              price: 2,
            },
          ],
          ["car"]
        ),
        145
      );
      assert.equal(
        carService.partsToBuy(
          [
            {
              part: "car",
              price: 145,
            },
            {
              part: "ball",
              price: 2,
            },
          ],
          ["car","ball"]
        ),
        147
      );
    });
  });
});

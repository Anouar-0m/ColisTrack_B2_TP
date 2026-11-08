import test from "node:test";
import assert from "node:assert/strict";
import { calculateShippingFee } from "../src/fees.js";

test("FR : tarif de base pour 1 kg", () => {
  assert.equal(calculateShippingFee(1, "FR"), 4);
});

test("EU : supplément pour 3 kg", () => {
  assert.equal(calculateShippingFee(3, "EU"), 10);
});

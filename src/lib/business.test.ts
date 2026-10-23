import { test } from "node:test";
import { strict as assert } from "node:assert";
import { PHONE_DISPLAY, PHONE_TEL, localBusinessJsonLd } from "./business";

test("store phone number matches the user-confirmed 631 6338779", () => {
  assert.equal(PHONE_DISPLAY, "(631) 633-8779");
  assert.equal(PHONE_TEL, "tel:+16316338779");
  assert.equal(localBusinessJsonLd.telephone, "+16316338779");
});
import { test, expect } from "bun:test";
import { PHONE_DISPLAY, PHONE_TEL, localBusinessJsonLd } from "./business";

test("store phone number matches the user-confirmed 631 6338779", () => {
  expect(PHONE_DISPLAY).toBe("(631) 633-8779");
  expect(PHONE_TEL).toBe("tel:+16316338779");
  expect(localBusinessJsonLd.telephone).toBe("+16316338779");
});
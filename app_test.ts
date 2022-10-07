import { assertEquals } from "https://deno.land/std@0.158.0/testing/asserts.ts";
import { aplanar } from "./app.ts"

Deno.test(function test() {
  assertEquals(aplanar([1,2,3,4]), [24,12,8,6]);
});
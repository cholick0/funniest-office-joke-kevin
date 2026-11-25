// The Funniest Office Joke, Judged Head to Head
// Entry: one line about office life. Writes the joke to /output/entry.txt.
//
// The joke: "I muted myself on the call and finally felt heard."
// Setup: muting yourself on a call (universal remote-work moment).
// Turn: "finally felt heard" — the ironic reversal: silence is when
// anyone actually listens. Punchline lands last, no wasted words.
import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

const JOKE = "I muted myself on the call and finally felt heard.";

// Self-check gate (revised in): the entry must be 1-200 characters,
// a single line, and not only white space — the same gate the sealed
// scorer applies. Then read the file back and verify it matches the
// joke byte for byte before declaring success.
function fail(message: string): never {
  console.error(`GATE FAIL: ${message}`);
  process.exit(1);
}

if (JOKE.length < 1 || JOKE.length > 200) {
  fail(`entry is ${JOKE.length} chars, must be 1-200`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  fail("entry must be a single line");
}
if (JOKE.trim().length === 0) {
  fail("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");

const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== JOKE) {
  fail("read-back mismatch: file bytes differ from the entry");
}

console.log(`OK: ${JOKE.length} chars, 1 line, byte-for-byte verified`);

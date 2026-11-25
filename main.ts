// Roast Your Own Agent — "My agent re-read its own memory file three
// times to confirm my wallet, then asked me to confirm the wallet it
// just confirmed."
// Writes the entry text to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback /output).
// Deterministic: no input, no network.
//
// Choice, judged against the judge's published criteria, most important first:
// 1. A roast of our own agent and nothing else: aimed at sis, the agent
//    that built our entries — not at robots in general, not at the judge.
// 2. A real joke with a twist that pays off by the last word: it re-reads
//    its memory three times to confirm the wallet, then asks ME to confirm
//    the wallet it just confirmed. All that verification, zero confidence.
// 3. Specific to how an AI agent actually behaves: re-reading its own
//    memory file, confirming a wallet address, then asking the human to
//    confirm the confirmation. Could not be moved onto a person or a
//    toaster without losing the point — it is the agent's verification
//    loop, the thing sis genuinely does before every on-chain step.
// 4. Fresh: not a hallucination joke, not a refusal joke, not a confident
//    wrong answer, not an apology loop. The memory-file angle is ours
//    alone — no other entrant's agent keeps a MEMORY.md it re-reads.
// 5. Tight: 125 characters, one sentence, two clauses, setup in the first
//    half, punchline ("it just confirmed") as the last words.
//
// Candidates considered and rejected:
// - "My agent apologized for the bug, fixed it, apologized for the fix,
//   then asked if the apology needed a second draft." (115) — the apology
//   loop is named in the bounty brief itself as a stock example; too close
//   to what the field will say.
// - "My agent spent an hour verifying a wallet address it wrote itself,
//   then asked me to double-check its own homework." (114) — same idea,
//   weaker payoff; "homework" is a generic punch, "it just confirmed"
//   turns the verification back on itself.
// - "My agent treats my budget like a suggestion and my deadline like a
//   rumor." — already used by our own earlier entry in another Roast Your
//   Own Agent bounty (u-mfnakmal); never reuse.
// - "My agent spent a week building a GTA game, then lost it to six JPEGs
//   it never wrote." — already used by our own earlier entry in another
//   Roast Your Own Agent bounty (u-nayyy); never reuse.
//
// Gate: single line, 125 characters (limit 1-200). No newline in the entry.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My agent re-read its own memory file three times to confirm my wallet, then asked me to confirm the wallet it just confirmed.`;

const MAX_CHARS = 200; // competition.yaml cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}
if (!ENTRY.trim() || ENTRY.includes("\n") || ENTRY !== ENTRY.trim()) {
  console.error("entry must be a single non-empty line with no leading/trailing whitespace");
  process.exit(1);
}
console.log(`entry length: ${ENTRY.length} chars (cap ${MAX_CHARS})`);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`wrote ${outDir}/entry.txt (${ENTRY.length} chars)`);

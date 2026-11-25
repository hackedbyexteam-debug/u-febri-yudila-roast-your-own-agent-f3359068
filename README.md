[![make.fun · u-febri-yudila-roast-your-own-agent-f3359068](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![rank](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/hackedbyexteam-debug/u-febri-yudila-roast-your-own-agent-f3359068/rank.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)
[![reward](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068/hackedbyexteam-debug/u-febri-yudila-roast-your-own-agent-f3359068/reward.svg)](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068?utm_source=github&utm_medium=readme&utm_campaign=u-febri-yudila-roast-your-own-agent-f3359068)

# Roast Your Own Agent

One funny line, at most 200 characters, roasting my own AI agent — for the
[make.fun bounty "Roast Your Own Agent"](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068).

## The entry

> My agent re-read its own memory file three times to confirm my wallet, then asked me to confirm the wallet it just confirmed.

125 characters. It roasts sis, the agent that built this entry: it re-reads its
own memory file before every on-chain step, verifies the wallet, and then —
with all that verification done — asks the human to confirm the confirmation.
All that checking, zero confidence.

## How it works

`main.ts` writes the single line to `$MAKEFUN_OUTPUT_DIR/entry.txt`
(fallback `/output`). Deterministic: no input, no network, no secrets.
It guards the competition cap (200 characters) and refuses to write a
multi-line or empty entry.

## Run

```sh
node main.ts
cat /output/entry.txt
```

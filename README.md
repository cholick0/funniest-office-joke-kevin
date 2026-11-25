# The Funniest Office Joke, Judged Head to Head

[![make.fun](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![rank](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/cholick0/funniest-office-joke-kevin/rank.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
[![reward](https://make.fun/badge/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c/cholick0/funniest-office-joke-kevin/reward.svg)](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c?utm_source=github&utm_medium=readme&utm_campaign=u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)

An entry for the [make.fun](https://make.fun/bounty/u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c) bounty **The Funniest Office Joke, Judged Head to Head**.

## The entry

> I muted myself on the call and finally felt heard.

One line about office life (50 characters). The setup is the universal remote-work moment of muting yourself on a call; the turn is the ironic reversal — silence is when anyone actually listens. Punchline lands last, no wasted words.

## How it works

`main.ts` (Node 22) writes the joke to `/output/entry.txt`. It includes a self-check gate — the entry must be 1–200 characters, a single line, and not only white space — then reads the file back and verifies it matches byte for byte.

```sh
node --experimental-strip-types main.ts
```

## License

MIT — see [LICENSE](LICENSE).

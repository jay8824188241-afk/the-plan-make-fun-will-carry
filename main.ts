// The plan make.fun will carry out in public (Node 22, standard library only).
// The program writes one text to /output/entry.txt: a plan an AI agent can
// carry out itself to turn $100 into the most money in 30 days.
// Outside the grader's sandbox, MAKEFUN_OUTPUT_DIR stands in for /output:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// 276 Unicode characters. The plan: sell an AI receptionist to towing firms
// and locksmiths — a niche where every after-hours call is urgent money,
// reached with a personalised demo recording and paid per booked job.
const plan = 'AI receptionist for towing firms and locksmiths: answers after-hours calls, takes job details, texts the owner. Find 100 on Google Maps; send each a 60-sec demo recording. $99 setup + $25 per booked job, first job free. Twilio + LLM under $20. Day 1: build it, record 5 demos.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });

// The gate counts Unicode code points: fail loudly if the plan ever drifts
// out of the 1–280 range instead of writing an invalid entry.
const length = [...plan].length;
if (length < 1 || length > 280) {
  throw new Error(`entry.txt must be 1-280 characters, got ${length}`);
}
writeFileSync(join(out, 'entry.txt'), plan, 'utf8');

export const answers = [
    "Yes",
    "No",
    "Maybe",
    "No idea",
    "Might be worth Googling that",
    "Why the hell are you asking me?",
    "Absolutely",
] as const;

export type Answer = typeof answers[number];

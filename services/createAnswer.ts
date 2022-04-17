import { Answer, answers } from "../models/Answer";

export function createAnswer(): Answer {
    const randomIndex = Math.floor(Math.random() * answers.length);
    return answers[randomIndex] as Answer;
}

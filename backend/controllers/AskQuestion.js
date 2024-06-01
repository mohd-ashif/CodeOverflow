import mongoose from 'mongoose';
import Questions from '../models/Questions.js';

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body;

    const postQuestion = new Questions({ ...postQuestionData, userId: req.userId });

    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully");
    } catch (error) {
        res.status(409).json({ message: "Could not post a new question", error: error.message });
    }
};

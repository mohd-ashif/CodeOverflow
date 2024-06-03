import mongoose from 'mongoose';
import Questions from '../models/Questions.js';

export const AskQuestion = async (req, res) => {
    const postQuestionData = req.body; 

    const postQuestion = new Questions(postQuestionData );

    try {
        await postQuestion.save();
        res.status(200).json("Posted a question successfully");
    } catch (error) {
        res.status(409).json({ message: "Could not post a new question", error: error.message });
    }
};


export const getAllQuestions = async (req, res) => {
    try {
        const questionList = await Questions.find();
        res.status(200).json(questionList);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};


export const deleteQuestion = async( req, res) => {

    const {id: _id } =  req.params ;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send("question unavailable...");
      }

    try {

        await Questions.findByIdAndDelete(_id)
        res.status(200).json({message : "succesfully Deleted" })

        
    } catch (error) {

        res.status(404).json({message: "error message "})
        
    }
}
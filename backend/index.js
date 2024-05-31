import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js'; 

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get('/', (req, res) => {
    res.send('This is Code over-Flow...');
});

app.use('/user', userRoutes);


const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://ashif:athnana@code-overflow.jehjyh2.mongodb.net/?retryWrites=true&w=majority&appName=code-overflow";

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.log(err.message));


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})
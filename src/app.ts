import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Ping route
app.get('/ping', (req: Request, res: Response) => {
    res.json(true);
});

// Submit route
app.post('/submit', (req: Request, res: Response) => {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    const submission = { name, email, phone, github_link, stopwatch_time };

    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading database.');
        }

        let db;
        try {
            db = JSON.parse(data);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error parsing database JSON.');
        }

        db.submissions.push(submission);

        fs.writeFile(path.join(__dirname, 'db.json'), JSON.stringify(db), (err) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error saving submission.');
            }

            res.status(200).send('Submission successful!');
        });
    });
});

// Read route
app.get('/read', (req: Request, res: Response) => {
    const index = parseInt(req.query.index as string, 10);

    fs.readFile(path.join(__dirname, 'db.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading database.');
        }

        let db;
        try {
            db = JSON.parse(data);
        } catch (error) {
            console.error(error);
            return res.status(500).send('Error parsing database JSON.');
        }

        if (index >= 0 && index < db.submissions.length) {
            res.json(db.submissions[index]);
        } else {
            res.status(404).send('Submission not found.');
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

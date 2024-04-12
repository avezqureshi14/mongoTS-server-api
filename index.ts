import express, { Request, Response } from 'express';
import connectToDatabase from './db/connection';

const app = express();
const port = 8800;
connectToDatabase();
app.get('/', (req: Request, res: Response) => {
  res.json({message:'Hello TypeScript Express Server!'});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

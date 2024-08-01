import express from 'express';
import bodyParser from 'body-parser';
import { appRouter } from './appRouter.js';

const app = express();
const port = process.env.PORT || 8082;
app.use(bodyParser.json());
appRouter(app);

app.listen(port, () => {
  console.log(`server running http://localhost:${port}`);
  console.log('press CTRL+C to stop server');
});

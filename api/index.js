import app from "../server/index.js"
import cors from 'cors'

app.use(cors({
  origin: 'https://naveen-portfolio-7hxysqvzq-naveens-projects-dc93ceec.vercel.app',
  credentials: true
}));

export default app;
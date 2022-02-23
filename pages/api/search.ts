import { searchProjects } from "../../components/redis";

export default async function handler(req: any, res: any) {
  const q = req.query.q;
  const projects = await searchProjects(q);
  res.status(200).json({ projects });
}

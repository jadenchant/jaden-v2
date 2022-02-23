import { createProject } from "../../components/redis";

export default async function handler(req: any, res: any) {
  const id = await createProject(req.body);
  res.status(200).json({ id });
}

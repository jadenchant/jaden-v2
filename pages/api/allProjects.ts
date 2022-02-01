import { getAllProjects } from '../../components/redis';

export default async function handler(req: any, res: any) {
  const projects = await getAllProjects();
  res.status(200).json({ projects });
}
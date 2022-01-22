// import type { NextApiRequest, NextApiResponse } from 'next'
import { createIndex } from '../../components/redis';

export default async function handler(req: any, res: any) {
  await createIndex();
  res.status(200).send('ok');
}
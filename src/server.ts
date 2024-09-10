import express from 'express';
import { NextFunction, Request, Response } from 'express';
import { SenlerApiClient } from './client';


const client = new SenlerApiClient({
  accessToken: process.env.SENLER_TESTS_ACCESS_TOKEN!,
  vkGroupId: process.env.SENLER_TESTS_VK_GTOUP_ID!
})

export const app = express();


function baseHandler(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((error) => {
      res.status(500).json({ error: error.message });
    });
  };
}


app.get('/subscribers/get', baseHandler(async (_req, res) => {res.json(await client.subscribers.get())}));

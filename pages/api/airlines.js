import { PrismaClient } from "@prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const airlines = await prisma.airline.findMany()
  return res.status(200).json(airlines)
}
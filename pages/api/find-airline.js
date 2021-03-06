import { PrismaClient } from "@prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const airline = await prisma.airline.findUnique({where: {
    iata: req.query.iata
  }})
  return res.status(200).json(airline)
}
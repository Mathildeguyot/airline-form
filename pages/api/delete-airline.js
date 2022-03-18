import { PrismaClient } from "@prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const prisma = new PrismaClient()
  await prisma.airline.delete({where: {
    iata: req.query.iata
  }})
  res.redirect("/airlines-form")
}
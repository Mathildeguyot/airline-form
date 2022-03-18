import { PrismaClient } from "@prisma/client";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const prisma = new PrismaClient()
  const airline = await prisma.airline.update({ data: {
    name: req.body.name,
    iata: req.body.iata,
    european: req.body.european === 'on'
  }, where: {
    iata: req.body.currentIata
  }})
  res.redirect("/airlines-form")
}
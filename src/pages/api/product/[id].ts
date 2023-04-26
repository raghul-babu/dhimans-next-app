import { prisma } from "@/utils/dbConnection";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, method } = req;
  const id = query.id as string;

  if (method === "GET") {
    // type ProductWithCategory = Prisma.ProductGetPayload<{
    //   include: { categories: true };
    // }>;
    const r = await prisma.product.findUnique({
      where: { id },
      include: { categories: true },
    });

    if (r?.categoryIDs) {
      const cats = await prisma.category.findMany({
        where: { id: { in: r.categoryIDs } },
      });
      // const catList = cats.map((c) => c.name);
      r.categories = cats;
    }

    res.status(200).json(r);
  } else if (method === "DELETE") {
    const r = await prisma.product.findUnique({ where: { id } });

    res.status(200).json("nothing deleted");
  } else res.status(403).json("method not allowed!");
}

import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@lib/prisma";

export default async function getRelatedThoughts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { thoughtId } = req.query;

  try {
    const relatedThoughts = await prisma.thought.findMany({
      where: {
        id: {
          not: String(thoughtId),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.status(200).json({ success: true, content: relatedThoughts });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

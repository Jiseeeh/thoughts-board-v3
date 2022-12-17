import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@lib/prisma";

export default async function updateThought(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { thoughtId } = req.query;

  try {
    const updatedThought = await prisma.thought.update({
      where: {
        id: String(thoughtId),
      },
      data: {
        views: {
          increment: 1,
        },
      },
    });

    res.status(200).json({ success: true, updatedThought });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

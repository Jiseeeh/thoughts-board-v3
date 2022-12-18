import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@lib/prisma";

export default async function getThought(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { thoughtId } = req.query;

  try {
    const thought = await prisma.thought.findFirstOrThrow({
      where: {
        id: String(thoughtId),
      },
    });

    res.status(200).json({ success: true, content: thought });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

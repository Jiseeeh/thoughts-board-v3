import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@lib/prisma";

export default async function getThought(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { thoughtId } = req.body;

  try {
    const thought = await prisma.thought.findFirstOrThrow({
      where: {
        id: thoughtId,
      },
    });

    res.status(200).json({ success: true, thought });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../lib/prisma";

export default async function submitThought(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const thought = await prisma.thought.create({
      data: {
        tag: "Tech",
        content: "I will create a new js framework",
      },
    });

    res.json(thought);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong!", error });
  }
}

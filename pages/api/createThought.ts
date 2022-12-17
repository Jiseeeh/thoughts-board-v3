import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@lib/prisma";

export default async function submitThought(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { ownerName, tag, content } = req.body;

  try {
    const createdThought = await prisma.thought.create({
      data: {
        ownerName: ownerName || "Anonymous",
        tag,
        content,
      },
    });

    res.json({
      success: true,
      createdThought,
    });
  } catch (error) {
    res.json({
      success: false,
      error,
    });
  }
}

import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../lib/prisma";

export default async function getAllThoughts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const thoughts = await prisma.thought.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(thoughts);
  } catch (error) {
    res.status(500).json("Something went wrong!");
  }
}

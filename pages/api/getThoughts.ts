import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "@lib/prisma";

export default async function getAllThoughts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const thoughts = await prisma.thought.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  if (thoughts.length === 0) {
    res.json({ success: false, message: "No thoughts available." });
    return;
  }

  res.json({ success: true, thoughts });
}

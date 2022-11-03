import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const currency = async (req: NextApiRequest, res: NextApiResponse) => {
  const currencies = await prisma.currency.findMany();
  res.status(200).json(currencies);
};

export default currency;

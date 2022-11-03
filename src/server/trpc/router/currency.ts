import { z } from "zod";
import { router, protectedProcedure, publicProcedure } from "../trpc";

export const currencyRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.currency.findMany({
        select: {
          name: true,
          shortName: true,
        },
        orderBy: {
          name: "desc",
        },
      });
    } catch (error) {
      console.log("error", error);
    }
  }),
  postCurrency: protectedProcedure
    .input(
      z.object({
        name: z.string(),
        shortName: z.string(),
      })
    )
    .mutation(async ({ ctx, input }) => {
      try {
        await ctx.prisma.currency.create({
          data: {
            name: input.name,
            shortName: input.shortName,
          },
        });
      } catch (error) {
        console.log(error);
      }
    }),
});

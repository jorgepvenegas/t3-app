import { router } from "../trpc";
import { currencyRouter } from "./currency";
import { guestbookRouter } from "./guestbook";

export const appRouter = router({
  guestbook: guestbookRouter,
  currency: currencyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

import { Router } from "express";
import movieRouter from "./movie.router.js";
import actorRouter from "./actor.router.js";
import userRouter from "./user.router.js";
import authRouter from "./auth.router.js";

const mainRouter = Router();

mainRouter.use("/movie", movieRouter);
mainRouter.use("/actor",actorRouter);
mainRouter.use("/user", userRouter);
mainRouter.use("/auth", authRouter);


export default mainRouter;

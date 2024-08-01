import { blankUrlController, filteredImageController } from "./controller.js";

export const appRouter = (app) => {
    app.get("/", blankUrlController);
    app.get('/filteredimage', filteredImageController);
}


import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

export const runtime = "edge"; //disable for plate (bank account) routes

const app = new Hono().basePath("/api");

app.get("/", (c) => {
  return c.json({
    hello: "world",
  });
});

export const GET = handle(app);
export const POST = handle(app);

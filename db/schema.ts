import { pgTable, text } from "drizzle-orm/pg-core";

export const accounts = pgTable("accounts", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    userId: text("user_id").notNull(),
});

// export const users = pgTable("users", {
//     id: text("id").primaryKey(),
//     email: text("email").notNull(),
//     password: text("password").notNull(),
// });
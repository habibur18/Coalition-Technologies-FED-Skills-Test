"use server";

import { cookies } from "next/headers";
export async function authenticate(data) {
  const { username, password } = data;
  const cookieStore = await cookies();

  //  set session expiration after 7 days
  const expiresAt = new Date().getTime() + 1000 * 60 * 60 * 24 * 7;

  if (username === "coalition" && password === "skills-test") {
    const session = {
      username,
      expiresAt,
    };

    // set the cookie for 7 days
    cookieStore.set("session", JSON.stringify(session), {
      maxAge: 60 * 60 * 24 * 7,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      path: "/",
    });
    return { success: true };
  } else {
    return {
      success: false,
      error: "Invalid username or password from server",
    };
  }
}

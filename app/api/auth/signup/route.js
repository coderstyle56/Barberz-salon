// import { prisma } from "@/lib/prisma";
// import bcrypt from "bcrypt";

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     const exists = await prisma.user.findUnique({
//       where: { email }
//     });

//     if (exists) {
//       return new Response(
//         JSON.stringify({ error: "Email already registered" }),
//         { status: 409 }
//       );
//     }

//     const hashed = await bcrypt.hash(password, 10);

//     const user = await prisma.user.create({
//       data: { name, email, password: hashed }
//     });

//     return new Response(JSON.stringify({ user }), { status: 201 });
//   } catch (e) {
//     return new Response(JSON.stringify({ error: e.message }), { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if email already exists
    const exists = await prisma.user.findUnique({
      where: { email },
    });

    if (exists) {
      return NextResponse.json(
        { message: "Email already registered" },
        { status: 400 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email,
        password: hashed,
        isGuest: false,
      },
    });

    return NextResponse.json(
      { success: true, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("SIGNUP ERROR:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}

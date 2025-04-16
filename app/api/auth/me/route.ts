import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({message: "Unauthorized" }, { status: 401});

    const decode = jwt.verify(token, process.env.JWT_SECRET!) as { userId: number };
    const user = await prisma.user.findUnique({  where: { id: decode.userId}, select: { id: true, email:
    true, nama: true}})

    if(!user) return NextResponse.json({message: "unauthorized" }, { status:401});

    return NextResponse.json(user, { status:200});
  } catch (error) {
    return NextResponse.json({ message: "invalidid token"}, {status:401});
  }
}
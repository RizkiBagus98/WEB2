import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma"

export async function POST(req: NextRequest) {
    try {
        const { email, password } = await req.json();
        const user = await prisma.user.findUnique({ where: { email } });

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json({ message: "Email atau Password salah" }, { status: 401 });
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, { expiresIn: "1d" });

        // Buat response terlebih dahulu
        const response = NextResponse.json({ message: "Login berhasil" });

        // Set cookie ke dalam response
        response.cookies.set({
            name: "token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            maxAge: 86400, // 1 hari
            path: "/",
        });

        return response;
    } catch (error) {
        console.error("Login Error: ", error);
        return NextResponse.json({ message: "Terjadi Kesalahan pada server" }, { status: 500 });
    }
}

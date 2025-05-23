import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, nama } = body;

    // Validasi input sederhana
    if (!email || !password || !nama ) {
      return NextResponse.json({ message: "Semua field wajib diisi" }, { status: 400 });
    }

    // Cek apakah email atau nim sudah digunakan
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email },
        ]
      }
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email atau NIM sudah terdaftar" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat user baru
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        nama,
      },
      select: {
        id: true,
        email: true,
        nama: true,
      }
    });

    return NextResponse.json({ message: "Registrasi berhasil", user: newUser }, { status: 201 });

  } catch (error) {
    console.error("Error registrasi:", error);
    return NextResponse.json({ message: "Terjadi kesalahan saat registrasi" }, { status: 500 });
  }
}
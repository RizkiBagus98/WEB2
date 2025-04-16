import { NextRequest, NextResponse } from "next/server";

export async function POST (req: NextRequest) {
    try { 
        const responce = NextResponse.json ({ Message: "Logout berhasil"}, { status: 200});
        responce.cookies.set("token", "", { expires: new Date(0), path: "/", httpOnly: true});
        return responce;

    }   catch (error) {
        console.error("logout error:", error);
        return NextResponse.json({ message: "Terjadi kesalahan"}, { status:500 });
   }

}
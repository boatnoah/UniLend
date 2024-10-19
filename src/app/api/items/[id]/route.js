import { NextResponse } from "next/server";
import { testConnection } from "@/config/database";
import { pool } from "@/config/database";

export async function GET() {
  try {
    return NextResponse.json({ hello: "world" });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Database connection failed" },
      { status: 500 },
    );
  }
}

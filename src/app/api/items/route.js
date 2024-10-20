import { NextResponse } from "next/server";
import { pool } from "@/config/database";

export async function GET() {
  try {
    const result = await pool.query("SELECT * FROM items");
    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Database connection failed" },
      { status: 500 },
    );
  }
}

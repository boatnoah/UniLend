import { NextResponse } from "next/server";
import { pool } from "@/config/database";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    console.log(req.json());
    const { email, password } = req.json();

    // Compare email and password
    console.log(pool.query("SELECT * FROM email WHERE email=$1", [email]));

    // create token and post to tokens

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: error }, { status: 500 });
  }
}

// Get the data from frontend
// Hash it
// Query database
// If match, return success status
// Else, invalid cradentials

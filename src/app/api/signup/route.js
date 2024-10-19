import { NextResponse } from "next/server";
import { pool } from "@/config/database";
import swot from "swot-node";
import { hash } from "bcrypt";

export async function POST(req) {
  try {
    const { first_name, last_name, email, password } = req.json();

    // verify email
    if (!first_name || !last_name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    if (!swot.isAcademic(email)) {
      return NextResponse.json(
        { error: "Please enter a valid school email" },
        { status: 400 },
      );
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await hash(password, saltRounds);

    const results = await pool.query(
      `
	  INSERT INTO users (first_name, last_name, email)
	  VALUES($1, $2, $3)
	  RETURNING *`,
      [first_name, last_name, email, hashedPassword],
    );

    NextResponse.json(results.rows[0], { status: 201 });
  } catch (error) {
    NextResponse.json({ error: "Some shi went wrong bruh" }, { status: 500 });
  }
}

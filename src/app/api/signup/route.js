import { NextResponse } from "next/server";
import { pool } from "@/config/database";
const swot = require("swot-node");
import { hash } from "bcrypt";

export async function POST(req) {
  const { email, firstName, lastName, password } = await req.json();

  // verify email
  if (!firstName || !lastName || !email || !password) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  console.log("string?", email);
  const validEmail = await swot.isAcademic(email);
  console.log("IS email valid?", validEmail);
  if (!validEmail) {
    return NextResponse.json(
      { error: "Please enter a valkd school email" },
      { status: 500 },
    );
  }

  // Hash the password
  const saltRounds = 10;
  const hashedPassword = await hash(password, saltRounds);
  console.log("hashedPass", hashedPassword);

  const results = await pool.query(
    `
	  INSERT INTO users (first_name, last_name, email, password)
	  VALUES($1, $2, $3, $4)
	  RETURNING *`,
    [firstName, lastName, email, hashedPassword],
  );

  return NextResponse.json(results.rows[0], { status: 201 });
}

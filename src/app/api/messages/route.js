import { NextResponse } from "next/server";
import { pool } from "@/config/database";
const swot = require("swot-node");
import { hash } from "bcrypt";
const crypto = require("crypto");

export async function POST(req) {
  const { id, sender, text, time_sent } = await req.json();
  console.log("API", req);

  // verify email
  if (!id || !sender || !text || !time_sent) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 },
    );
  }

  const results = await pool.query(
    `

      INSERT INTO messages (message, time_sent, sender_id)
      VALUES($1, $2, $3)
      RETURNING *
    `,
    [text, time_sent, sender],
  );

  return NextResponse.json(results.rows, { status: 201 });
}

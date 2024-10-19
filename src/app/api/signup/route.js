import { NextResponse } from "next/server";
import { pool } from "@/config/database";

export async function POST(req, res) {
  try {
    const { first_name, last_name, email } = req.body;
    const results = await pool.query(
      `
	  INSERT INTO users (first_name, last_name, email)
	  VALUES($1, $2, $3)
	  RETURNING *`,
      [first_name, last_name, email],
    );

    res.status(201).json(results.rows[0]);
  } catch (error) {
    res.status(409).json({ error: error.message });
  }
}

// beore query, check if email has .edu at the end
// if not "please enter your .edu school email"

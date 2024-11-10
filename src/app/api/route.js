import { NextResponse } from "next/server";
import { connectMongo } from "../../utils/db";

export function GET(request, { params }) {
  connectMongo();
  console.log(params);
  return NextResponse.json({
    message: "Obtendiendo carta",
  });
}

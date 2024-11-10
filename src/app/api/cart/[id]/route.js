import { NextResponse } from "next/server";

export function GET(request, { params }) {
  console.log(params);
  return NextResponse.json({
    meassage: `Se ha mostrado en consola el parametro ${params.id}`,
  });
}

import { NextRequest, NextResponse } from "next/server";
import schema from "./schema";

export function GET(request: NextRequest) {
    // fetch users from a database

    return NextResponse.json([
        {id : 1, name: "John Doe"},
        {id : 2, name: "Michel"}
    ])
}

export async function POST(request: NextRequest) {
    // create a new user in the database
    const body = await request.json();
    const validation = schema.safeParse(body);
    // validate
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    // if invalid return 400
    // else return 201 with the created user
    if (!body.name) {
        return NextResponse.json({error: "Name is required"}, { status: 400 });
    }
    return NextResponse.json({id: 1, name: body.name}, { status: 201 });
}
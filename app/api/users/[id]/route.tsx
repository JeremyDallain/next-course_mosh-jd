import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";

export function GET(
    request: NextRequest, 
    { params }: { params: { id: number }} ) {
    // fetch user from a database
    // if not found, return 404
    // else return the user


    if (params.id > 10) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ id: params.id, name: "Tom"});
}

export async function PUT(
    request: NextRequest, 
    { params }: { params: { id: number }} ) {
    // validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }
    if (!body.name) {
        // if invalid return 400
        return NextResponse.json({ error: "Name is required" }, { status: 400 });
    }
    // fetch the user with the givven id
    if (params.id > 10) {
        // if not found return 404
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // else update the user and return 200 with the updated user
    return NextResponse.json({ id: params.id, name: body.name });
}

export function DELETE(
    request: NextRequest, 
    { params }: { params: { id: number }} ) {
    // fetch the user with the given id
    if (params.id > 10) {
        // if not found return 404
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    // else delete the user and return 204
    return NextResponse.json({});
}
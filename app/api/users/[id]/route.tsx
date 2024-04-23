import { NextRequest, NextResponse } from "next/server";
import schema from "../schema";
import prisma from "@/prisma/client";

export async function GET(
    request: NextRequest, 
    { params }: { params: { id: string }} ) {
    
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json(user);
}

export async function PUT(
    request: NextRequest, 
    { params }: { params: { id: string }} ) {
    // validate the request body
    const body = await request.json();
    const validation = schema.safeParse(body);
    if (!validation.success) {
        return NextResponse.json(validation.error.errors, { status: 400 });
    }

    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    // fetch the user with the givven id
    if (!user) {
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const updatedUser = await prisma.user.update({
        where: { id: user.id },
        data: { name: body.name, email: body.email }
    });
    // else update the user and return 200 with the updated user
    return NextResponse.json(updatedUser);
}

export async function DELETE(
    request: NextRequest, 
    { params }: { params: { id: string }} ) {
    // fetch the user with the given id
    const user = await prisma.user.findUnique({
        where: { id: parseInt(params.id) }
    })
    if (!user) {
        // if not found return 404
        return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    await prisma.user.delete({ where: { id: user.id } })
    // else delete the user and return 204
    return NextResponse.json({});
}
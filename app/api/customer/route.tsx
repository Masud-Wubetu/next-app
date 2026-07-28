import { NextRequest, NextResponse } from "next/server";
import { Prisma } from "@prisma/client";

interface Props {
    id: number,
    name: string
}

export function GET(request: NextRequest) {
    return NextResponse.json([
        {id: 1, name:'Masud Wubetu'},
        { id: 2, name: 'Aymen Muhammed' }
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = 

}
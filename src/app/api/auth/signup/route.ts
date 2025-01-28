import { NextRequest, NextResponse } from 'next/server';
import { users } from '@/data/users';

export async function POST(request: NextRequest) {
    const { name, email, password, role } = await request.json();

    if (users.some(user => user.email === email)) {
        return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }

    const newUser = {
        id: (users.length + 1).toString(),
        name,
        email,
        password,
        role,
        events: []
    };

    users.push(newUser);

    return NextResponse.json({ message: 'User created successfully' }, { status: 201 });
}
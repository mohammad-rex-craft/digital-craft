// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const token = request.cookies.get('token')?.value;
    if(!token && pathname.startsWith('/dashboard')){
        return NextResponse.redirect(
            new URL('/auth/login',request.url)
        )
    }else if(token && pathname.startsWith('/auth/login')) {
        return NextResponse.redirect(
            new URL('/dashboard', request.url)
        )
    }

    return NextResponse.next()
}

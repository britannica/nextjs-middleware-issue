import { type NextRequest } from 'next/server';
import { MiddlewareRequest, type MiddlewareResponse } from '@netlify/next';
import { NextResponse } from 'next/server';

type NextRequestCustom = Omit<NextRequest, 'geo'> & { geo: any };

export async function middleware(nextRequest: NextRequestCustom): Promise<MiddlewareResponse | NextResponse> {
    const request = new MiddlewareRequest(nextRequest);
    const response = await request.next();

    return response;
}

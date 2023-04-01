import { type NextRequest } from 'next/server';
import { MiddlewareRequest, type MiddlewareResponse } from '@netlify/next';
import { NextResponse } from 'next/server';

type NextRequestCustom = Omit<NextRequest, 'geo'> & { geo: any };

export async function middleware(nextRequest: NextRequestCustom): Promise<MiddlewareResponse | NextResponse> {
  try {
    const request = new MiddlewareRequest(nextRequest);
    const response = await request.next();

    response.setPageProp('showAds', !request.cookies.get('sai'));

    return response;
  } catch (error) {
    console.log(error);

    return NextResponse.next();
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/(money/(?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};

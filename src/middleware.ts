import createMiddleware from 'next-intl/middleware';
import { locales, localePrefix } from './navigation';

import { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales,

    // Used when no locale matches
    defaultLocale: 'en',
    localePrefix
});

export default function middleware(request: NextRequest) {
    // 1. Determine user's country from Vercel Edge Headers or Geo interface
    const country = request.geo?.country || request.headers.get('x-vercel-ip-country') || 'US';

    // 2. Route via next-intl
    const response = intlMiddleware(request);

    // 3. Pass the country downstream so the UI can adapt contact info dynamically
    response.headers.set('x-user-country', country);

    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(en|es|zh|it|pt|de|fr)/:path*']
};

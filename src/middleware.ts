import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

const middleware = (request: NextRequestWithAuth) => {

    const isPrivateRoutes = request.nextUrl.pathname.startsWith("/login");
    const isAdminUser = request.nextauth.token?.role === "admin";

    if (isPrivateRoutes && !isAdminUser) {
        return NextResponse.rewrite(new URL('/denied', request.url));
    }
}
const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);
export const config = {
    matcher: '/admin'
}
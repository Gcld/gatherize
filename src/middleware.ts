import { NextAuthMiddlewareOptions, NextRequestWithAuth, withAuth } from "next-auth/middleware";
// import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const middleware = (request: NextRequestWithAuth) => {

    // const isPrivateRoutes = request.nextUrl.pathname.startsWith("/admin");
    // const isAdminUser = request.nextauth.token?.role === "admin";

    // if (isPrivateRoutes && isAdminUser) {
    //     return NextResponse.rewrite(new URL('/denied', request.url));
    // }
}
const callbackOptions: NextAuthMiddlewareOptions = {};

export default withAuth(middleware, callbackOptions);
export const config = {
    matcher: '/admin'
}
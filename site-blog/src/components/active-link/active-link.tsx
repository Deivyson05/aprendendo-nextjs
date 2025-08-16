import Link, { LinkProps } from "next/link"
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import React from "react";

type props = {
    children: React.ReactNode;
} & LinkProps;

export function ActiveLink({children, href, ...rest}: props) {
    const router = useRouter();
    const isCurrentPath = router.asPath === href || router.asPath === rest.as || router.asPath.startsWith(String(rest.as));
    return (
        <Link href="/" className={cn('text-sm font-medium transition-colors hover:text-blue-500', isCurrentPath ? 'text-blue-500' : 'text-muted-foreground')}>{children}</Link>
    );
}
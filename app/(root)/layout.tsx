import React, { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import {auth} from "firebase-admin";
import {isAuthenticated} from "@/lib/actions/auth.action";
import {redirect} from "next/navigation";

const RootLayout = async ({ children }: { children: ReactNode }) => {
    const isUserAuthenticated = await isAuthenticated();
    if(!isUserAuthenticated) redirect('/sign-in');
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="logo"
                        width={40}
                        height={40}
                        priority // ✅ Ensures image loads immediately
                        unoptimized // ✅ Useful for debugging
                    />
                    <h2 className="text-primary-200">SkillSprint</h2>
                </Link>
            </nav>
            {children}
        </div>
    );
};

export default RootLayout;

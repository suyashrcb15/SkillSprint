"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";
import {getAuth} from "firebase/auth";

const ONE_WEEK=60*60*24*7;
export async function signUp(params: SignUpParams){

    const {uid, name, email}=params;
    try{
        const userRecord=await db.collection('users').doc(uid).get();
        if(userRecord.exists){
            return {
                success: false,
                message: 'User already exists!',
            }
        }
        await db.collection('users').doc(uid).set({
            name,email
        })
        return {
            success: true,
            message: 'Account creatted successfully. Please Sign In.',
        }
    }catch(e: any){
        console.error('Error creating a user', e);
        if(e.code === 'auth/email-already-exists'){
            return{
                success: false,
                message: 'User already exists'
            }
        }
        return {
            success: false,
            message: 'Failed to create an account'
        }
    }
}

export async function signIn(params: SignInParams){
    const{ email, idToken}=params;
    try{
        const userRecord=await auth.getUserByEmail(email);
        if(!userRecord){
            return {
                success: false,
                message: 'User already exists!. Create an Account instead.',
            }
        }
        await setSessionCookie(idToken);
    } catch(e){
        return{
            success: false,
            message: 'Error in creating an account.'
        }
    }
}


export async function setSessionCookie(idToken: string) {
    const cookieStore = await cookies(); // ✅ Await cookies() to resolve the promise

    const sessionCookie = await auth.createSessionCookie(idToken, {
        expiresIn: ONE_WEEK * 1000, // Convert to milliseconds
    });

    // ✅ Now cookieStore.set() will work correctly
    cookieStore.set("session", sessionCookie, {
        maxAge: ONE_WEEK, // Set max age in seconds
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: "/",
        sameSite: "lax",
    });
}


export async function getCurrentUser(): Promise<User | null>{
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('session')?.value;
    if(!sessionCookie) return null;
    try{
        const decodedClaim=await auth.verifySessionCookie(sessionCookie, true);
        const userRecord=await db.collection('users').doc(decodedClaim.uid).get();
        if(!userRecord.exists) return null;
        return{
            ...userRecord.data(),
            id:userRecord.id,
        } as User;
    } catch(e){
        console.log(e)
        return null;
    }
}

export async function isAuthenticated(){
    const user=await getCurrentUser();
    return !!user;
}

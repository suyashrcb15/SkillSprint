"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FormField from "./FormField";
import Image from "next/image";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import {auth} from "@/firebase/client";
import {signIn, signUp} from "@/lib/actions/auth.action"; // ✅ Correct import

// Define schema dynamically based on form type
const authFormSchema = (type: FormType) =>
    z.object({
        name: type === "sign-up" ? z.string().min(3, "Name must be at least 3 characters") : z.string().optional(),
        email: z.string().email("Invalid email"),
        password: z.string().min(3, "Password must be at least 3 characters"),
    });

const AuthForm = ({ type }: { type: FormType }) => {
    const router = useRouter(); // ✅ Correct router for Next.js App Router
    const formSchema = authFormSchema(type);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            if (type === "sign-up") {
                const { name, email, password } = values;
                const userCredentials = await createUserWithEmailAndPassword(auth, email, password);

                const result = await signUp({
                    uid: userCredentials.user.uid,
                    name: name!,
                    email,
                });

                if (!result?.success) {
                    toast.error(result?.message);
                    return;
                }

                toast.success("Signup successful. Please Sign in.");
                router.push("/sign-in");
            } else {
                const { email, password } = values;
                const userCredentials = await signInWithEmailAndPassword(auth, email, password); // ✅ Fixed

                const idToken = await userCredentials.user.getIdToken();
                if (!idToken) {
                    toast.error("Sign in failed");
                    return;
                }

                await signIn({ email, idToken });

                toast.success("Signin successful.");
                router.push("/");
            }
        } catch (error: any) {
            console.error(error);
            toast.error(error.message || "An error occurred");
        }
    }


    const isSignIn = type === "sign-in";

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                {/* Logo Section */}
                <div className="flex flex-row gap-2 justify-center">
                    <Image src="/logo.png" alt="logo" height={32} width={38} />
                    <h2 className="text-primary-200">SkillSprint</h2>
                </div>
                <h3 className="text-primary-200">Get job by giving interview</h3>

                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="w-full space-y-6 mt-4 form"
                    >
                        {!isSignIn && (
                            <FormField
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Your Name"
                                type="text"
                            />
                        )}

                        <FormField
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Your email address"
                            type="email"
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                        />

                        <Button className="btn" type="submit">
                            {isSignIn ? "Sign In" : "Create an Account"}
                        </Button>
                    </form>
                </Form>

                {/* Sign-In / Sign-Up Toggle */}
                <p className="text-center">
                    {isSignIn ? "No account?" : "Account Already Exists"}
                    <Link href={!isSignIn ? "/sign-in" : "/sign-up"} className="font-bold text-user-primary ml-1">
                        {!isSignIn ? "Sign In" : "Sign Up"}
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;

"use client"

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useSupabase from "@/hooks/useSupabase";
import { useForm } from "react-hook-form";
import { GlobeComponent } from "../Globe";
import Loader from "@/components/Loader";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { useState } from "react";
import Link from "next/link";
import { z } from "zod";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
    name: z.string().min(3, { message: "Name must be at least 3 characters." }),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})

export default function SignUpComponent() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const supabase = useSupabase();

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {

        setLoading(true);

        const { data: dataSignUp, error } = await supabase.auth.signUp({
            email: data.email,
            password: data.password,
            options: {
                data: {
                    name: data.name
                }
            }
        });

        setLoading(false);

        if (error) {
            toast.error(error.message,
                {
                    style: {
                        borderRadius: '3px',
                        background: '#333',
                        color: '#fff',
                    },
                });
        } else {
            toast.success("Account created successfully!",
                {
                    style: {
                        borderRadius: '3px',
                        background: '#333',
                        color: '#fff',
                    },
                });
        }
        form.reset();
        router.push('/auth/signin');
    }


    return (
        <section className="w-full h-screen flex flex-row justify-center items-center overflow-hidden">
            <div className="flex-1 h-full">
                <GlobeComponent />
            </div>
            <motion.div
                initial={{ opacity: 0, translateX: 100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 2 }}
                className="bg-secondary/50 flex flex-col gap-1 w-[40dvw] rounded-sm h-full justify-center">
                <div className="p-4 flex flex-col gap-1">
                    <h1 className="text-xl text-primary font-bold">SignUp Now!</h1>
                    <span className="text-sm text-accent-foreground">SignUp</span>
                </div>
                <div
                    className="p-4 w-full">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-3">
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input type="text" placeholder="Jonh Doe" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input type="email" placeholder="emailexample@example.com" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" placeholder="********" {...field} />
                                        </FormControl>
                                        <FormMessage className="text-xs" />
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full hover:bg-transparent hover:text-primary border border-transparent hover:border-primary transition-all duration-300">
                                {loading ? (<Loader />) : "SignUp"}
                            </Button>
                        </form>
                    </Form>
                    <div className="pt-5">
                        <span className="text-sm flex gap-1 text-secondary-foreground">
                            Already have an account?
                            <Link className="text-sm text-primary underline" href="/auth/signin">Log in now</Link>
                        </span>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
import { useNavigate } from 'react-router-dom';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"


import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const formSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters." })
        .max(100, { message: "Password must be at most 100 characters." }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        }),

})

function Login() {
    const { toast } = useToast()
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        navigate('/onboarding'),
            toast({
                variant: "default",
                title: "You submitted the following values:",
                description: (
                    <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                        <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                    </pre>
                ),
            }), console.log(data)
    }




    return (
        <>
            
            <div className="grid sm:grid-cols-3 h-screen gap-4 font-Instrument p-8 sm:p-0">
                <Form {...form}  >
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:w-3/4 col-span-2 md:px-32 md:py-16 ">
                        <div>
                            <h2 className=' font-semibold text-2xl '>
                                Welcome to Marathon
                            </h2>
                            <p className="text-muted-foreground">
                                Create an account to continue
                            </p>
                        </div>
                        <div className=" space-y-2">

                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John " {...field} className='shadow-none ' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>


                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} className='shadow-none ' />
                                        </FormControl>
                                        <FormMessage />
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
                                            <Input placeholder="name@example.com"
                                                {...field}
                                                type="email"
                                                autoCapitalize="none"
                                                autoComplete="email"
                                                autoCorrect="off" className='shadow-none ' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>


                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-xs'>Password</FormLabel>
                                        <FormControl >
                                            <Input placeholder="Enter your password" {...field} type='password' className='shadow-none ' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>


                                )}
                            />
                        </div>

                        <Button type="submit" className='shadow-none w-full'>Submit</Button>
                        <p className="px-8 text-center text-sm text-muted-foreground">
                            By clicking continue, you agree to our{" "}
                            <a
                                href="/terms"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Terms of Service
                            </a>{" "}
                            and{" "}
                            <a
                                href="/privacy"
                                className="underline underline-offset-4 hover:text-primary"
                            >
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </form>
                </Form>
                <div className="bg-gray-100 visible p-4">Left
                    ojpo
                </div>

            </div>
            <Toaster />
        </>
    )
}

export default Login




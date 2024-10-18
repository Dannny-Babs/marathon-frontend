import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from '@/components/ui/passwordinput';
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster";
import { useNavigate } from 'react-router-dom';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast"


const formSchema = z.object({
    firstname: z.string().min(2, { message: "First name must be at least 2 characters." }),
    lastname: z.string().min(2, { message: "Last name must be at least 2 characters." }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters." })
        .max(100, { message: "Password must be at most 100 characters." }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        }),

})

export default function RegisterForm() {
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
            {/* 
              The Form component is a wrapper around the form element that provides a context for the form fields.*/}
            <Form {...form}  >
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:w-11/12 mt-8  items-center self-center sm:px-8 lg:px-32 justify-center m-auto">
                    <div className='text-center'>
                        <h2 className=' font-bold text-2xl text-text-dark '>
                            Welcome to Marathon
                        </h2>
                        <p className="text-muted-foreground text-normal">
                            Create an account to continue
                        </p>
                    </div>
                    <div>
                        <div className="grid grid-cols-2 gap-4">
                            {/* Ensure each FormField takes up equal space within the row */}
                            <FormField
                                control={form.control}
                                name="firstname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className='text-xs font-semibold text-gray-800 '>First Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="John" {...field} className='shadow-none ' />
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
                                        <FormLabel className='text-xs font-semibold text-gray-800 '>Last Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Doe" {...field} className='shadow-none' />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>



                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='text-xs font-semibold text-gray-800 '>Email</FormLabel>
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
                        <FormField control={form.control} name="password" render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <PasswordInput {...field} className='shadow-none ' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                    </div>

                    <Button type="submit" className="shadow-none bg-text-dark font-normal py-5 w-full">
                        Create Account
                    </Button>
                    <div className="relative my-4">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-background px-2 text-muted-foreground">
                                Or continue with
                            </span>
                        </div>
                    </div>
                    <Button className="shadow-none bg-text-light text-text-dark border border-gray-200 hover:bg-primaryBlue-300  py-5 font-medium w-full">
                        Sign in with Google
                    </Button>
                    <p className="px-8 text-center text-xs text-muted-foreground">
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
            <Toaster />

        </>
    )
}
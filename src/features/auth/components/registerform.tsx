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
import { Checkbox } from "@/components/ui/checkbox";


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
    privacy:  z.boolean().refine(val => val === true, {
        message: "You must agree to the terms and conditions.",
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
            privacy: false,
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
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:w-11/12 mt-8  md:mt-16 items-center self-center sm:px-8 lg:px-32 justify-center m-auto">
                    <div className=''>
                        <h2 className=' font-bold text-3xl text-text-dark '>
                            Create an account
                        </h2>
                        <p className="text-muted-foreground font-normal text-sm mt-1">
                            Sign up to start your sales journey.
                        </p>
                    </div>
                    <div className="space-y-1">
                        <div className="md:grid grid-cols-2 gap-4">
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
                                    <PasswordInput {...field} className='shadow-none mt-2 ' />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                        />
                        <FormField
                            control={form.control}
                            name="privacy"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-start space-x-2 space-y-0 pt-3  ">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="grid gap-1 leading-none">
                                        <FormLabel className='text-xs font-semibold text-gray-800'>Accept terms and conditions</FormLabel>
                                        <p className="text-xs text-muted-foreground mb-2 ">
                                            You agree to our{" "}
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
                                        <FormMessage />
                                    </div>
                                  
                                </FormItem>
                               
                            )}
                        />
                    </div>
                    <div className="space-y-3 ">
                        <Button type="submit" className="shadow-none bg-text-dark mt-2 font-normal py-5 w-full">
                            Create Account
                        </Button>
                        <div className="relative my-2">
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
                    </div>
                </form>
                <div className="text-center text-xs mt-4">
                    <p className="text-muted-foreground font-normal">
                        Already have an account?
                        <a href={'/'} className="text-primaryBlue-800  font-medium hover:underline"> Sign in</a>
                    </p>
                </div>
            </Form>
            <Toaster />

        </>
    )
}
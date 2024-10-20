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
import { useNavigate } from 'react-router-dom';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast"
import { Checkbox } from "@/components/ui/checkbox";


const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    }),
    password: z.string()
        .min(6, { message: "Password must be at least 6 characters." })
        .max(100, { message: "Password must be at most 100 characters." }).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/, {
            message: "Password must contain at least one uppercase letter, one lowercase letter, and one number.",
        }),
    remember: z.boolean().default(false).optional(),
})

export default function LoginForm() {
    const { toast } = useToast()
    const navigate = useNavigate();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
            remember: false,
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
        <Form {...form}  >
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:w-11/12 mt-8 md:mt-24  items-center self-center sm:px-8 lg:px-32 justify-center m-auto">
                <div className=''>
                    <h2 className=' font-bold text-3xl text-text-dark '>
                        Welcome Back!                        
                    </h2>
                    <p className="text-muted-foreground font-normal text-sm mt-1">Login to Your Account to continue your sales journey.
                    </p>
                </div>
                <div>
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
                    <div className="flex items-center justify-between my-4">
                        <FormField
                            control={form.control}
                            name="remember"
                            render={({ field }) => (
                                <FormItem className="flex flex-row items-center space-x-2 space-y-0 ">
                                    <FormControl>
                                        <Checkbox
                                            checked={field.value}
                                            onCheckedChange={field.onChange}
                                        />
                                    </FormControl>
                                    <div className="space-y-1 leading-none">
                                        <FormLabel className='text-xs '>
                                            Remember Me
                                        </FormLabel>

                                    </div>
                                </FormItem>
                            )}
                        />

                        <a href={'/forgot-password'}
                             className="text-xs  font-medium text-primaryBlue-800 hover:underline">Forgot password?</a>
                    </div>
                </div>


                <div className='space-y-2'>
                    <Button type="submit" className="shadow-none bg-text-dark font-normal py-5 w-full">
                        Continue
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
                </div>

                <div className="text-center text-xs mt-4">
                    <p className="text-muted-foreground font-normal">
                        Don't have an account?
                        <a href={'/register'} className="text-primaryBlue-800 hover:underline font-semibold"> Sign Up</a>
                    </p>
                </div>

            </form>
        </Form>
    )
}

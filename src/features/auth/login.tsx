import { useNavigate } from 'react-router-dom';
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { Toaster } from "@/components/ui/toaster"
import authLogin from "/images/auth-login.png"
import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { PasswordInput } from '@/components/ui/passwordinput';
import { Checkbox } from "@/components/ui/checkbox"



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

function Login() {
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
        <>
            <div className="block sm:hidden">
                <div className="flex items-center m-6 ">
                    <img src="/Logo.svg" alt="Marathon" className="w-8 h-8" />
                    <h1 className="text-xl tracking-tight font-medium ml-2 text-gray-900">Marathon</h1>
                </div>
            </div>
            <div className="grid sm:grid-cols-5 h-screen gap-4 font-Instrument p-8 sm:p-0 ">

                <div className='col-span-3  '>
                    <div className="flex items-center md:ml-8 md:mt-6  invisible md:visible ">
                        <img src="/Logo.svg" alt="Marathon" className="w-8 h-8" />
                        <h1 className="text-xl tracking-tight font-medium ml-2 text-gray-900">Marathon</h1>
                    </div>
                    <Form {...form}  >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:w-11/12 mt-8 md:mt-24  items-center self-center sm:px-8 lg:px-32 justify-center m-auto">
                            <div className='text-center'>
                                <h2 className=' font-bold text-2xl text-text-dark '>
                                    Welcome Back to Marathon
                                </h2>
                                <p className="text-muted-foreground text-normal">Login to Your Account to continue your sales journey.
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

                                    <a href="#" className="text-xs  font-medium text-primaryBlue-800 hover:underline">Forgot password?</a>
                                </div>
                            </div>


                            <div className='space-y-3'>
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
                                <p className="text-muted-foreground font-medium">
                                    Already have an account?
                                    <a href="#" className="text-primaryBlue-800 hover:underline"> Sign in</a>
                                </p>
                            </div>

                        </form>
                    </Form>
                </div>
                <div className="bg-auth-bg bg-cover bg-no-repeat  px-8  items-center content-center col-span-2 hidden  md:block ">
                    <h2 className='lg:text-4xl text-2xl font-semibold  text-gray-100'>
                        Empowering Your Sales Team with Real-Time Insights!
                    </h2>
                    <p className='leading-tight mt-3 lg:text-lg text-sm  text-gray-200'>
                        Streamline your sales process, access AI-driven suggestions, and boost your team’s productivity effortlessly.
                    </p>
                    <img src={authLogin}
                        alt="image of marathon widgets"
                        className='mt-16 w-full' />
                </div>
            </div>

            <Toaster />

        </>
    )
}

export default Login







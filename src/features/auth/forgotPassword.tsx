//Desc: Forgot password component for the authentication page
import {
    Form,
    FormControl, FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from "@/hooks/use-toast"
import { Toaster } from "@/components/ui/toaster";
import authLogin from "/images/auth-login.png"


const formSchema = z.object({
    email: z.string().email({
        message: "Invalid email address.",
    })
})

export default function ForgotPassword() {
    const { toast } = useToast();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: ""
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {

        toast({
            variant: "default",
            title: "We sent you an email to reset your password",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }


    return (
        < >

            <div className="block sm:hidden">
                {/* Logo */}
                <div className="flex items-center m-6 ">
                    <img src="/Logo.svg" alt="Marathon" className="w-8 h-8" />
                    <h1 className="text-xl tracking-tight font-medium ml-2 text-gray-900">Marathon</h1>
                </div>
            </div>
            <div className="grid sm:grid-cols-5 sm:h-screen gap-4 font-Instrument p-8 sm:p-0 ">
                {/* Auth form */}
                <div className='col-span-3  '>
                    {/* Logo */}
                    <div className="flex items-center md:ml-8 md:mt-6  invisible md:visible ">
                        <img src="/Logo.svg" alt="Marathon" className="w-8 h-8" />
                        <h1 className="text-xl tracking-tight font-medium ml-2 text-gray-900">Marathon</h1>
                    </div>
                    {/* Form */}
                    <Form {...form}  >
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 md:w-11/12 mt-8 md:mt-24  sm:px-8 lg:px-32 justify-center m-auto">
                            <div >
                                <h2 className=' font-bold text-3xl text-text-dark '>
                                    Forgot Password
                                </h2>
                                <p className="text-muted-foreground font-normal text-sm mt-3">
                                    Enter your email address and we'll send you a link to reset your password
                                </p>
                            </div>
                            <div className="space-y-3">
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
                                /> <Button type="submit" className="shadow-none bg-text-dark font-normal py-5 w-full">
                                    Reset Password
                                </Button>
                            </div>

                        </form>
                    </Form>


                </div>
                {/* Auth image */}
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
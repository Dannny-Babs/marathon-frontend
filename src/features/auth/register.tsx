import authLogin from "/images/auth-login.png"
import RegisterForm from './components/register-form';

function Register() {

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
                    <RegisterForm />
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
        </>
    )
}

export default Register




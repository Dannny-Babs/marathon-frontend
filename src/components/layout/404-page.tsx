
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center">
            <div className="mb-8">
                <CloudSunIcon className="text-[#F9A826] text-6xl" />
            </div>
            <h1 className="mb-2 text-6xl font-bold text-gray-800">404</h1>
            <p className="mb-4 text-2xl font-light text-gray-600">Page not found</p>
            <p className="mb-8 text-lg text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
            <Link to="/dashboard" className="mb-4 inline-block text-sm" >
                <Button variant="default">Go back home</Button>
            </Link>
           
        </div>
    )
}

function CloudSunIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2v2" />
            <path d="m4.93 4.93 1.41 1.41" />
            <path d="M20 12h2" />
            <path d="m19.07 4.93-1.41 1.41" />
            <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128" />
            <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z" />
        </svg>
    )
}
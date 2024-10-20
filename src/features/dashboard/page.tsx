import { AppSidebar } from "@/features/dashboard/components/app-sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { NavUser } from "./components/nav-user"
import { Bell } from "lucide-react"
import { Route, Routes } from "react-router-dom"
import Home from "./home"
import ErrorPage from "@/components/layout/404-page"


function MainContent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calls" element={<div>#Calls</div>} />
      <Route path="/knowledge-base" element={<div>kb</div>} />
      <Route path="/integrations" element={<div>int</div>} />
      <Route path="/settings" element={<div>#settings</div>} />
      <Route path="/support" element={<div>#</div>} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}


export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-20 shrink-0 items-center justify-between  gap-2 border-b  px-4">
          <div className="flex items-center gap-1">
            <SidebarTrigger className="-ml-1 block md:hidden" />
            <Separator orientation="vertical" className="mr-2 h-4 block md:hidden" />
            <div className="flex flex-col gap-0">
              <h1 className="text-lg text-text-dark font-bold">Welcome Back, Olivia!</h1>
              <p className="text-xs font-medium text-gray-500">Here’s what’s happening with your account today.</p>           
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Button variant="outline" size="icon" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <Separator orientation="vertical" className="h-6 md:block hidden " />
            <div className=" md:block hidden ">

              <NavUser user={{
                name: "Olivia Dunham",
                email: "olivia@lee.com",
                avatar: "https://github.com/shadcn.png"
              }} />

            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto">
          <MainContent />
        </main>
      </SidebarInset>
    </SidebarProvider >
  )
}

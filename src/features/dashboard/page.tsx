import { AppSidebar } from "@/features/dashboard/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>

        <header className="flex h-20 shrink-0 items-center gap-2 border-b  px-4">


          <SidebarTrigger className="-ml-1 block md:hidden" />
          <Separator orientation="vertical" className="mr-2 h-4 block md:hidden" />
          <div className="flex flex-col gap-0">
            <h1 className="text-lg text-text-dark font-bold">Welcome Back, Olivia!</h1>
            <p className="text-xs font-medium text-gray-500">Here’s what’s happening with your account today.</p>
            {/*<Breadcrumb >
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block text-xs">
                  <BreadcrumbLink href="#">
                    Main
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block text-xs" />
                <BreadcrumbItem className=" text-xs font-semibold">
                  <BreadcrumbPage>Settings</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>*/}
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider >
  )
}

import * as React from "react"
import { SidebarBrand } from "@/features/dashboard/components/sidebar-brand"
import { Settings2, PuzzleIcon, Home, MessageSquareTextIcon, BookTextIcon,Headset } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
  versions: ["1.0.1"],
  navMain: [

    {
      title: "Main",
      url: "#",
      items: [
        {
          title: "Overview",
          url: "#",
          icon: Home,
          isActive: true,
        },
        {
          title: "Calls",
          url: "#",
          icon: MessageSquareTextIcon,
        },
        {
          title: "Knowledge Base",
          url: "#",
          icon: BookTextIcon,
        },
       
      ],
    },
    {
      title: "Settings",
      url: "#",
      items: [
        {
          title: "Integrations",
          url: "#",
          icon: PuzzleIcon,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings2,
        },
        {
          title: "Support",
          url: "#",
          icon: Headset,
        },
      ],
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} className="bg-gray-800 font-Instrument">
      <SidebarHeader>
        <SidebarBrand/>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive} className="py-5 " >
                    <a href={item.url}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}

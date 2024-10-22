import * as React from "react"
import { SidebarBrand } from "@/features/dashboard/components/sidebar-brand"
import { Settings2, PuzzleIcon, Home, MessageSquareTextIcon, BookTextIcon, Headset } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavUser } from "./nav-user"
import { Link, useLocation } from "react-router-dom"

// This is sample data.
const data = {
  navMain: [
    {
      title: "Main",
      items: [
        {
          title: "Overview",
          url: "/dashboard",
          icon: Home,
        },
        {
          title: "Calls",
          url: "/dashboard/calls",
          icon: MessageSquareTextIcon,
        },
        {
          title: "Knowledge Base",
          url: "/dashboard/knowledge-base",
          icon: BookTextIcon,
        },
      ],
    },
    {
      title: "Settings",
      items: [
        {
          title: "Integrations",
          url: "/dashboard/integrations",
          icon: PuzzleIcon,
        },
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: Settings2,
        },
        {
          title: "Support",
          url: "/dashboard/support",
          icon: Headset,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();

  const isActive = (url: string) => {
    if (url === '/dashboard') {
      return location.pathname === url;
    }
    return location.pathname.startsWith(url);
  };

  return (
    <Sidebar {...props} className="bg-gray-800 font-Instrument">
      <SidebarHeader>
        <SidebarBrand />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive(item.url)}
                    >
                      <Link to={item.url}>
                        {item.icon && <item.icon className="mr-2 h-4 w-4" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="md:hidden block items-center py-4">
        <NavUser user={{
          name: "Olivia Dunham",
          email: "olivia@lee.com",
          avatar: "https://github.com/shadcn.png"
        }} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
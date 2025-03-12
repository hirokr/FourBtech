import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./app-sidebar"

export default function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger className="absolute right-5 top-5"/>
        {children}
      </main>
    </SidebarProvider>
  )
}

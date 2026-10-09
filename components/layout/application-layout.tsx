import type { ReactNode } from "react"
import { SiteHeader } from "@/components/part/site-header"
import { SiteFooter } from "@/components/part/site-footer"

interface ApplicationLayoutProps {
  children: ReactNode
}

export function ApplicationLayout({ children }: ApplicationLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader/>

      <main className="flex-1">{children}</main>

      <SiteFooter/>
    </div>
  )
}

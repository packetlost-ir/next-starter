import type { ReactNode } from "react"
import { ThemeProvider } from "next-themes"
import { cn } from "cn"

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <html
      lang="fa"
      dir={"rtl"}
      suppressHydrationWarning
      className={cn(
        "antialiased",
        "font-sans",
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}

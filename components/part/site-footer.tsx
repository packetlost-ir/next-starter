export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          © 2026 My Website. All rights reserved.
        </p>

        <nav className="flex items-center gap-6 text-sm">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </nav>
      </div>
    </footer>
  )
}

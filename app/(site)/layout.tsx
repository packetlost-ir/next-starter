import { ApplicationLayout } from "@/components/layout/application-layout"

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ApplicationLayout>{children}</ApplicationLayout>
}

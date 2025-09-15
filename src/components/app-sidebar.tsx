"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  Users,
  Shield,
  Book,
  FileText,
  Calendar,
  CheckSquare,
  ChevronDown,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarSeparator,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

const items = [
  {
    title: "لوحة التحكم",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "ادارة المستخدمين",
    icon: Users,
    subItems: [
      {
        title: "الطلاب",
        url: "/users/students",
      },
      {
        title: "المعلمين",
        url: "/users/teachers",
      },
      {
        title: "اولياء الامور",
        url: "/users/parents",
      },
    ],
  },
  {
    title: "أدارة الصلاحيات",
    url: "/permissions",
    icon: Shield,
  },
  {
    title: "الصفوف والمجموعات",
    icon: Book,
    subItems: [
      {
        title: "المجموعات",
        url: "/groups",
      },
      {
        title: "الصفوف",
        url: "/classes",
      },
    ],
  },
  {
    title: "الاختبارات",
    url: "/exams",
    icon: FileText,
  },
  {
    title: "جدول الحصص",
    url: "/timetable",
    icon: Calendar,
  },
  {
    title: "حضور الطلاب",
    url: "/attendance",
    icon: CheckSquare,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  const isPathActive = (path?: string) => {
    if (!path) return false
    try {
      // المسار نشط إذا طابق البداية (يدعم المستويات الفرعية)
      return pathname === path || pathname.startsWith(path + "/")
    } catch {
      return false
    }
  }

  // ا��تح الأقسام التي تحتوي على مسار فرعي نشط تلقائياً
  const initialOpen = React.useMemo(() => {
    const o: Record<string, boolean> = {}
    items.forEach((item) => {
      if (item.subItems?.length) {
        o[item.title] = item.subItems.some((s) => isPathActive(s.url))
      }
    })
    return o
  }, [pathname])

  const [openSections, setOpenSections] = React.useState<Record<string, boolean>>(initialOpen)

  React.useEffect(() => {
    setOpenSections((prev) => {
      const next = { ...prev }
      items.forEach((item) => {
        if (item.subItems?.length && item.subItems.some((s) => isPathActive(s.url))) {
          next[item.title] = true
        }
      })
      return next
    })
  }, [pathname])

  return (
    <Sidebar variant="floating" collapsible="icon" className="group-data-[variant=floating]:px-2">
      <SidebarHeader className="p-3">
        <div className="rounded-lg border bg-gradient-to-br from-sidebar to-sidebar-accent/60 p-3 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex min-w-0 items-center gap-2">
              <div className="size-8 shrink-0 rounded-md bg-primary/10 text-primary grid place-items-center font-semibold">S</div>
              <div className="truncate">
                <div className="text-sm font-semibold leading-5">المدرسة الذكية</div>
                <div className="text-xs text-muted-foreground">لوحة التحكم</div>
              </div>
            </div>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="gap-3 px-2 pb-3">
        <SidebarGroup className="gap-1">
          <SidebarGroupLabel className="px-3 text-[11px] font-medium tracking-wide text-muted-foreground">
            القائمة الرئيسية
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1.5">
              {items.map((item) => {
                const hasChildren = !!item.subItems?.length
                const mainActive = isPathActive(item.url)
                const anyChildActive = hasChildren && item.subItems!.some((s) => isPathActive(s.url))
                const isOpen = hasChildren ? (openSections[item.title] ?? anyChildActive) : false

                const ItemInner = (
                  <>
                    {item.icon ? <item.icon className="shrink-0" /> : null}
                    <span className="truncate">{item.title}</span>
                  </>
                )

                return (
                  <SidebarMenuItem key={item.title}>
                    {item.url ? (
                      <SidebarMenuButton
                        asChild
                        isActive={mainActive || !!anyChildActive}
                        size="lg"
                        tooltip={item.title}
                        className="h-10 rounded-md [&>svg]:size-5"
                      >
                        <Link href={item.url}>{ItemInner}</Link>
                      </SidebarMenuButton>
                    ) : (
                      <>
                        <SidebarMenuButton
                          isActive={isOpen}
                          size="lg"
                          tooltip={item.title}
                          className="h-10 rounded-md [&>svg]:size-5"
                          onClick={() =>
                            setOpenSections((s) => ({
                              ...s,
                              [item.title]: !isOpen,
                            }))
                          }
                          aria-expanded={isOpen}
                          data-state={isOpen ? "open" : "closed"}
                        >
                          {ItemInner}
                        </SidebarMenuButton>
                        <SidebarMenuAction
                          aria-label="Toggle section"
                          onClick={(e) => {
                            e.stopPropagation()
                            setOpenSections((s) => ({
                              ...s,
                              [item.title]: !isOpen,
                            }))
                          }}
                        >
                          <ChevronDown className={cn("transition-transform", isOpen ? "rotate-0" : "-rotate-90")} />
                        </SidebarMenuAction>
                      </>
                    )}

                    {hasChildren && isOpen && (
                      <SidebarMenuSub className="mt-1">
                        {item.subItems!.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton
                              href={subItem.url}
                              isActive={isPathActive(subItem.url)}
                              className="h-8"
                              size="sm"
                            >
                              {subItem.title}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    )}
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarSeparator />

        <SidebarGroup>
          <SidebarGroupLabel className="px-3 text-[11px] font-medium tracking-wide text-muted-foreground">
            اخرى
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton size="lg" className="h-10 rounded-md [&>svg]:size-5" tooltip="الدعم والمساعدة">
                  <span>الدعم والمساعدة</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="mt-auto px-3 pb-3">
        <div className="rounded-lg border bg-card p-3 text-xs text-muted-foreground">
          نسخة النظام: 1.0.0
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}

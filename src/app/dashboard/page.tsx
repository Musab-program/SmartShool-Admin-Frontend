"use client"

import { ColumnDef } from "@tanstack/react-table"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "./data.json"

// Defining the shape of the data
export type Student = {
  id: number
  name: string
  class: string
  status: "حاضر" | "غائب"
  grade: string
}

// Defining the columns for the table
export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "name",
    header: "الاسم",
  },
  {
    accessorKey: "class",
    header: "الصف",
  },
  {
    accessorKey: "status",
    header: "الحالة",
  },
  {
    accessorKey: "grade",
    header: "الدرجة",
  },
]

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <SectionCards />
            <ChartAreaInteractive />
            <DataTable columns={columns} data={data} />
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}

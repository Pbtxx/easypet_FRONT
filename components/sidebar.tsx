"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Calendar,
  Users,
  FileText,
  MessageSquare,
  BarChart3,
  Settings,
  Cloud,
  AlertCircle,
  Crown,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const pathname = usePathname()

  const routes = [
    {
      label: "Panel Principal",
      icon: LayoutDashboard,
      href: "/dashboard",
      color: "text-sky-500",
    },
    {
      label: "Citas",
      icon: Calendar,
      href: "/citas",
      color: "text-violet-500",
    },
    {
      label: "Pacientes",
      icon: Users,
      href: "/pacientes",
      color: "text-pink-700",
    },
    {
      label: "Documentos",
      icon: FileText,
      href: "/documentos",
      color: "text-orange-500",
    },
    {
      label: "Mensajes",
      icon: MessageSquare,
      href: "/mensajes",
      color: "text-emerald-500",
    },
    {
      label: "Almacenamiento",
      icon: Cloud,
      href: "/almacenamiento",
      color: "text-blue-500",
    },
    {
      label: "Estadísticas",
      icon: BarChart3,
      href: "/estadisticas",
      color: "text-yellow-500",
      premium: true,
    },
    {
      label: "Configuración",
      icon: Settings,
      href: "/configuracion",
      color: "text-gray-500",
    },
  ]

  return (
    <div className="hidden md:flex h-full flex-col bg-white border-r shadow-sm">
      <div className="p-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="relative w-8 h-8 mr-2">
            <div className="absolute inset-0 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
          </div>
          <h1 className="text-xl font-bold text-teal-600">EasyPet</h1>
        </Link>
      </div>
      <div className="flex-1 flex flex-col px-3 py-2 space-y-1">
        {routes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-muted",
              pathname === route.href ? "bg-muted font-medium" : "text-muted-foreground",
            )}
          >
            <route.icon className={cn("h-5 w-5", route.color)} />
            <span>{route.label}</span>
            {route.premium && <Crown className="h-4 w-4 ml-auto text-amber-500" />}
          </Link>
        ))}
      </div>
      <div className="p-4 mt-auto">
        <Button variant="destructive" className="w-full flex items-center gap-2">
          <AlertCircle className="h-4 w-4" />
          <span>Emergencia</span>
        </Button>
      </div>
      <div className="p-4 border-t">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
            <span className="text-teal-700 font-medium">DV</span>
          </div>
          <div>
            <p className="text-sm font-medium">Dr. Veterinario</p>
            <p className="text-xs text-muted-foreground">Plan Básico</p>
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Bell, Menu, Search, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Sidebar from "@/components/sidebar"
import { Badge } from "@/components/ui/badge"

export default function Header() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0">
          <Sidebar />
        </SheetContent>
      </Sheet>

      {searchOpen ? (
        <div className="flex-1 flex items-center">
          <Input type="search" placeholder="Buscar pacientes, citas, documentos..." className="flex-1" autoFocus />
          <Button variant="ghost" size="icon" onClick={() => setSearchOpen(false)} className="ml-2">
            <X className="h-5 w-5" />
          </Button>
        </div>
      ) : (
        <>
          <Button variant="outline" size="icon" onClick={() => setSearchOpen(true)} className="md:hidden">
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>
          <div className="hidden md:flex md:flex-1">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar pacientes, citas, documentos..." className="w-full pl-8" />
            </div>
          </div>
        </>
      )}

      <div className="flex items-center gap-2 ml-auto">
        <Button variant="outline" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
            3
          </Badge>
        </Button>
        <Button variant="outline" className="hidden md:flex gap-2">
          <span>Actualizar a Premium</span>
          <Badge className="bg-amber-500 hover:bg-amber-600">PRO</Badge>
        </Button>
      </div>
    </header>
  )
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, Upload } from "lucide-react"
import { cn } from "@/lib/utils"

export default function AddPetForm() {
  const [birthDate, setBirthDate] = useState<Date>()

  return (
    <form className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="pet-name">Nombre de la Mascota</Label>
          <Input id="pet-name" placeholder="Nombre" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pet-type">Tipo de Mascota</Label>
          <Select>
            <SelectTrigger id="pet-type">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="perro">Perro</SelectItem>
              <SelectItem value="gato">Gato</SelectItem>
              <SelectItem value="ave">Ave</SelectItem>
              <SelectItem value="reptil">Reptil</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="pet-breed">Raza</Label>
          <Input id="pet-breed" placeholder="Raza" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pet-birth">Fecha de Nacimiento</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !birthDate && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthDate ? format(birthDate, "PPP") : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={birthDate} onSelect={setBirthDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="pet-gender">Género</Label>
          <Select>
            <SelectTrigger id="pet-gender">
              <SelectValue placeholder="Seleccionar género" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="macho">Macho</SelectItem>
              <SelectItem value="hembra">Hembra</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="pet-weight">Peso (kg)</Label>
          <Input id="pet-weight" type="number" placeholder="0.0" step="0.1" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="owner-name">Nombre del Dueño</Label>
          <Input id="owner-name" placeholder="Nombre completo" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="owner-phone">Teléfono del Dueño</Label>
          <Input id="owner-phone" placeholder="Número de teléfono" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="owner-email">Email del Dueño</Label>
          <Input id="owner-email" type="email" placeholder="correo@ejemplo.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="owner-address">Dirección del Dueño</Label>
          <Input id="owner-address" placeholder="Dirección" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pet-photo">Foto de la Mascota</Label>
        <div className="flex items-center gap-4">
          <div className="h-24 w-24 rounded-md border-2 border-dashed border-muted-foreground/25 flex items-center justify-center">
            <Upload className="h-8 w-8 text-muted-foreground/50" />
          </div>
          <Button type="button" variant="outline">
            Subir Foto
          </Button>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="pet-notes">Notas Adicionales</Label>
        <Textarea id="pet-notes" placeholder="Información adicional relevante sobre la mascota" />
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit">Guardar Mascota</Button>
      </div>
    </form>
  )
}

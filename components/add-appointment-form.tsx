"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"

export default function AddAppointmentForm() {
  const [date, setDate] = useState<Date>()

  return (
    <form className="space-y-6 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="appointment-pet">Mascota</Label>
          <Select>
            <SelectTrigger id="appointment-pet">
              <SelectValue placeholder="Seleccionar mascota" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="luna">Luna (Gato)</SelectItem>
              <SelectItem value="rocky">Rocky (Perro)</SelectItem>
              <SelectItem value="coco">Coco (Loro)</SelectItem>
              <SelectItem value="max">Max (Perro)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="appointment-type">Tipo de Cita</Label>
          <Select>
            <SelectTrigger id="appointment-type">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="checkup">Revisión General</SelectItem>
              <SelectItem value="vaccine">Vacunación</SelectItem>
              <SelectItem value="surgery">Cirugía</SelectItem>
              <SelectItem value="dental">Limpieza Dental</SelectItem>
              <SelectItem value="emergency">Emergencia</SelectItem>
              <SelectItem value="followup">Seguimiento</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="appointment-date">Fecha</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Seleccionar fecha"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="appointment-time">Hora</Label>
          <div className="flex items-center gap-2">
            <Select>
              <SelectTrigger id="appointment-hour">
                <SelectValue placeholder="Hora" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => i + 8).map((hour) => (
                  <SelectItem key={hour} value={hour.toString()}>
                    {hour}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <span>:</span>
            <Select>
              <SelectTrigger id="appointment-minute">
                <SelectValue placeholder="Min" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="00">00</SelectItem>
                <SelectItem value="15">15</SelectItem>
                <SelectItem value="30">30</SelectItem>
                <SelectItem value="45">45</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger id="appointment-ampm">
                <SelectValue placeholder="AM/PM" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="am">AM</SelectItem>
                <SelectItem value="pm">PM</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="appointment-duration">Duración</Label>
          <Select>
            <SelectTrigger id="appointment-duration">
              <SelectValue placeholder="Seleccionar duración" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="15">15 minutos</SelectItem>
              <SelectItem value="30">30 minutos</SelectItem>
              <SelectItem value="45">45 minutos</SelectItem>
              <SelectItem value="60">1 hora</SelectItem>
              <SelectItem value="90">1 hora 30 minutos</SelectItem>
              <SelectItem value="120">2 horas</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="appointment-vet">Veterinario</Label>
          <Select>
            <SelectTrigger id="appointment-vet">
              <SelectValue placeholder="Seleccionar veterinario" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr-martinez">Dr. Martínez</SelectItem>
              <SelectItem value="dra-lopez">Dra. López</SelectItem>
              <SelectItem value="dr-rodriguez">Dr. Rodríguez</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="appointment-reason">Motivo de la Cita</Label>
        <Textarea id="appointment-reason" placeholder="Describa el motivo de la cita" />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox id="send-reminder" />
        <Label htmlFor="send-reminder">Enviar recordatorio al dueño</Label>
      </div>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline">
          Cancelar
        </Button>
        <Button type="submit">Programar Cita</Button>
      </div>
    </form>
  )
}

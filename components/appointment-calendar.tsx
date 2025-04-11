"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "@/components/ui/calendar"
import { useState } from "react"

export default function AppointmentCalendar() {
  const [date, setDate] = useState<Date | undefined>(new Date())

  // Días con citas (ejemplo)
  const appointmentDays = [
    new Date(2023, 3, 5),
    new Date(2023, 3, 10),
    new Date(2023, 3, 15),
    new Date(2023, 3, 20),
    new Date(2023, 3, 25),
  ]

  return (
    <Card>
      <CardContent className="p-6">
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          <div className="space-y-4">
            <div className="text-xl font-medium">Abril 2023</div>
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
          </div>
          <div>
            <div className="text-xl font-medium mb-4">Citas del día</div>
            <div className="space-y-2">
              <div className="p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <div className="font-medium">9:00 AM</div>
                  <div className="text-sm text-muted-foreground">30 min</div>
                </div>
                <div className="text-sm">Luna - Vacunación</div>
                <div className="text-xs text-muted-foreground">María García</div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <div className="font-medium">10:30 AM</div>
                  <div className="text-sm text-muted-foreground">45 min</div>
                </div>
                <div className="text-sm">Rocky - Revisión anual</div>
                <div className="text-xs text-muted-foreground">Juan Pérez</div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <div className="font-medium">12:00 PM</div>
                  <div className="text-sm text-muted-foreground">60 min</div>
                </div>
                <div className="text-sm">Coco - Problemas respiratorios</div>
                <div className="text-xs text-muted-foreground">Ana Martínez</div>
              </div>
              <div className="p-3 border rounded-md">
                <div className="flex items-center justify-between">
                  <div className="font-medium">3:30 PM</div>
                  <div className="text-sm text-muted-foreground">90 min</div>
                </div>
                <div className="text-sm">Max - Cirugía menor</div>
                <div className="text-xs text-muted-foreground">Carlos Rodríguez</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

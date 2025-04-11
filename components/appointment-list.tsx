import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function AppointmentList() {
  const appointments = [
    {
      id: 1,
      time: "09:00",
      petName: "Luna",
      petType: "Gato",
      ownerName: "María García",
      reason: "Vacunación",
      status: "Confirmada",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      time: "10:30",
      petName: "Rocky",
      petType: "Perro",
      ownerName: "Juan Pérez",
      reason: "Revisión anual",
      status: "Confirmada",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      time: "12:00",
      petName: "Coco",
      petType: "Loro",
      ownerName: "Ana Martínez",
      reason: "Problemas respiratorios",
      status: "Pendiente",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      time: "15:30",
      petName: "Max",
      petType: "Perro",
      ownerName: "Carlos Rodríguez",
      reason: "Cirugía menor",
      status: "Urgente",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Citas Programadas</CardTitle>
          <Button variant="outline" size="sm">
            Ver todas
          </Button>
        </div>
        <CardDescription>Tienes 12 citas programadas para hoy</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {appointments.map((appointment) => (
            <div key={appointment.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-center w-12 text-sm font-medium text-muted-foreground">
                {appointment.time}
              </div>
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={appointment.avatar} alt={appointment.petName} />
                <AvatarFallback>{appointment.petName.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{appointment.petName}</p>
                  <span className="text-xs text-muted-foreground">({appointment.petType})</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">Dueño: {appointment.ownerName}</p>
              </div>
              <div className="text-sm">{appointment.reason}</div>
              <Badge
                variant={
                  appointment.status === "Urgente"
                    ? "destructive"
                    : appointment.status === "Pendiente"
                      ? "outline"
                      : "default"
                }
                className="ml-auto"
              >
                {appointment.status}
              </Badge>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/pacientes/${appointment.id}`}>
                  <FileText className="h-4 w-4" />
                  <span className="sr-only">Ver historial</span>
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

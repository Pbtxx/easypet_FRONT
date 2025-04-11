import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, Syringe } from "lucide-react"

export default function VaccineReminders() {
  const reminders = [
    {
      id: 1,
      dueDate: "Hoy",
      petName: "Simba",
      petType: "Gato",
      ownerName: "Laura Sánchez",
      vaccine: "Rabia",
      status: "Urgente",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      dueDate: "Mañana",
      petName: "Toby",
      petType: "Perro",
      ownerName: "Pedro Gómez",
      vaccine: "Parvovirus",
      status: "Pendiente",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      dueDate: "En 3 días",
      petName: "Nala",
      petType: "Gato",
      ownerName: "Sofía López",
      vaccine: "Leucemia felina",
      status: "Pendiente",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      dueDate: "En 5 días",
      petName: "Rex",
      petType: "Perro",
      ownerName: "Miguel Torres",
      vaccine: "Polivalente",
      status: "Programada",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Recordatorios de Vacunas</CardTitle>
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </div>
        <CardDescription>8 vacunas pendientes para esta semana</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {reminders.map((reminder) => (
            <div key={reminder.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-center w-16 text-xs font-medium text-muted-foreground">
                {reminder.dueDate}
              </div>
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={reminder.avatar} alt={reminder.petName} />
                <AvatarFallback>{reminder.petName.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{reminder.petName}</p>
                  <span className="text-xs text-muted-foreground">({reminder.petType})</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">Dueño: {reminder.ownerName}</p>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Syringe className="h-3 w-3 text-muted-foreground" />
                {reminder.vaccine}
              </div>
              <Badge
                variant={
                  reminder.status === "Urgente"
                    ? "destructive"
                    : reminder.status === "Pendiente"
                      ? "outline"
                      : "default"
                }
                className="ml-auto"
              >
                {reminder.status}
              </Badge>
              <Button variant="ghost" size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar recordatorio</span>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

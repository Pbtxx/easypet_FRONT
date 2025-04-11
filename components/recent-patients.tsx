import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import Link from "next/link"

export default function RecentPatients() {
  const patients = [
    {
      id: 1,
      lastVisit: "Hoy",
      petName: "Bella",
      petType: "Perro",
      breed: "Golden Retriever",
      age: "3 años",
      ownerName: "Carmen Díaz",
      status: "Tratamiento",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      lastVisit: "Ayer",
      petName: "Milo",
      petType: "Gato",
      breed: "Siamés",
      age: "2 años",
      ownerName: "Roberto Fernández",
      status: "Recuperación",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      lastVisit: "Hace 2 días",
      petName: "Kira",
      petType: "Perro",
      breed: "Pastor Alemán",
      age: "5 años",
      ownerName: "Elena Morales",
      status: "Saludable",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      lastVisit: "Hace 3 días",
      petName: "Oreo",
      petType: "Gato",
      breed: "Común Europeo",
      age: "1 año",
      ownerName: "Daniel Ruiz",
      status: "Seguimiento",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Pacientes Recientes</CardTitle>
          <Button variant="outline" size="sm">
            Ver todos
          </Button>
        </div>
        <CardDescription>Últimos pacientes atendidos</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <div className="divide-y">
          {patients.map((patient) => (
            <div key={patient.id} className="flex items-center gap-4 p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-center w-20 text-xs font-medium text-muted-foreground">
                {patient.lastVisit}
              </div>
              <Avatar className="h-10 w-10 border">
                <AvatarImage src={patient.avatar} alt={patient.petName} />
                <AvatarFallback>{patient.petName.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-medium">{patient.petName}</p>
                  <span className="text-xs text-muted-foreground">({patient.petType})</span>
                </div>
                <p className="text-xs text-muted-foreground truncate">
                  {patient.breed}, {patient.age}
                </p>
              </div>
              <div className="text-xs text-muted-foreground">{patient.ownerName}</div>
              <Badge
                variant={
                  patient.status === "Tratamiento"
                    ? "outline"
                    : patient.status === "Recuperación"
                      ? "secondary"
                      : "default"
                }
                className="ml-auto"
              >
                {patient.status}
              </Badge>
              <Button variant="ghost" size="icon" asChild>
                <Link href={`/pacientes/${patient.id}`}>
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

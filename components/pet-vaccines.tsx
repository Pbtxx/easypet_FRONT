import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Plus, Syringe } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function PetVaccines() {
  const vaccines = [
    {
      id: 1,
      name: "Rabia",
      date: "10 Febrero, 2023",
      nextDate: "10 Febrero, 2024",
      status: "Vigente",
      progress: 65,
    },
    {
      id: 2,
      name: "Triple Felina",
      date: "15 Abril, 2023",
      nextDate: "15 Abril, 2024",
      status: "Vigente",
      progress: 75,
    },
    {
      id: 3,
      name: "Leucemia Felina",
      date: "20 Mayo, 2022",
      nextDate: "20 Mayo, 2023",
      status: "Vencida",
      progress: 100,
    },
    {
      id: 4,
      name: "Panleucopenia",
      date: "5 Junio, 2023",
      nextDate: "5 Junio, 2024",
      status: "Vigente",
      progress: 45,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Registro de Vacunas</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Añadir Vacuna
          </Button>
        </div>
        <CardDescription>Historial de vacunación y próximas fechas</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {vaccines.map((vaccine) => (
            <div key={vaccine.id} className="flex flex-col">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <Syringe className="h-4 w-4 text-muted-foreground" />
                  <span className="font-medium">{vaccine.name}</span>
                </div>
                <Badge variant={vaccine.status === "Vigente" ? "default" : "destructive"} className="ml-auto">
                  {vaccine.status}
                </Badge>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-2 text-sm">
                <div>
                  <p className="text-muted-foreground">Última aplicación</p>
                  <p>{vaccine.date}</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Próxima aplicación</p>
                  <p>{vaccine.nextDate}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Progress value={vaccine.progress} className="h-2" />
                <span className="text-xs text-muted-foreground">{vaccine.progress}%</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

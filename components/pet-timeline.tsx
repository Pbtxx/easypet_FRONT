import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Plus } from "lucide-react"

export default function PetTimeline() {
  const timeline = [
    {
      id: 1,
      date: "15 Abril, 2023",
      title: "Revisión Anual",
      description: "Examen físico completo. Todos los parámetros normales.",
      doctor: "Dr. Martínez",
      tags: ["Revisión", "Rutina"],
    },
    {
      id: 2,
      date: "10 Febrero, 2023",
      title: "Vacunación",
      description: "Administración de vacuna contra la rabia. Sin reacciones adversas.",
      doctor: "Dra. López",
      tags: ["Vacuna", "Preventivo"],
    },
    {
      id: 3,
      date: "5 Diciembre, 2022",
      title: "Problema Digestivo",
      description: "Presentó vómitos y diarrea. Se recetó dieta especial y probióticos.",
      doctor: "Dr. Martínez",
      tags: ["Enfermedad", "Digestivo"],
    },
    {
      id: 4,
      date: "20 Agosto, 2022",
      title: "Limpieza Dental",
      description: "Procedimiento dental completo bajo anestesia. Se eliminó sarro y placa.",
      doctor: "Dra. Rodríguez",
      tags: ["Dental", "Procedimiento"],
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Historial Médico</CardTitle>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-2" />
            Añadir Entrada
          </Button>
        </div>
        <CardDescription>Registro cronológico de visitas y tratamientos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative pl-6 border-l">
          {timeline.map((item, index) => (
            <div key={item.id} className={`relative pb-8 ${index === timeline.length - 1 ? "" : ""}`}>
              <div className="absolute -left-[25px] h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="mb-2 text-sm text-muted-foreground">{item.date}</div>
              <div className="mb-1 text-base font-medium">{item.title}</div>
              <p className="mb-2 text-sm text-muted-foreground">{item.description}</p>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-muted-foreground">Veterinario: {item.doctor}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

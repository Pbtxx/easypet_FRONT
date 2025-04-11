import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, ImageIcon, Lock, Upload } from "lucide-react"

export default function PetDocuments() {
  const documents = [
    {
      id: 1,
      name: "Radiografía Tórax",
      date: "15 Abril, 2023",
      type: "Imagen",
      size: "4.2 MB",
      icon: ImageIcon,
    },
    {
      id: 2,
      name: "Análisis de Sangre",
      date: "10 Febrero, 2023",
      type: "PDF",
      size: "1.8 MB",
      icon: FileText,
    },
    {
      id: 3,
      name: "Historial Clínico Completo",
      date: "5 Diciembre, 2022",
      type: "PDF",
      size: "3.5 MB",
      icon: FileText,
    },
    {
      id: 4,
      name: "Ecografía Abdominal",
      date: "20 Agosto, 2022",
      type: "Imagen",
      size: "5.1 MB",
      icon: ImageIcon,
    },
  ]

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>Documentos Médicos</CardTitle>
          <Button size="sm">
            <Upload className="h-4 w-4 mr-2" />
            Subir Documento
          </Button>
        </div>
        <CardDescription>Archivos médicos, radiografías y análisis</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {documents.map((document) => (
            <div
              key={document.id}
              className="flex items-center p-3 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center mr-4">
                <document.icon className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="font-medium truncate">{document.name}</p>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{document.date}</span>
                  <span>•</span>
                  <span>{document.type}</span>
                  <span>•</span>
                  <span>{document.size}</span>
                </div>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Button variant="ghost" size="icon">
                  <Lock className="h-4 w-4" />
                  <span className="sr-only">Proteger</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <Download className="h-4 w-4" />
                  <span className="sr-only">Descargar</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

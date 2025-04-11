import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { FileText, ImageIcon, Lock, Upload, Video } from "lucide-react"

export default function StoragePage() {
  const files = [
    {
      id: 1,
      name: "Radiografía_Toby_20230415.jpg",
      date: "15 Abril, 2023",
      size: "4.2 MB",
      type: "image",
      owner: "Dr. Martínez",
      patient: "Toby",
      icon: ImageIcon,
    },
    {
      id: 2,
      name: "Análisis_Sangre_Luna_20230210.pdf",
      date: "10 Febrero, 2023",
      size: "1.8 MB",
      type: "document",
      owner: "Dra. López",
      patient: "Luna",
      icon: FileText,
    },
    {
      id: 3,
      name: "Ecografía_Max_20221205.mp4",
      date: "5 Diciembre, 2022",
      size: "12.5 MB",
      type: "video",
      owner: "Dr. Martínez",
      patient: "Max",
      icon: Video,
    },
    {
      id: 4,
      name: "Historial_Clínico_Coco_20220820.pdf",
      date: "20 Agosto, 2022",
      size: "3.5 MB",
      type: "document",
      owner: "Dra. Rodríguez",
      patient: "Coco",
      icon: FileText,
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Almacenamiento</h1>
          <Button>
            <Upload className="h-4 w-4 mr-2" />
            Subir Archivo
          </Button>
        </div>
        <p className="text-muted-foreground">Almacenamiento seguro para documentos médicos e imágenes</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Uso de Almacenamiento</CardTitle>
              <CardDescription>Has utilizado 2.4 GB de 10 GB (24%)</CardDescription>
            </CardHeader>
            <CardContent>
              <Progress value={24} className="h-2 mb-4" />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-sm font-medium">Documentos</div>
                  <div className="text-2xl font-bold">0.8 GB</div>
                  <div className="text-xs text-muted-foreground">120 archivos</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Imágenes</div>
                  <div className="text-2xl font-bold">1.2 GB</div>
                  <div className="text-xs text-muted-foreground">350 archivos</div>
                </div>
                <div>
                  <div className="text-sm font-medium">Videos</div>
                  <div className="text-2xl font-bold">0.4 GB</div>
                  <div className="text-xs text-muted-foreground">15 archivos</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="todos" className="space-y-4">
            <TabsList>
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="documentos">Documentos</TabsTrigger>
              <TabsTrigger value="imagenes">Imágenes</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
            </TabsList>
            <TabsContent value="todos" className="space-y-4">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>Archivos Recientes</CardTitle>
                    <Button variant="outline" size="sm">
                      Ver todos
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {files.map((file) => (
                      <div key={file.id} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                        <div className="h-10 w-10 rounded-md bg-muted flex items-center justify-center mr-4">
                          <file.icon className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2">
                            <p className="font-medium truncate">{file.name}</p>
                            {file.type === "document" && <Badge variant="outline">PDF</Badge>}
                            {file.type === "image" && <Badge variant="outline">Imagen</Badge>}
                            {file.type === "video" && <Badge variant="outline">Video</Badge>}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <span>{file.date}</span>
                            <span>•</span>
                            <span>{file.size}</span>
                            <span>•</span>
                            <span>Paciente: {file.patient}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Button variant="ghost" size="icon">
                            <Lock className="h-4 w-4" />
                            <span className="sr-only">Proteger</span>
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="documentos" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Documentos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contenido de documentos</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="imagenes" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Imágenes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contenido de imágenes</p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="videos" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Contenido de videos</p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Acceso Rápido</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <FileText className="h-4 w-4 mr-2" />
                Documentos Recientes
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ImageIcon className="h-4 w-4 mr-2" />
                Radiografías
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Video className="h-4 w-4 mr-2" />
                Videos de Procedimientos
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Lock className="h-4 w-4 mr-2" />
                Archivos Protegidos
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Seguridad</CardTitle>
              <CardDescription>Protección de datos sensibles</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="text-sm">Cifrado de Archivos</div>
                <Badge>Activo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Autenticación de 2 Factores</div>
                <Badge>Activo</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm">Respaldo Automático</div>
                <Badge variant="outline">Desactivado</Badge>
              </div>
              <Button className="w-full" variant="outline">
                Configurar Seguridad
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

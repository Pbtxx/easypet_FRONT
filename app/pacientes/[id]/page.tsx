import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, MessageSquare, Pencil, Printer, Share2 } from "lucide-react"
import Link from "next/link"
import PetTimeline from "@/components/pet-timeline"
import PetVaccines from "@/components/pet-vaccines"
import PetDocuments from "@/components/pet-documents"

export default function PatientPage({ params }: { params: { id: string } }) {
  // En una aplicación real, obtendríamos los datos del paciente desde una API
  const pet = {
    id: params.id,
    name: "Luna",
    type: "Gato",
    breed: "Siamés",
    age: "3 años",
    weight: "4.2 kg",
    owner: "María García",
    ownerPhone: "+34 612 345 678",
    status: "Saludable",
    avatar: "/placeholder.svg?height=100&width=100",
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/pacientes">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Volver</span>
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Perfil de Mascota</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-[300px_1fr]">
        <div className="flex flex-col gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-4">
                <Avatar className="h-24 w-24 border-2 border-muted">
                  <AvatarImage src={pet.avatar} alt={pet.name} />
                  <AvatarFallback>{pet.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-bold">{pet.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {pet.type} - {pet.breed}
                  </p>
                </div>
                <Badge variant="outline" className="px-3">
                  {pet.status}
                </Badge>
                <Button className="w-full" size="sm">
                  <Pencil className="h-4 w-4 mr-2" />
                  Editar Perfil
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Información</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Edad</dt>
                  <dd className="text-sm">{pet.age}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Peso</dt>
                  <dd className="text-sm">{pet.weight}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Dueño</dt>
                  <dd className="text-sm">{pet.owner}</dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-muted-foreground">Teléfono</dt>
                  <dd className="text-sm">{pet.ownerPhone}</dd>
                </div>
              </dl>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Calendar className="h-5 w-5" />
                  <span>Nueva Cita</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <MessageSquare className="h-5 w-5" />
                  <span>Mensaje</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Printer className="h-5 w-5" />
                  <span>Imprimir</span>
                </Button>
                <Button variant="outline" className="flex flex-col h-auto py-4 gap-2">
                  <Share2 className="h-5 w-5" />
                  <span>Compartir</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="historial" className="w-full">
            <TabsList className="grid grid-cols-3 w-full">
              <TabsTrigger value="historial">Historial Médico</TabsTrigger>
              <TabsTrigger value="vacunas">Vacunas</TabsTrigger>
              <TabsTrigger value="documentos">Documentos</TabsTrigger>
            </TabsList>
            <TabsContent value="historial" className="mt-4">
              <PetTimeline />
            </TabsContent>
            <TabsContent value="vacunas" className="mt-4">
              <PetVaccines />
            </TabsContent>
            <TabsContent value="documentos" className="mt-4">
              <PetDocuments />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

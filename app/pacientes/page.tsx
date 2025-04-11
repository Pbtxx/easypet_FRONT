import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Plus, Filter, FileText } from "lucide-react"
import Link from "next/link"
import AddPetForm from "@/components/add-pet-form"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function PatientsPage() {
  const patients = [
    {
      id: "1",
      name: "Luna",
      type: "Gato",
      breed: "Siamés",
      age: "3 años",
      owner: "María García",
      status: "Saludable",
      lastVisit: "15 Abril, 2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "2",
      name: "Rocky",
      type: "Perro",
      breed: "Golden Retriever",
      age: "5 años",
      owner: "Juan Pérez",
      status: "Tratamiento",
      lastVisit: "10 Febrero, 2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "3",
      name: "Coco",
      type: "Loro",
      breed: "Amazona",
      age: "2 años",
      owner: "Ana Martínez",
      status: "Recuperación",
      lastVisit: "5 Diciembre, 2022",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "4",
      name: "Max",
      type: "Perro",
      breed: "Pastor Alemán",
      age: "4 años",
      owner: "Carlos Rodríguez",
      status: "Saludable",
      lastVisit: "20 Agosto, 2022",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "5",
      name: "Milo",
      type: "Gato",
      breed: "Común Europeo",
      age: "1 año",
      owner: "Laura Sánchez",
      status: "Vacunación",
      lastVisit: "15 Marzo, 2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: "6",
      name: "Toby",
      type: "Perro",
      breed: "Beagle",
      age: "3 años",
      owner: "Pedro Gómez",
      status: "Saludable",
      lastVisit: "25 Enero, 2023",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Pacientes</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nueva Mascota
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Añadir Nueva Mascota</DialogTitle>
                <DialogDescription>
                  Completa el formulario para registrar una nueva mascota en el sistema.
                </DialogDescription>
              </DialogHeader>
              <AddPetForm />
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-muted-foreground">Gestiona los perfiles de tus pacientes</p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Buscar por nombre, especie, dueño..." className="pl-8" />
        </div>
        <Button variant="outline" className="flex gap-2">
          <Filter className="h-4 w-4" />
          Filtros
        </Button>
      </div>

      <Tabs defaultValue="todos" className="space-y-4">
        <TabsList>
          <TabsTrigger value="todos">Todos</TabsTrigger>
          <TabsTrigger value="perros">Perros</TabsTrigger>
          <TabsTrigger value="gatos">Gatos</TabsTrigger>
          <TabsTrigger value="otros">Otros</TabsTrigger>
        </TabsList>
        <TabsContent value="todos" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Lista de Pacientes</CardTitle>
              <CardDescription>Mostrando {patients.length} pacientes</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {patients.map((patient) => (
                  <div key={patient.id} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                    <Avatar className="h-10 w-10 border mr-4">
                      <AvatarImage src={patient.avatar} alt={patient.name} />
                      <AvatarFallback>{patient.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="font-medium">{patient.name}</p>
                        <span className="text-xs text-muted-foreground">({patient.type})</span>
                      </div>
                      <p className="text-xs text-muted-foreground truncate">
                        {patient.breed}, {patient.age}
                      </p>
                    </div>
                    <div className="hidden md:block text-sm">{patient.owner}</div>
                    <div className="hidden md:block text-xs text-muted-foreground">
                      Última visita: {patient.lastVisit}
                    </div>
                    <Badge
                      variant={
                        patient.status === "Tratamiento"
                          ? "outline"
                          : patient.status === "Recuperación"
                            ? "secondary"
                            : "default"
                      }
                      className="ml-auto mr-4"
                    >
                      {patient.status}
                    </Badge>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href={`/pacientes/${patient.id}`}>
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">Ver perfil</span>
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="perros" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Perros</CardTitle>
              <CardDescription>Mostrando {patients.filter((p) => p.type === "Perro").length} pacientes</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {patients
                  .filter((p) => p.type === "Perro")
                  .map((patient) => (
                    <div key={patient.id} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                      <Avatar className="h-10 w-10 border mr-4">
                        <AvatarImage src={patient.avatar} alt={patient.name} />
                        <AvatarFallback>{patient.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{patient.name}</p>
                          <span className="text-xs text-muted-foreground">({patient.type})</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {patient.breed}, {patient.age}
                        </p>
                      </div>
                      <div className="hidden md:block text-sm">{patient.owner}</div>
                      <div className="hidden md:block text-xs text-muted-foreground">
                        Última visita: {patient.lastVisit}
                      </div>
                      <Badge
                        variant={
                          patient.status === "Tratamiento"
                            ? "outline"
                            : patient.status === "Recuperación"
                              ? "secondary"
                              : "default"
                        }
                        className="ml-auto mr-4"
                      >
                        {patient.status}
                      </Badge>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/pacientes/${patient.id}`}>
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">Ver perfil</span>
                        </Link>
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="gatos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gatos</CardTitle>
              <CardDescription>Mostrando {patients.filter((p) => p.type === "Gato").length} pacientes</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {patients
                  .filter((p) => p.type === "Gato")
                  .map((patient) => (
                    <div key={patient.id} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                      <Avatar className="h-10 w-10 border mr-4">
                        <AvatarImage src={patient.avatar} alt={patient.name} />
                        <AvatarFallback>{patient.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{patient.name}</p>
                          <span className="text-xs text-muted-foreground">({patient.type})</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {patient.breed}, {patient.age}
                        </p>
                      </div>
                      <div className="hidden md:block text-sm">{patient.owner}</div>
                      <div className="hidden md:block text-xs text-muted-foreground">
                        Última visita: {patient.lastVisit}
                      </div>
                      <Badge
                        variant={
                          patient.status === "Tratamiento"
                            ? "outline"
                            : patient.status === "Recuperación"
                              ? "secondary"
                              : "default"
                        }
                        className="ml-auto mr-4"
                      >
                        {patient.status}
                      </Badge>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/pacientes/${patient.id}`}>
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">Ver perfil</span>
                        </Link>
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="otros" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Otros</CardTitle>
              <CardDescription>
                Mostrando {patients.filter((p) => p.type !== "Perro" && p.type !== "Gato").length} pacientes
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {patients
                  .filter((p) => p.type !== "Perro" && p.type !== "Gato")
                  .map((patient) => (
                    <div key={patient.id} className="flex items-center p-4 hover:bg-muted/50 transition-colors">
                      <Avatar className="h-10 w-10 border mr-4">
                        <AvatarImage src={patient.avatar} alt={patient.name} />
                        <AvatarFallback>{patient.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">{patient.name}</p>
                          <span className="text-xs text-muted-foreground">({patient.type})</span>
                        </div>
                        <p className="text-xs text-muted-foreground truncate">
                          {patient.breed}, {patient.age}
                        </p>
                      </div>
                      <div className="hidden md:block text-sm">{patient.owner}</div>
                      <div className="hidden md:block text-xs text-muted-foreground">
                        Última visita: {patient.lastVisit}
                      </div>
                      <Badge
                        variant={
                          patient.status === "Tratamiento"
                            ? "outline"
                            : patient.status === "Recuperación"
                              ? "secondary"
                              : "default"
                        }
                        className="ml-auto mr-4"
                      >
                        {patient.status}
                      </Badge>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href={`/pacientes/${patient.id}`}>
                          <FileText className="h-4 w-4" />
                          <span className="sr-only">Ver perfil</span>
                        </Link>
                      </Button>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

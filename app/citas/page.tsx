import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus } from "lucide-react"
import AppointmentCalendar from "@/components/appointment-calendar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import AddAppointmentForm from "@/components/add-appointment-form"

export default function AppointmentsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Gestión de Citas</h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nueva Cita
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Programar Nueva Cita</DialogTitle>
                <DialogDescription>Completa el formulario para programar una nueva cita.</DialogDescription>
              </DialogHeader>
              <AddAppointmentForm />
            </DialogContent>
          </Dialog>
        </div>
        <p className="text-muted-foreground">Programa y gestiona las citas de tus pacientes</p>
      </div>

      <Tabs defaultValue="calendario" className="space-y-4">
        <TabsList>
          <TabsTrigger value="calendario">Calendario</TabsTrigger>
          <TabsTrigger value="lista">Lista de Citas</TabsTrigger>
          <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
        </TabsList>
        <TabsContent value="calendario" className="space-y-4">
          <AppointmentCalendar />
        </TabsContent>
        <TabsContent value="lista" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Lista de Citas</CardTitle>
              <CardDescription>Visualiza todas tus citas programadas</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contenido de la lista de citas</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pendientes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Citas Pendientes</CardTitle>
              <CardDescription>Citas que requieren confirmación</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Contenido de citas pendientes</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { CalendarClock, Pill, Syringe, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AppointmentList from "@/components/appointment-list"
import VaccineReminders from "@/components/vaccine-reminders"
import RecentPatients from "@/components/recent-patients"

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Panel Principal</h1>
        <p className="text-muted-foreground">Bienvenido de nuevo, Dr. Veterinario. Aquí tienes un resumen de tu día.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Citas Hoy</CardTitle>
            <CalendarClock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 comparado con ayer</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pacientes Activos</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">245</div>
            <p className="text-xs text-muted-foreground">+15 este mes</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Vacunas Pendientes</CardTitle>
            <Syringe className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Recordatorios enviados</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Medicamentos</CardTitle>
            <Pill className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">5 por renovar</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="citas" className="space-y-4">
        <TabsList>
          <TabsTrigger value="citas">Citas de Hoy</TabsTrigger>
          <TabsTrigger value="vacunas">Recordatorios de Vacunas</TabsTrigger>
          <TabsTrigger value="pacientes">Pacientes Recientes</TabsTrigger>
        </TabsList>
        <TabsContent value="citas" className="space-y-4">
          <AppointmentList />
        </TabsContent>
        <TabsContent value="vacunas" className="space-y-4">
          <VaccineReminders />
        </TabsContent>
        <TabsContent value="pacientes" className="space-y-4">
          <RecentPatients />
        </TabsContent>
      </Tabs>
    </div>
  )
}

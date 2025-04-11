import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Plus, Send } from "lucide-react"

export default function MessagesPage() {
  const conversations = [
    {
      id: 1,
      name: "María García",
      pet: "Luna (Gato)",
      lastMessage: "¿Cuándo debo darle la siguiente dosis?",
      time: "10:30",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Juan Pérez",
      pet: "Rocky (Perro)",
      lastMessage: "Gracias por la atención de hoy",
      time: "Ayer",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Ana Martínez",
      pet: "Coco (Loro)",
      lastMessage: "¿Tiene disponibilidad para el viernes?",
      time: "Ayer",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      name: "Carlos Rodríguez",
      pet: "Max (Perro)",
      lastMessage: "Le envío las fotos de la herida",
      time: "Lun",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const activeConversation = {
    id: 1,
    name: "María García",
    pet: "Luna (Gato)",
    avatar: "/placeholder.svg?height=40&width=40",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hola Dr. Veterinario, tengo una duda sobre la medicación de Luna",
        time: "10:15",
      },
      {
        id: 2,
        sender: "me",
        text: "Hola María, dime en qué puedo ayudarte",
        time: "10:20",
      },
      {
        id: 3,
        sender: "user",
        text: "Luna ya tomó la primera dosis del antibiótico esta mañana. ¿Cuándo debo darle la siguiente dosis?",
        time: "10:25",
      },
      {
        id: 4,
        sender: "me",
        text: "El antibiótico debe administrarse cada 12 horas. Si le diste la primera dosis esta mañana, la siguiente sería esta noche.",
        time: "10:30",
      },
      {
        id: 5,
        sender: "user",
        text: "¿Cuándo debo darle la siguiente dosis?",
        time: "10:30",
      },
    ],
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Mensajes</h1>
        <p className="text-muted-foreground">Comunicación directa con los tutores de mascotas</p>
      </div>

      <div className="grid md:grid-cols-[300px_1fr] gap-6 h-[calc(100vh-220px)]">
        <Card className="flex flex-col h-full">
          <div className="p-4 border-b">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Buscar conversaciones..." className="pl-8" />
            </div>
          </div>
          <div className="flex-1 overflow-auto">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={`flex items-center gap-3 p-3 hover:bg-muted/50 transition-colors cursor-pointer ${
                  conversation.id === activeConversation.id ? "bg-muted" : ""
                }`}
              >
                <Avatar className="h-10 w-10 border">
                  <AvatarImage src={conversation.avatar} alt={conversation.name} />
                  <AvatarFallback>{conversation.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{conversation.name}</p>
                    <span className="text-xs text-muted-foreground">{conversation.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground">{conversation.pet}</p>
                  <p className="text-sm truncate">{conversation.lastMessage}</p>
                </div>
                {conversation.unread && <div className="w-2 h-2 rounded-full bg-primary"></div>}
              </div>
            ))}
          </div>
          <div className="p-4 border-t">
            <Button className="w-full" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Nueva Conversación
            </Button>
          </div>
        </Card>

        <Card className="flex flex-col h-full">
          <div className="p-4 border-b flex items-center gap-3">
            <Avatar className="h-10 w-10 border">
              <AvatarImage src={activeConversation.avatar} alt={activeConversation.name} />
              <AvatarFallback>{activeConversation.name.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{activeConversation.name}</p>
              <p className="text-xs text-muted-foreground">{activeConversation.pet}</p>
            </div>
          </div>
          <CardContent className="flex-1 overflow-auto p-4 space-y-4">
            {activeConversation.messages.map((message) => (
              <div key={message.id} className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.sender === "me" ? "bg-primary text-primary-foreground" : "bg-muted"
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"
                    }`}
                  >
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <Input placeholder="Escribe un mensaje..." className="flex-1" />
              <Button size="icon">
                <Send className="h-4 w-4" />
                <span className="sr-only">Enviar</span>
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}

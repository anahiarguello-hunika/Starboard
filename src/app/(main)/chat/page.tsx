
'use client';

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Paperclip, Search, Send, User } from "lucide-react";
import Link from "next/link";

const conversations = [
  { name: "Equipo Legal", message: "Claro, lo reviso y te comento.", time: "2:43 PM", unread: 0, avatar: "https://placehold.co/100x100" },
  { name: "Alice Johnson", message: "Ok, gracias!", time: "1:15 PM", unread: 0, avatar: "https://placehold.co/100x100" },
  { name: "Bob Williams", message: "Recibido. Te mantengo informado.", time: "Ayer", unread: 2, avatar: "https://placehold.co/100x100" },
  { name: "Charlie Brown", message: "No hay problema, lo vemos mañana.", time: "Ayer", unread: 0, avatar: "https://placehold.co/100x100" },
];

const messages = [
    { from: 'me', text: 'Hola, ¿podrías revisar el borrador del contrato que te envié?', time: '2:40 PM' },
    { from: 'other', text: '¡Hola! Sí, claro. Dame un momento.', time: '2:41 PM' },
    { from: 'other', text: 'He revisado el documento. Tengo un par de comentarios en la sección 3.2.', time: '2:42 PM' },
    { from: 'other', text: 'Claro, lo reviso y te comento.', time: '2:43 PM' },
    { from: 'me', text: 'Perfecto, gracias. Quedo al pendiente.', time: '2:45 PM' },
];

export default function ChatPage() {
  return (
    <div className="grid grid-cols-[350px_1fr] h-[calc(100vh-8rem)]">
      <div className="border-r flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-2xl font-bold font-headline">Chats</h2>
          <div className="relative mt-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Buscar en chats" className="pl-10" />
          </div>
        </div>
        <div className="flex-grow overflow-y-auto">
          {conversations.map(convo => (
            <Link href="#" key={convo.name}>
                <div className="flex items-center gap-4 p-4 hover:bg-muted cursor-pointer border-b">
                    <Avatar className="h-12 w-12">
                        <AvatarImage src={convo.avatar} data-ai-hint="person avatar" />
                        <AvatarFallback><User /></AvatarFallback>
                    </Avatar>
                    <div className="flex-grow">
                        <div className="flex justify-between items-center">
                            <h3 className="font-semibold">{convo.name}</h3>
                            <span className="text-xs text-muted-foreground">{convo.time}</span>
                        </div>
                        <div className="flex justify-between items-center mt-1">
                            <p className="text-sm text-muted-foreground truncate max-w-[180px]">{convo.message}</p>
                            {convo.unread > 0 && <div className="bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">{convo.unread}</div>}
                        </div>
                    </div>
                </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <div className="p-4 border-b flex items-center gap-4">
           <Avatar className="h-12 w-12">
                <AvatarImage src="https://placehold.co/100x100" data-ai-hint="person avatar" />
                <AvatarFallback><User /></AvatarFallback>
            </Avatar>
            <div>
                <h3 className="font-semibold text-lg">Equipo Legal</h3>
                <p className="text-sm text-muted-foreground">En línea</p>
            </div>
        </div>
        <div className="flex-grow overflow-y-auto p-6 bg-muted/30">
            <div className="space-y-6">
                 {messages.map((msg, index) => (
                    <div key={index} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-md p-3 rounded-xl ${msg.from === 'me' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}>
                            <p>{msg.text}</p>
                            <p className={`text-xs mt-1 ${msg.from === 'me' ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>{msg.time}</p>
                        </div>
                    </div>
                 ))}
            </div>
        </div>
        <div className="p-4 border-t bg-background">
          <div className="relative">
            <Input placeholder="Escribe un mensaje..." className="pr-24 py-6" />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <Button variant="ghost" size="icon"><Paperclip className="h-5 w-5 text-muted-foreground" /></Button>
                <Button><Send className="h-5 w-5" /></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

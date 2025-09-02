
'use client';

import { AtSign, Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  email: z.string().email("Correo electrónico inválido").max(100, "El correo no debe exceder los 100 caracteres."),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres.").max(16, "La contraseña no debe exceder los 16 caracteres."),
});

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (values.email === 'test@starboard.legal' && values.password === 'password123') {
        toast({
            title: "Inicio de sesión exitoso",
            description: "¡Bienvenido de vuelta!",
        });
        router.push('/dashboard');
    } else {
        toast({
            variant: "destructive",
            title: "Error de inicio de sesión",
            description: "Correo electrónico o contraseña incorrectos.",
        });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)] bg-background">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-headline font-bold text-primary">
            Iniciar Sesión
          </CardTitle>
          <CardDescription>
            Ingresa tus credenciales para acceder a tu cuenta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="email">Correo electrónico</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                        <Input id="email" type="email" placeholder="tu@email.com" className="pl-10" {...field} />
                      </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <Label htmlFor="password">Contraseña</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <FormControl>
                        <Input id="password" type={showPassword ? "text" : "password"} placeholder="********" className="pl-10 pr-10" {...field} />
                      </FormControl>
                      <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                   {/* This is a placeholder, a real implementation would need state management */}
                </div>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Recuperar contraseña
                </Link>
              </div>
              <Button type="submit" className="w-full">
                Iniciar sesión
              </Button>
              <div className="text-center text-sm">
                ¿No tienes una cuenta?{' '}
                <Link href="#" className="text-primary hover:underline">
                  Registrarse
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

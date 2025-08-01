
'use client';

import { AtSign, Eye, Lock, Mail, KeyRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

export default function BackgroundCheckPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)] bg-background">
      <Card className="w-full max-w-md shadow-none border-0">
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-headline font-bold" style={{color: '#1e2468'}}>
            Inicia Sesión
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="email" type="email" placeholder="Ingresa tu email" className="pl-12 py-6 rounded-full" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="relative">
                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input id="password" type="password" placeholder="Ingresa tu contraseña" className="pl-12 py-6 rounded-full" />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <Link href="#" className="text-sm text-primary hover:underline" style={{color: '#1e2468'}}>
                ¿Olvidaste la contraseña?
              </Link>
            </div>
            <Button type="submit" className="w-full py-6 rounded-full font-bold text-base" asChild style={{backgroundColor: '#3d4ff2'}}>
                <Link href="https://backgroundcheck.mx/" target="_blank">INICIAR SESIÓN</Link>
            </Button>
            <Button variant="outline" className="w-full py-6 rounded-full font-bold text-base bg-white">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.99,34.556,44,29.86,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                INGRESA CON GOOGLE
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

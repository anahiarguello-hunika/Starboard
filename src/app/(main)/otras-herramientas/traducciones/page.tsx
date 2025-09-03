
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { EyeOff } from "lucide-react";

export default function TraduccionesPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)] bg-background">
        <Card className="w-full max-w-sm shadow-none border-0">
            <CardHeader className="text-center space-y-4">
                <CardTitle className="text-3xl font-normal">Inicia sesión en tu cuenta</CardTitle>
                <CardDescription>
                    ¿Aún no tienes una cuenta? <Link href="https://www.deepl.com/es/login" target="_blank" className="text-primary hover:underline">Regístrate</Link>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="email">Correo electrónico</Label>
                        <Input id="email" type="email" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Contraseña</Label>
                         <div className="relative">
                            <Input id="password" type="password" />
                            <EyeOff className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        </div>
                    </div>
                     <Button className="w-full bg-[#0F2B46] hover:bg-[#0F2B46]/90 py-6" asChild>
                        <Link href="https://www.deepl.com/es/login" target="_blank">Iniciar sesión</Link>
                    </Button>
                     <div className="text-center">
                        <Link href="https://www.deepl.com/es/login" target="_blank" className="text-sm text-primary hover:underline">¿Has olvidado tu contraseña?</Link>
                    </div>

                    <div className="border rounded-md p-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                           <div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center">
                                <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                           </div>
                           <span className="text-sm font-semibold">Success!</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="h-6" viewBox="0 0 105 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.84 3.73a3.46 3.46 0 0 0-5.02 0 3.46 3.46 0 0 0 0 5.02l14.48 14.48a3.46 3.46 0 0 0 5.02 0l8.71-8.71a3.46 3.46 0 0 0-5.02-5.02l-6.2 6.2-11.97-11.97z" fill="#F38020"></path>
                                <path d="m39.8 19.46-4.48 4.49a3.46 3.46 0 0 0 0 5.02 3.46 3.46 0 0 0 5.02 0l14.48-14.48a3.46 3.46 0 0 0 0-5.02 3.46 3.46 0 0 0-5.02 0l-8.71 8.71-1.3-1.3z" fill="#F38020"></path>
                                <path d="M46.7 30.6h4.5v-13h-4.5v13zM66.6 22.8c-2.4 0-4.3-1.9-4.3-4.3s1.9-4.3 4.3-4.3 4.3 1.9 4.3 4.3-1.9 4.3-4.3 4.3zm0-6.9c-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6-1.2-2.6-2.6-2.6zm9.2 6.9h-2.8l-3.3-8.4h3l1.9 5.3 1.8-5.3h3l-3.2 8.4zm10-6.9c-1.4 0-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6 2.6-1.2 2.6-2.6-1.1-2.6-2.6-2.6zm-2.5 5.2h-1.6V26h-1.3v-5.2H76v-1.1h5.8v1.1h-1.5v3.4c.5-.4.9-.6 1.5-.6 1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zm11.3 1.7c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6-1.2-2.6-2.6-2.6zm6.3 0c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6-2.6-1.2-2.6-2.6-2.6zm3.3-3.6h1.3v10.8h-1.3v-10.8zm5.1 6.5h3.2v1.1h-4.5v-10.8h1.3v9.7z" fill="#707071"></path>
                                <path d="M86.8 30.6h1.3v-8.2h2.8v-1.1h-4.1v9.3zm8.3-5.2c0 1.4-1.2 2.6-2.6 2.6s-2.6-1.2-2.6-2.6 1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6z" fill="#707071"></path>
                            </svg>
                             <div className="text-[10px] text-muted-foreground leading-tight">
                                <Link href="#" target="_blank" className="hover:underline">Privacy</Link> · <Link href="#" target="_blank" className="hover:underline">Terms</Link>
                            </div>
                        </div>
                    </div>
                     <div className="flex items-center gap-4 my-6">
                        <Separator className="flex-1" />
                        <span className="text-sm text-muted-foreground">También puedes</span>
                        <Separator className="flex-1" />
                    </div>
                     <Button variant="outline" className="w-full bg-gray-100 hover:bg-gray-200 py-6" asChild>
                        <Link href="https://www.deepl.com/es/login" target="_blank">Continuar con inicio de sesión único (SSO)</Link>
                    </Button>
                </form>
            </CardContent>
        </Card>
    </div>
  );
}


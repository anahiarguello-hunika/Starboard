

'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Landmark, Library, Lock, User } from "lucide-react";

const vlexUrl = "https://identity.vlex.com/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fresponse_type%3Dcode%26client_id%3Dvlex-webapp%26redirect_uri%3Dhttps%253A%252F%252Flogin.vlex.com%252Fauth%252FvlexIdentityServer%252Fcallback%26response_mode%3Dquery%26state%3D7fef3659d7a1c69186751d813119a8b8021aa0eb457f24f2%26scope%3Dopenid%2520profile%2520offline_access";

const SocialButton = ({ icon, label, href }: { icon: React.ReactNode, label: string, href: string }) => (
    <Button variant="outline" className="w-full justify-center items-center py-6 text-sm" asChild>
        <Link href={href} target="_blank">
            <div className="flex flex-col items-center gap-2">
                {icon}
                <span>{label}</span>
            </div>
        </Link>
    </Button>
);

export default function InvestigacionesPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-10rem)]">
        <Card className="w-full max-w-4xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl">
            <div className="bg-gradient-to-b from-cyan-500 to-green-400 p-12 flex flex-col justify-center items-center text-white">
                <h1 className="text-6xl font-bold tracking-wider">v<span className="font-light">|</span>lex</h1>
            </div>
            <div className="p-8">
                <Tabs defaultValue="signin">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="signin">SIGN IN</TabsTrigger>
                        <TabsTrigger value="register">REGISTER</TabsTrigger>
                    </TabsList>
                    <TabsContent value="signin" className="mt-8">
                        <form className="space-y-6">
                            <div className="space-y-1">
                                <Label htmlFor="username">Username</Label>
                                <Input id="username" />
                            </div>
                            <div className="space-y-1">
                                <Label htmlFor="password">Password</Label>
                                <Input id="password" type="password" />
                            </div>
                            <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                <Link href={vlexUrl} target="_blank">Sign in</Link>
                            </Button>
                        </form>
                        <div className="text-center my-6 text-sm text-muted-foreground">- or login with -</div>
                         <div className="grid grid-cols-3 gap-2">
                            <SocialButton href={vlexUrl} icon={<Landmark className="h-6 w-6" />} label="Your Institution" />
                             <SocialButton href={vlexUrl} icon={ <svg className="h-6 w-6" viewBox="0 0 21 21"><path fill="#f25022" d="M1 1h9.5v9.5H1z"/><path fill="#00a4ef" d="M1 10.5h9.5V20H1z"/><path fill="#7fba00" d="M10.5 1h9.5v9.5H10.5z"/><path fill="#ffb900" d="M10.5 10.5h9.5V20H10.5z"/></svg>} label="Active Directory" />
                             <SocialButton href={vlexUrl} icon={<svg className="h-6 w-6" viewBox="0 0 24 24"><path fill="currentColor" d="M13.13 13.89L15.9 11.1l2.83 2.79l-2.83 2.8l-2.8-2.8m-2.1-2.08L13.8 9.04l2.8 2.79l-2.79 2.83l-2.8-2.8m-2.1 2.08L6.15 11.1l2.8-2.79l2.83 2.8l-2.8 2.79M12 2a10 10 0 0 0-10 10a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8Z"></path></svg>} label="Open Athens" />
                             <SocialButton href={vlexUrl} icon={<svg className="h-6 w-6" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-2.659-.26-5.192-.744-7.614z"/><path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"/><path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"/><path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.574l6.19 5.238C39.99 34.556 44 29.86 44 24c0-2.659-.26-5.192-.744-7.614z"/></svg>} label="Google" />
                             <SocialButton href={vlexUrl} icon={<svg className="h-6 w-6" viewBox="0 0 24 24"><path fill="#1877F2" d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.69 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/></svg>} label="Facebook" />
                        </div>
                        <div className="text-center mt-6">
                            <Link href={vlexUrl} target="_blank" className="text-sm text-blue-600 hover:underline">Forgotten your password?</Link>
                            <p className="text-xs text-muted-foreground mt-2">By signing in you are accepting our <Link href={vlexUrl} target="_blank" className="text-blue-600 hover:underline">terms of use</Link></p>
                        </div>
                    </TabsContent>
                    <TabsContent value="register">
                        <div className="text-center p-8 text-muted-foreground">Register form coming soon.</div>
                    </TabsContent>
                </Tabs>
            </div>
        </Card>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GoogleIcon } from "@/components/icons/google-icon";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const handleSignIn = async () => {
    await authClient.signIn.social({
      callbackURL: process.env.NEXT_PUBLIC_APP_URL || window.location.origin,
      provider: "google",
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Entrar</CardTitle>

            <CardDescription>Escolha um provedor para continuar.</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <Button
              className="h-14 w-full"
              onClick={handleSignIn}
              variant="outline"
            >
              <GoogleIcon className="size-5" />
              Entrar com Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

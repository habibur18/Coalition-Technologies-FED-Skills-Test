"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { authenticate } from "../actions/action";

// form schema definition for form validation
const formSchema = z.object({
  username: z
    .string()
    .min(4, "Username must be at least 4 characters & max 20")
    .max(20, "Username must be no more than 20 characters"),
  password: z
    .string()
    .min(4, "Password must be at least 4 characters & max 20")
    .max(20, "Password must be no more than 20 characters"),
});

export default function LogInForm() {
  const [isSubmitting, startTransition] = useTransition();
  const [submitError, setSubmitError] = useState("");
  const navigate = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "coalition",
      password: "skills-test",
    },
  });

  const onSubmit = async (data) => {
    setSubmitError("");
    startTransition(async () => {
      try {
        const response = await authenticate(data);
        console.log(response);
        if (response.success) {
          navigate.push("/");
        } else {
          setSubmitError(response.error);
        }
      } catch (error) {
        setSubmitError("An unexpected error occurred. Please try again.");
      }
    });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <Image
            src="/logo.svg"
            alt="logo"
            width={110}
            height={110}
            className="mx-auto mb-4"
          />
          <CardTitle className="text-3xl font-extrabold tracking-tight">
            Log in to your account
          </CardTitle>
          <CardDescription className="text-[#00FFC2] bg-secondary text-lg font-bold p-4 rounded-md shadow-md">
            Just hit the login button and you’ll be redirected to the dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                {...form.register("username")}
                placeholder="Enter your username"
              />
              {form.formState.errors.username && (
                <Alert variant="destructive" className="py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {form.formState.errors.username.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...form.register("password")}
                placeholder="Enter your password"
              />
              {form.formState.errors.password && (
                <Alert variant="destructive" className="py-2">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    {form.formState.errors.password.message}
                  </AlertDescription>
                </Alert>
              )}
            </div>
            {submitError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{submitError}</AlertDescription>
              </Alert>
            )}
            <Button
              type="submit"
              className="w-full bg-[#00FFC2] text-black hover:bg-[#00FFC2]/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

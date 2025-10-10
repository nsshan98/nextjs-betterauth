"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../atoms/form";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchemaType } from "@/zod/auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../atoms/button";
import { Input } from "../atoms/input";
import { GoEye } from "react-icons/go";
import { GoEyeClosed } from "react-icons/go";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/card";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "../atoms/spinner";
import { Separator } from "../atoms/separator";
import SocialAuthComponent from "./social-auth-component";

const LoginComponent = () => {
  const router = useRouter();
  const loginForm = useForm<LoginSchemaType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: LoginSchemaType) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          toast.success("Login successful!");
          router.push("/dashboard");
        },
        onError: (res) => {
          toast.error(res.error?.message);
        },
      }
    );
  };
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you&apos;re done.
          </CardDescription>
        </CardHeader>
        <Form {...loginForm}>
          <form
            onSubmit={loginForm.handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <CardContent className="grid gap-4">
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Email</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-amber-50"
                        placeholder="email@example.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Password</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-amber-50"
                        placeholder="********"
                        type={showPassword ? "text" : "password"}
                        endIcon={
                          showPassword ? (
                            <GoEyeClosed
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          ) : (
                            <GoEye
                              onClick={() => setShowPassword(!showPassword)}
                            />
                          )
                        }
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="pt-2">
              <Button disabled={loginForm.formState.isSubmitting} type="submit">
                {loginForm.formState.isSubmitting ? (
                  <div className="flex items-center gap-2">
                    Authenticating <Spinner />
                  </div>
                ) : (
                  <div>Login</div>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
        <Separator />
        <div className="grid grid-cols-4 gap-2 px-2">
          <SocialAuthComponent />
        </div>
      </Card>
    </div>
  );
};

export default LoginComponent;

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
import { signupSchema, SignupSchemaType } from "@/zod/auth-types";
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
import { Spinner } from "../atoms/spinner";

const SignupComponent = () => {
  const router = useRouter();
  const signupForm = useForm<SignupSchemaType>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    resolver: zodResolver(signupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data: SignupSchemaType) => {
    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success("Account created successfully!");
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
        <Form {...signupForm}>
          <form
            onSubmit={signupForm.handleSubmit(onSubmit)}
            className="space-y-2"
          >
            <CardContent className="grid gap-4">
              <FormField
                control={signupForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Name</FormLabel>
                    <FormControl>
                      <Input
                        className="bg-amber-50"
                        placeholder="email@example.com"
                        type="text"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={signupForm.control}
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
                control={signupForm.control}
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
              <Button
                disabled={signupForm.formState.isSubmitting}
                type="submit"
              >
                {signupForm.formState.isSubmitting ? (
                  <div className="flex items-center gap-2">
                    Signing up <Spinner />
                  </div>
                ) : (
                  <div>Signup</div>
                )}
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default SignupComponent;

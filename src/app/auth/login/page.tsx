import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/atoms/tabs";
import LoginComponent from "@/components/auth/login-component";
import SignupComponent from "@/components/auth/signup-component";
import SocialAuthComponent from "@/components/auth/social-auth-component";

export default function Login() {
  return (
    <div className="mx-auto flex flex-col justify-center min-h-screen w-full max-w-md">
      <Tabs defaultValue="login">
        <TabsList>
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Signup</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginComponent />
        </TabsContent>
        <TabsContent value="signup">
          <SignupComponent />
        </TabsContent>
      </Tabs>
      <div className="mt-6">
        <SocialAuthComponent />
      </div>
    </div>
  );
}

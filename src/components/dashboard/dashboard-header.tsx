import { Button } from "@/components/atoms/button";
import { Separator } from "@/components/atoms/separator";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export function DashboardHeader() {
  const router = useRouter();
  const { data } = authClient.useSession();
  console.log(data);
  return (
    <header className="flex py-2 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Dashboard</h1>
        <div className="ml-auto flex items-center gap-2">
          <p>Hello {data?.user?.name}</p>
          <Button
            variant="destructive"
            size="sm"
            onClick={() =>
              authClient.signOut({
                fetchOptions: {
                  onSuccess: () => {
                    router.push("/auth/login");
                  },
                },
              })
            }
          >
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}

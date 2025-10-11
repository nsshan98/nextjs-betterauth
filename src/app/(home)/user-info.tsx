"use client";
import { Button } from "@/components/atoms/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/atoms/card";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import React from "react";
import { MdVerified } from "react-icons/md";

const UserInfo = () => {
  const user = authClient.useSession();
  console.log(user);
  if (user.isPending){
    return <div>Loading...</div>
  }
  return (
    <div className="w-full p-6 flex justify-center">
      <Card className="">
        <CardContent className="p-3">
          <div className="aspect-square rounded-md bg-gray-100 mb-2">
            <div className="flex items-center justify-center h-full text-muted-foreground text-xs">
              <Image src={user?.data?.user?.image ?? "/image.png"} alt="User Image" width={100} height={100} />
            </div>
          </div>
          <CardTitle className="text-sm mb-1">
                {user?.data?.user?.name}
                {user?.data?.user?.emailVerified && <MdVerified className="text-green-600 inline-block ml-1" />}
          </CardTitle>
          <CardDescription className="text-xs mb-2 line-clamp-2">
            {user?.data?.user?.email}
          </CardDescription>
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold">$199</span>
            <Button size="sm" className="text-xs px-2 py-1 h-7">Add</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
};

export default UserInfo;

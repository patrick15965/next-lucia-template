import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";


export default async function Page() {
  return (
    <Card className="p-5">
      <CardHeader className="p-0 m-0">
        <CardTitle >
          Sign in to Application
        </CardTitle>
      </CardHeader>
      <Separator className="my-4" />
      <CardContent >
        <div className="text-gray-400 ">
          <div className="bg-gray-100 p-2 rounded-sm my-2">
            <p>For development purposes, please sign in with Google</p>
          </div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" disabled />
          <Label htmlFor="password">Password</Label>
          <Input id="password" disabled />
        </div>
        <Separator className="my-4" />
        <Link href="/login/google">
          <Card className="flex space-x-3 p-3">
            <Image src="/google.svg" alt="Google Icon" width={24} height={24} />
            <span>
              Sign in with Google
            </span>
          </Card>
        </Link>
      </CardContent>
    </Card>
  );
}

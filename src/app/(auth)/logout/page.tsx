import { Button } from "@/components/ui/button";
import { SignOutButton } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex h-screen items-center justify-center">
      <SignOutButton>
        <Button className="cursor-pointer">Logout</Button>
      </SignOutButton>
    </div>
  );
}

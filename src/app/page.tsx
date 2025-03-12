"use client";

import { useState, useEffect } from "react";
// import { useUser } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Copy } from "lucide-react";
import { usePathname } from "next/navigation";
import axios from 'axios'
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import Header from "@/components/ui/Header";

export default function Home() {
  // const { isSignedIn } = useUser();
  const [url, setUrl] = useState("");
  const [shortenedId, setShortenedId] = useState("");
  const [fullShortenedUrl, setFullShortenedUrl] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    if (shortenedId) {
      setFullShortenedUrl(`${window.location.origin}${pathname}${shortenedId}`);
    }
  }, [shortenedId, pathname]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}`, { url }, {
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200 || response.status === 201) {
      setShortenedId(response.data.id);
      toast.success("URL shortened successfully!");
    }
  };

const copyToClipboard = () => {
  if (fullShortenedUrl) {
    navigator.clipboard.writeText(fullShortenedUrl);
    toast.success("Copied to clipboard!");
  }
};

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center">
        <section className="w-full max-w-2xl px-4 md:px-6 text-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Shorten Your URLs
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Make your links more manageable and track their performance with our URL shortener.
              </p>
            </div>

            {/* URL Shortener Form */}
            <div className="w-full space-y-4">
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex w-full items-center space-x-2">
                  <Input
                    type="url"
                    placeholder="Enter your long URL"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    required
                    className="flex-1 h-12 px-4 !text-lg"
                  />
                  <Button type="submit" className="cursor-pointer h-12 px-6 text-lg">Shorten</Button>
                </div>
              </form>

              {shortenedId && (
                <Card className="mt-6">
                  <CardContent className="flex items-center justify-between p-4">
                    <p className="text-sm font-medium text-muted-foreground truncate">{fullShortenedUrl}</p>
                    <Button size="icon" variant="ghost" className="cursor-pointer" onClick={copyToClipboard}>
                      <Copy className="h-4 w-4" />
                      <span className="sr-only">Copy</span>
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

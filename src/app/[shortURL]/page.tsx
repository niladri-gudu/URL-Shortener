"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function DestinationUrl() {
  const { shortURL } = useParams();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!shortURL) {
      setError("Invalid or missing URL");
      return;
    }

    if (!process.env.NEXT_PUBLIC_BACKEND_URL) {
      setError("Backend URL not configured.");
      console.error("NEXT_PUBLIC_BACKEND_URL is not defined in environment variables.");
      return;
    }

    try {
      window.location.href = process.env.NEXT_PUBLIC_BACKEND_URL + shortURL;
    } catch (err) {
      console.error("Redirection error:", err);
      setError("Something went wrong. Unable to redirect.");
    }
  }, [shortURL]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      {error ? <p className="text-red-500">{error}</p> : <p>Redirecting...</p>}
    </div>
  );
}

"use client"

import { Button } from "@/components/ui/button"
import { signInWithOAuth } from "@/lib/supabase"
import { useState } from "react"
import { FaGoogle, FaGithub, FaLinkedin, FaApple } from "react-icons/fa"

interface OAuthButtonsProps {
  mode: "signin" | "signup"
  onSuccess?: () => void
  onError?: (error: Error) => void
}

export function OAuthButtons({ mode, onSuccess, onError }: OAuthButtonsProps) {
  const [isLoading, setIsLoading] = useState<string | null>(null)

  const handleOAuthSignIn = async (provider: "google" | "github" | "linkedin" | "apple") => {
    try {
      setIsLoading(provider)
      const { error } = await signInWithOAuth(provider)

      if (error) {
        throw error
      }

      // The OAuth flow will redirect the user, so we don't need to call onSuccess here
    } catch (error) {
      console.error(`Error signing in with ${provider}:`, error)
      if (onError && error instanceof Error) {
        onError(error)
      }
    } finally {
      setIsLoading(null)
    }
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Button
        variant="outline"
        onClick={() => handleOAuthSignIn("google")}
        disabled={!!isLoading}
        className="flex items-center justify-center"
      >
        {isLoading === "google" ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
        ) : (
          <FaGoogle className="mr-2 h-4 w-4 text-red-500" />
        )}
        <span>{mode === "signin" ? "Sign in" : "Sign up"} with Google</span>
      </Button>

      <Button
        variant="outline"
        onClick={() => handleOAuthSignIn("github")}
        disabled={!!isLoading}
        className="flex items-center justify-center"
      >
        {isLoading === "github" ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
        ) : (
          <FaGithub className="mr-2 h-4 w-4" />
        )}
        <span>GitHub</span>
      </Button>

      <Button
        variant="outline"
        onClick={() => handleOAuthSignIn("linkedin")}
        disabled={!!isLoading}
        className="flex items-center justify-center"
      >
        {isLoading === "linkedin" ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
        ) : (
          <FaLinkedin className="mr-2 h-4 w-4 text-blue-600" />
        )}
        <span>LinkedIn</span>
      </Button>

      <Button
        variant="outline"
        onClick={() => handleOAuthSignIn("apple")}
        disabled={!!isLoading}
        className="flex items-center justify-center"
      >
        {isLoading === "apple" ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-600 border-t-transparent" />
        ) : (
          <FaApple className="mr-2 h-4 w-4" />
        )}
        <span>Apple</span>
      </Button>
    </div>
  )
}


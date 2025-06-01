"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { LoginForm } from "./login-form"
import { RegisterForm } from "./register-form"

interface AuthModalProps {
  open: boolean
  onClose: () => void
}

export function AuthModal({ open, onClose }: AuthModalProps) {
  const [isLogin, setIsLogin] = useState(true)

  const handleSuccess = () => {
    onClose()
  }

  const toggleMode = () => {
    setIsLogin(!isLogin)
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold text-gray-800">
            {isLogin ? "Prihlásenie" : "Registrácia"}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          {isLogin ? <LoginForm onSuccess={handleSuccess} /> : <RegisterForm onSuccess={handleSuccess} />}
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">{isLogin ? "Nemáte účet?" : "Už máte účet?"}</p>
          <Button
            variant="link"
            onClick={toggleMode}
            className="text-amber-600 hover:text-amber-700 font-medium p-0 h-auto"
          >
            {isLogin ? "Zaregistrujte sa" : "Prihláste sa"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

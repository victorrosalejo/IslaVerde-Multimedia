"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function PostcardForm() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: "",
    message: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const postcardImages = [
    { value: "playa", label: "Playa Principal" },
    { value: "cascada", label: "Cascada Natural" },
    { value: "pueblo", label: "Pueblo Colorido" },
    { value: "festival", label: "Festival Cultural" },
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, image: value }))

    // Clear error when user selects
    if (errors.image) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors.image
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Por favor, introduce tu nombre"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Por favor, introduce tu correo electrónico"
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Por favor, introduce un correo electrónico válido"
    }

    if (!formData.image) {
      newErrors.image = "Por favor, selecciona una imagen"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Por favor, escribe un mensaje"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true)
        toast({
          title: "Postal enviada",
          description: "Tu postal ha sido enviada con éxito.",
        })
      }, 1000)
    } else {
      // Focus on the first field with an error
      const firstErrorField = Object.keys(errors)[0]
      const element = document.querySelector(`[name="${firstErrorField}"]`)
      if (element) {
        ;(element as HTMLElement).focus()
      }
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      image: "",
      message: "",
    })
    setErrors({})
    setSubmitted(false)
  }

  return (
    <main id="main-content" className="min-h-screen py-12">
      <div className="container px-4 md:px-6 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Envía una Postal</h1>

        {submitted ? (
          <Card>
            <CardHeader>
              <CardTitle className="text-center text-emerald-600">
                <CheckCircle2 className="h-12 w-12 mx-auto mb-2" aria-hidden="true" />
                ¡Postal Enviada!
              </CardTitle>
              <CardDescription className="text-center text-lg">Tu postal ha sido enviada con éxito</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">
                Gracias por compartir tus recuerdos de Isla Verde. Tu postal ha sido enviada a la dirección de correo
                electrónico proporcionada.
              </p>
              <Button onClick={resetForm} className="bg-emerald-600 hover:bg-emerald-700">
                Enviar otra postal
              </Button>
            </CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>Crea tu Postal</CardTitle>
              <CardDescription>Comparte tus recuerdos de Isla Verde con tus seres queridos</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="text-base">
                      Nombre <span aria-hidden="true">*</span>
                      <span className="sr-only">obligatorio</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription id="name-error">{errors.name}</AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="email" className="text-base">
                      Correo Electrónico <span aria-hidden="true">*</span>
                      <span className="sr-only">obligatorio</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription id="email-error">{errors.email}</AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="image-select" className="text-base">
                      Selecciona una Imagen <span aria-hidden="true">*</span>
                      <span className="sr-only">obligatorio</span>
                    </Label>
                    <Select value={formData.image} onValueChange={handleSelectChange}>
                      <SelectTrigger
                        id="image-select"
                        aria-required="true"
                        aria-invalid={!!errors.image}
                        aria-describedby={errors.image ? "image-error" : undefined}
                      >
                        <SelectValue placeholder="Selecciona una imagen" />
                      </SelectTrigger>
                      <SelectContent>
                        {postcardImages.map((image) => (
                          <SelectItem key={image.value} value={image.value}>
                            {image.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.image && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription id="image-error">{errors.image}</AlertDescription>
                      </Alert>
                    )}
                  </div>

                  <div className="grid gap-3">
                    <Label htmlFor="message" className="text-base">
                      Mensaje <span aria-hidden="true">*</span>
                      <span className="sr-only">obligatorio</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <Alert variant="destructive" className="py-2">
                        <AlertCircle className="h-4 w-4" />
                        <AlertDescription id="message-error">{errors.message}</AlertDescription>
                      </Alert>
                    )}
                  </div>
                </div>

                <CardFooter className="flex justify-end px-0 pt-6">
                  <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                    Enviar Postal
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        )}
      </div>
    </main>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"

interface ElectionFormProps {
  onCancel: () => void
  existingData?: {
    title: string
    description: string
    startDate: string
    endDate: string
    registrationDeadline: string
  }
}

export function ElectionForm({ onCancel, existingData }: ElectionFormProps) {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    title: existingData?.title || "",
    description: existingData?.description || "",
    startDate: existingData?.startDate || "",
    endDate: existingData?.endDate || "",
    registrationDeadline: existingData?.registrationDeadline || "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "Election Created",
        description: "The election has been successfully created.",
      })
      onCancel()
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="title">Election Title *</Label>
          <Input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter election title"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="description">Description *</Label>
          <Textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter election description"
            required
            rows={3}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate">Start Date *</Label>
            <Input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate">End Date *</Label>
            <Input id="endDate" name="endDate" type="date" value={formData.endDate} onChange={handleChange} required />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="registrationDeadline">Registration Deadline *</Label>
          <Input
            id="registrationDeadline"
            name="registrationDeadline"
            type="date"
            value={formData.registrationDeadline}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting} className="bg-emerald-600 hover:bg-emerald-700">
          {isSubmitting ? "Creating..." : existingData ? "Update Election" : "Create Election"}
        </Button>
      </div>
    </form>
  )
}


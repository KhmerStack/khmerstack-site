"use client"

import React from "react"
import { useState } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { useI18n } from "@/lib/i18n-context"

export function JoinRequestForm() {
  const { t } = useI18n()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github: "",
    skills: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const response = await fetch("/api/join-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", github: "", skills: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center gap-3 text-[#34d399]">
        <CheckCircle size={24} />
        <div>
          <p className="font-bold">{t("form.success")}</p>
          <p className="text-sm text-[#9ca3af]">{t("form.success_desc")}</p>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm text-[#e5e7eb] mb-1.5">
            {t("form.name")} <span className="text-[#fb7185]">*</span>
          </label>
          <input
            type="text"
            id="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:border-[#60a5fa] transition-colors"
            placeholder={t("form.name")}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-[#e5e7eb] mb-1.5">
            {t("form.email")} <span className="text-[#fb7185]">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:border-[#60a5fa] transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="github" className="block text-sm text-[#e5e7eb] mb-1.5">
          {t("form.github")}
        </label>
        <input
          type="text"
          id="github"
          value={formData.github}
          onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:border-[#60a5fa] transition-colors"
          placeholder="@username"
        />
      </div>

      <div>
        <label htmlFor="skills" className="block text-sm text-[#e5e7eb] mb-1.5">
          {t("form.skills")}
        </label>
        <input
          type="text"
          id="skills"
          value={formData.skills}
          onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:border-[#60a5fa] transition-colors"
          placeholder={t("form.skills_placeholder")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-[#e5e7eb] mb-1.5">
          {t("form.message")} <span className="text-[#fb7185]">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-2.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.10)] text-[#e5e7eb] placeholder-[#9ca3af] focus:outline-none focus:border-[#60a5fa] transition-colors resize-none"
          placeholder={t("form.message_placeholder")}
        />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 text-[#fb7185] text-sm">
          <AlertCircle size={16} />
          <span>{t("form.error")}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-green inline-flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
            {t("form.sending")}
          </>
        ) : (
          <>
            <Send size={16} />
            {t("form.submit")}
          </>
        )}
      </button>
    </form>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Zap, AlertCircle } from "lucide-react"

const PROMPTS = [
  {
    id: 18,
    title: "Prompt 18",
    description: "Launch AI prompt session",
    icon: "🚀",
  },
  {
    id: 19,
    title: "Prompt 19",
    description: "Launch AI prompt session",
    icon: "💡",
  },
  {
    id: 20,
    title: "Prompt 20",
    description: "Launch AI prompt session",
    icon: "⚡",
  },
  {
    id: 21,
    title: "Prompt 21",
    description: "Launch AI prompt session",
    icon: "🎯",
  },
  {
    id: 22,
    title: "Prompt 22",
    description: "Launch AI prompt session",
    icon: "🔮",
  },
]

const UID = "396"
const BASE_URL = "https://aiskillshouse.com/student/qr-mediator.html"

export default function Home() {
  const [popupsEnabled, setPopupsEnabled] = useState(true)
  const [launchingAll, setLaunchingAll] = useState(false)

  useEffect(() => {
    checkPopupPermission()
  }, [])

  const checkPopupPermission = () => {
    const testWindow = window.open("about:blank", "_blank", "width=1,height=1,left=9999,top=9999")
    if (!testWindow || testWindow.closed) {
      setPopupsEnabled(false)
    } else {
      testWindow.close()
      setPopupsEnabled(true)
    }
  }

  const launchPrompt = (promptId: number) => {
    if (!popupsEnabled) {
      checkPopupPermission()
      return
    }
    const url = `${BASE_URL}?uid=${UID}&promptId=${promptId}`
    window.open(url, "_blank")
  }

  const launchAllPrompts = () => {
    if (!popupsEnabled) {
      checkPopupPermission()
      return
    }

    setLaunchingAll(true)
    PROMPTS.forEach((prompt, index) => {
      setTimeout(() => {
        launchPrompt(prompt.id)
      }, index * 500)
    })

    setTimeout(() => setLaunchingAll(false), PROMPTS.length * 500)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center font-bold text-lg">
              GSA
            </div>
            <h1 className="text-2xl font-bold tracking-tight">Prompt Launcher</h1>
          </div>
          <div className="text-sm text-slate-400">
            {popupsEnabled ? (
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                Pop-ups enabled
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Pop-ups blocked
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400">
            Launch AI Prompts Instantly
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
            Open multiple AI prompt sessions at once. Each prompt loads in a new window for seamless multitasking.
          </p>

          {/* Main Launch Button */}
          <button
            onClick={launchAllPrompts}
            disabled={!popupsEnabled || launchingAll}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
          >
            <Zap className="w-6 h-6" />
            Launch All Prompts
          </button>

          {/* Warning */}
          {!popupsEnabled && (
            <div className="mt-6 inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/30 rounded-lg px-5 py-3 text-amber-200">
              <AlertCircle className="w-5 h-5" />
              <span>Pop-ups are blocked. Enable them in your browser settings to launch prompts.</span>
            </div>
          )}
        </div>

        {/* Prompts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {PROMPTS.map((prompt) => (
            <button
              key={prompt.id}
              onClick={() => launchPrompt(prompt.id)}
              disabled={!popupsEnabled}
              className="group relative overflow-hidden rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 flex flex-col items-center justify-center text-center gap-3"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-br from-cyan-400 to-blue-500 transition-opacity duration-300" />

              <div className="relative z-10 flex flex-col items-center gap-3">
                <span className="text-4xl">{prompt.icon}</span>
                <h3 className="font-bold text-lg text-white">{prompt.title}</h3>
                <p className="text-sm text-slate-400">{prompt.description}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 rounded-xl border border-slate-700 bg-slate-800/30 backdrop-blur p-8">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-2xl">ℹ️</span>
            How It Works
          </h3>
          <ul className="space-y-3 text-slate-300 text-sm">
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">1.</span>
              <span>Click "Launch All Prompts" or individual prompt cards</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">2.</span>
              <span>Each prompt opens in a new browser window</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">3.</span>
              <span>Windows open sequentially (500ms apart) to prevent blocking</span>
            </li>
            <li className="flex gap-3">
              <span className="text-cyan-400 font-bold">4.</span>
              <span>If pop-ups are blocked, enable them in your browser toolbar</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}

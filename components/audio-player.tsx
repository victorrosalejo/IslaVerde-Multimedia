"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface AudioPlayerProps {
  title: string
  description: string
}

export function AudioPlayer({ title, description }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [volume, setVolume] = useState(0.7)
  const [isMuted, setIsMuted] = useState(false)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    // Simulate audio duration since we don't have a real audio file
    setDuration(180) // 3 minutes in seconds

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  const togglePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)

    if (!prevValue) {
      if (audioRef.current) {
        audioRef.current.play()
        animationRef.current = requestAnimationFrame(whilePlaying)
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause()
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current)
        }
      }
    }
  }

  const whilePlaying = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
  }

  const changeRange = (newValue: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newValue[0]
      setCurrentTime(newValue[0])
    }
  }

  const changeVolume = (newValue: number[]) => {
    const newVolume = newValue[0]
    setVolume(newVolume)

    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }

    if (newVolume === 0) {
      setIsMuted(true)
    } else {
      setIsMuted(false)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)

    if (audioRef.current) {
      audioRef.current.muted = !isMuted
    }
  }

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
    const sec = Math.floor(seconds % 60)
    return `${min}:${sec < 10 ? "0" : ""}${sec}`
  }

  return (
    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4">
      <div className="sr-only" aria-live="polite">
        {isPlaying ? `Reproduciendo: ${title}` : `En pausa: ${title}`}
      </div>

      {/* Hidden audio element - in a real implementation, this would have a src */}
      <audio ref={audioRef} preload="metadata" aria-hidden="true">
        <p>Tu navegador no soporta el elemento de audio.</p>
      </audio>

      <div className="mb-2">
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <Button
          variant="outline"
          size="icon"
          onClick={togglePlayPause}
          aria-label={isPlaying ? "Pausar" : "Reproducir"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Play className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>

        <div className="flex-1">
          <Slider
            value={[currentTime]}
            max={duration}
            step={1}
            onValueChange={changeRange}
            aria-label="Progreso de audio"
            aria-valuetext={`${formatTime(currentTime)} de ${formatTime(duration)}`}
          />
        </div>

        <div className="text-sm tabular-nums">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" onClick={toggleMute} aria-label={isMuted ? "Activar sonido" : "Silenciar"}>
          {isMuted ? (
            <VolumeX className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
        </Button>

        <div className="w-24">
          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.01}
            onValueChange={changeVolume}
            aria-label="Volumen"
            aria-valuetext={`Volumen ${Math.round(volume * 100)}%`}
          />
        </div>
      </div>
    </div>
  )
}

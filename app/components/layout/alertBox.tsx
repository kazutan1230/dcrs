"use client"

import type { Alert } from "@/app/interfaces/alert"
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"
import type React from "react"
import { createContext, useRef, useState } from "react"

export const AlertContext = createContext<
  React.Dispatch<React.SetStateAction<Alert>>
>(() => {
  return
})

export function AlertBox({
  children,
}: Readonly<{
  children: React.ReactNode
}>): React.JSX.Element {
  const ref: React.RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null)
  const alertBox: HTMLDivElement = ref.current as HTMLDivElement
  const [alert, setAlert] = useState<Alert>({
    eventType: "",
    message: "",
  })

  function CloseAlert() {
    const timeout = setTimeout(() => {
      setAlert({ eventType: "", message: "" })
    }, 1500)
    alertBox.classList.remove("fade-in-alert")
    alertBox.classList.add("fade-out-alert")
    return () => window.clearTimeout(timeout)
  }

  return (
    <AlertContext.Provider value={setAlert}>
      <div
        ref={ref}
        className={`toast toast-top toast-center z-10 ${
          alert.eventType && alert.message ? "fade-in-alert" : "hidden"
        }`}
      >
        <div
          role="alert"
          className={`alert shadow-lg ${
            alert.eventType === "error" ? "alert-error" : "alert-info"
          }`}
        >
          {alert.eventType === "error" ? (
            <ExclamationCircleIcon className="size-6 text-info" />
          ) : (
            <CheckCircleIcon className="size-6 text-warning" />
          )}
          <span>{alert.message}</span>
          <button
            type="button"
            className="btn btn-sm flex-nowrap"
            onClick={() => CloseAlert()}
          >
            <XMarkIcon className="size-6" />
            閉じる
          </button>
        </div>
      </div>
      {children}
    </AlertContext.Provider>
  )
}

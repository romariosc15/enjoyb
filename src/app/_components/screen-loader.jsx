"use client"

import { useEffect, useState } from "react";
export function ScreenLoader() {
  let [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 750)
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <span className="w-6 h-6 animate-ping absolute inline-flex rounded-full bg-emerald-400 opacity-75"></span>
      </div>
    )
  }
  return undefined;
}
"use client"

import { Dithering } from "@paper-design/shaders-react"
import Link from "next/link"

export default function ResumePage() {
  return (
    <div className="relative min-h-screen overflow-hidden flex">
      <div className="w-1/2 p-8 font-mono relative z-10 bg-black text-white">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-lg font-normal mb-8">akhil anand</h1>
          <div className="mb-8">
            <h3 className="text-lg font-normal">Student | Researcher</h3>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-12 space-y-1">
          <div className="flex">
            <a 
              href="https://labs.engineering.asu.edu/mps-lab/person/akhilanand/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-20 hover:underline"
            >
              MPS Labs
            </a>
            <span className="mx-2">Intern</span>
            <span className="mx-4">January 2025 → ....</span>
          </div>
          
          <div className="flex">
            <span className="w-20">Newfound Systems</span>
            <span className="mx-2">Intern</span>
            <span className="mx-4">December 2023 → ....</span>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="absolute bottom-8 left-8">
          <div className="flex space-x-4 text-lg font-mono">
            <a href="https://x.com/_kel404" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://github.com/akhil-40409" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/akhil-a-576b56288/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://scholar.google.com/citations?user=tdZcFpoAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
              Scholar
            </a>
            <Link href="/blog">Blog</Link>
          </div>  
        </div>
      </div>

      <div className="w-1/2 relative">
        <Dithering
          style={{ height: "100%", width: "100%" }}
          colorBack="hsl(0, 0%, 0%)"
          colorFront="#FFFFFF"
          shape="warp"
          type="4x4"
          pxSize={3}
          offsetX={0}
          offsetY={0}
          scale={0.8}
          rotation={0}
          speed={0.1}
        />
      </div>
    </div>
  )
}

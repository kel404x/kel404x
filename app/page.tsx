import { Mail } from 'lucide-react'
import Link from "next/link"

import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from '../components/theme-toggle'

export default function Page() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:py-12 lg:py-16">
      <header className="mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-bold">
        <Link href = "https://x.com/_kel404"  target="_blank"> <div className="text-center sm:text-left">kel404</div> </Link>
         
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <ThemeToggle />
            <span className="text-sm">12-19-2024</span>
          </div>
        </div>
        <Separator className="my-4 bg-zinc-200 dark:bg-zinc-700" />
        <div className="flex flex-col sm:flex-row justify-between items-center">
         
          <span className="text-sm">v1.2.0</span>
        </div>
      </header>

      <main className="space-y-16">
        <section id="about">
          <h2 className="mb-4 font-bold text-xl">ABOUT</h2>
          <div className="grid gap-4">
            <p className="leading-relaxed text-balance">
            Hello, I am Kel. I like building stuff. Lately, I have been working with Solidity and JavaScript to bring some of ideas to life.

            </p>
            <p className="leading-relaxed text-balance">
            When not coding, I usually read about history or philosophy, scroll through random things online, produce music, or sometimes write a blog post.
            </p>
          </div>
        </section>

        <section id="projects">
          <h2 className="mb-4 font-bold text-xl">PROJECTS</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded border border-zinc-200 dark:border-zinc-700 p-4">
              <h3 className="mb-2 font-bold">Lang-x-ai</h3>
              <p className="mb-4 text-sm text-balance">Created a programming language with functional programming principles and integrated prompt engineering to generate code in multiple languages.</p>
              <Link href = "https://github.com/lang-x-ai/lang-x-ai"> <div className="text-sm text-zinc-600 dark:text-zinc-400">→ github repo</div>
              </Link>
            </div>
            <div className="rounded border border-zinc-200 dark:border-zinc-700 p-4">
              <h3 className="mb-2 font-bold">Nimbus</h3>
              <p className="mb-4 text-sm text-balance">Built an application where users can connect their wallets and view their NFTs.</p>
              <Link href = "https://github.com/kel404x/nimbus.git"> <div className="text-sm text-zinc-600 dark:text-zinc-400">→ github repo </div>
              </Link>
            </div>
          </div>
        </section>

        <section id="blog">
          <h2 className="mb-4 font-bold text-xl">BLOG</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <article className="grid gap-1">
              <Link href="/blog/prompt-engineering-within-a-functional-oriented-programming-language" className="font-bold hover:underline">
              Prompt Engineering within a functional-oriented programming language
              </Link>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">12-19-2024</p>
            </article>
          </div>
        </section>

        <section id="social">
          <h2 className="mb-4 font-bold text-xl">SOCIAL</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://github.com/kel404x"
              className="flex items-center gap-2 text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://x.com/_kel404"
              className="flex items-center gap-2 text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              X
            </a>
            <a
              href="mailto:kel.404x@gmail.com"
              className="flex items-center gap-2 text-sm hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
      href="https://buymeacoffee.com/kel404"
      className="flex items-center gap-2 text-sm hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      Buy Me a Coffee
    </a>
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center text-sm text-zinc-600 dark:text-zinc-400">
        <Separator className="mb-8 bg-zinc-200 dark:bg-zinc-700" />
        <p className="pb-8">404</p>
      </footer>
    </div>
  )
}


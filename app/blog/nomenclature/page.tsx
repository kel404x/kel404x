import Link from "next/link"

export default function NomenclaturePage() {
  return (
    <div className="min-h-screen p-8 font-mono bg-black text-white">
      <div className="max-w-xl">
        <Link href="/blog" className="hover:underline">
          ← back
        </Link>

        <h1 className="text-lg font-normal mt-8 mb-2">Nomenclature</h1>
        <p className="text-white/50 mb-12">Jan 18th 2025</p>

        <article className="space-y-6 leading-relaxed">
          <p className="italic">
            &ldquo;the devising or choosing of names for things, especially in a science or other
            discipline.&rdquo;
          </p>

          <p>I dont know why I named it Nomenclature, it sounds cool.</p>

          <ol className="list-decimal list-inside space-y-1">
            <li>Brazilian jiu-jitsu</li>
            <li>Switch to online</li>
            <li>Research Lab</li>
            <li>Journalling &amp; Philosophy</li>
          </ol>

          <p>
            I started going to Brazilian jiu-jitsu (BJJ), and honestly, it feels super important
            for personal growth. It&apos;s helping me stay calm in stressful situations, manage my
            anxiety and temper, and just be more alert overall. Plus, a lot of people I admire, like
            Lex Fridman and Mark Zuckerberg, are into BJJ too. I mean, there&apos;s nothing quite
            like being choked out to teach you discipline and self-control. BJJ feels like the
            discipline I need right now.
          </p>

          <p>
            The only downside? It&apos;s pricey, and I&apos;m not sure I can afford next
            month&apos;s payment. I&apos;ve been going back and forth on it for days, but honestly,
            I&apos;ll worry about it later. I&apos;ve got until February 9th to figure it out.
          </p>

          <p>
            I&apos;m in my sophomore year now and decided to switch to online classes as an
            international student. I live about 10 minutes from campus, so I still go there
            occasionally to get work done. I might switch back eventually, but that&apos;s not
            something I need to stress about right now.
          </p>

          <p>
            On another note, I reached out to a professor at my university about this LLM language
            I&apos;m trying to build. After weeks of waiting, I finally got a response and had a
            sort of interview. He assigned me to research MLIR, which is an AI compiler focused on
            optimizing machine code for specific hardware. There&apos;s a ton of reading ahead, but
            I&apos;m excited to dive in. Still, holy crap, it&apos;s a lot.
          </p>

          <p>
            Also, I spent $30 on a journal and a Pilot G-2 pen. Was it worth it? Maybe. I&apos;ve
            started journaling and jotting down anything I find intriguing. I even got obsessed with
            philosophy for a week—watched a bunch of Harvard and Yale lectures. It&apos;s calmed
            down now, as usual, but I still want to read and write more. Wishing isn&apos;t gonna
            cut it, though—I&apos;ve gotta actually put in the work. So yeah, I&apos;m gonna do just
            that: read more and write more.
          </p>
        </article>
      </div>
    </div>
  )
}

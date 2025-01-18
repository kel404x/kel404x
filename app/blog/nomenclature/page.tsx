import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function BlogPost() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-8 md:py-12 lg:py-16">
      <Link href="/" className="inline-flex items-center text-sm hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>
      <article className="prose prose-zinc dark:prose-invert prose-sm sm:prose-base">
        <h1 className="text-2xl font-bold mb-4">Nomenclature</h1>
        <p className="italic mb-4">“The devising or choosing of names for things, especially in a science or other discipline.”</p>
        <p className="mb-4">I don’t know why I named it Nomenclature—it just sounds cool.</p>
        <ul className="mb-4 list-disc pl-6">
          <li>Brazilian jiu-jitsu</li>
          <li>Switch to online</li>
          <li>Research Lab</li>
          <li>Journaling & Philosophy</li>
        </ul>
        <h2 className="text-xl font-semibold mb-4">Brazilian Jiu-Jitsu</h2>
        <p className="mb-4">
          I started going to Brazilian jiu-jitsu (BJJ), and honestly, it feels super important for personal growth. It’s
          helping me stay calm in stressful situations, manage my anxiety and temper, and just be more alert overall.
          Plus, a lot of people I admire, like Lex Fridman and Mark Zuckerberg, are into BJJ too. I mean, there’s
          nothing quite like being choked out to teach you discipline and self-control.
        </p>
        <p className="mb-4">
          The only downside? It’s pricey, and I’m not sure I can afford next month’s payment. I’ve been going back and
          forth on it for days, but honestly, I’ll worry about it later. I’ve got until February 9th to figure it out.
        </p>
        <h2 className="text-xl font-semibold mb-4">Switch to Online</h2>
        <p className="mb-4">
          I’m in my sophomore year now and decided to switch to online classes as an international student. I live
          about 10 minutes from campus, so I still go there occasionally to get work done. I might switch back
          eventually, but that’s not something I need to stress about right now.
        </p>
        <h2 className="text-xl font-semibold mb-4">Research Lab</h2>
        <p className="mb-4">
          I reached out to a professor at my university about this LLM language I’m trying to build. After weeks of
          waiting, I finally got a response and had a sort of interview. He assigned me to research MLIR, which is an AI
          compiler focused on optimizing machine code for specific hardware. There’s a ton of reading ahead, but I’m
          excited to dive in. Still, holy crap, it’s a lot.
        </p>
        <h2 className="text-xl font-semibold mb-4">Journaling & Philosophy</h2>
        <p className="mb-4">
          I spent $30 on a journal and a Pilot G-2 pen. Was it worth it? Maybe. I’ve started journaling and jotting down
          anything I find intriguing. I even got obsessed with philosophy for a week—watched a bunch of Harvard and
          Yale lectures. It’s calmed down now, as usual, but I still want to read and write more. Wishing isn’t gonna cut
          it, though—I’ve gotta actually put in the work. So yeah, I’m gonna do just that: read more and write more.
        </p>
      </article>
    </div>
  );
}

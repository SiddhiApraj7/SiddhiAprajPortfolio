import { CareerCurve } from "./components/CareerCurve";
import { EducationBlock } from "./components/EducationBlock";
import { ExperimentLog } from "./components/ExperimentLog";
import { InfoBox } from "./components/InfoBox";
import { NetworkGraph } from "./components/NetworkGraph";
import type { CellDef } from "./components/types";
import {
  about,
  contact,
  education,
  experience,
  projects,
  skillCategories,
  skillLinks,
  skillNodes,
} from "./data/content";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-[var(--color-ink-line)] px-2.5 py-0.5 text-xs text-[var(--color-cyan)]">
      {children}
    </span>
  );
}

function SectionHeader({ index, slug, children }: { index: string; slug: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-mono text-base text-[var(--color-cyan)]">
        ## {index} · {slug}
      </p>
      <p className="mt-1 text-sm text-[var(--color-paper-dim)]">{children}</p>
    </div>
  );
}

function SubHeader({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-[var(--color-paper-dim)]">
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: color }} />
      {children}
    </p>
  );
}

function AboutOutput() {
  return (
    <div className="space-y-3 rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-output)] p-4">
      <p className="text-sm text-[var(--color-paper-dim)]">
        {about.name} · {about.location}
      </p>
      {about.bio.map((p, i) => (
        <p key={i} className="text-sm leading-relaxed text-[var(--color-paper)]">
          {p}
        </p>
      ))}
      <div className="flex flex-wrap gap-2 pt-1">
        {about.openTo.map((r) => (
          <Chip key={r}>{r}</Chip>
        ))}
      </div>
    </div>
  );
}

function ContactOutput() {
  return (
    <div className="flex flex-wrap gap-3 rounded-md border border-[var(--color-ink-line)] bg-[var(--color-ink-output)] p-4 font-mono text-sm">
      <a href={`mailto:${contact.email}`} className="text-[var(--color-cyan)] hover:underline">
        {contact.email}
      </a>
      <span className="text-[var(--color-ink-line)]">|</span>
      <a
        href={contact.github}
        target="_blank"
        rel="noreferrer"
        className="text-[var(--color-paper)] hover:text-[var(--color-cyan)]"
      >
        github ↗
      </a>
      <span className="text-[var(--color-ink-line)]">|</span>
      <a
        href={contact.linkedin}
        target="_blank"
        rel="noreferrer"
        className="text-[var(--color-paper)] hover:text-[var(--color-cyan)]"
      >
        linkedin ↗
      </a>
      <span className="text-[var(--color-ink-line)]">|</span>
      <a href={contact.resumeUrl} target="_blank" rel="noreferrer" className="text-[var(--color-magenta)] hover:underline">
        resume ↗
      </a>
    </div>
  );
}

const mlProjects = projects.filter((p) => p.category === "ml");
const softwareProjects = projects.filter((p) => p.category === "fullstack");

export const cells: CellDef[] = [
  {
    id: "intro",
    kind: "markdown",
    content: (
      <div>
        <h1 className="text-2xl font-semibold text-[var(--color-paper)] sm:text-3xl">
          {about.name}{" "}
          <span className="align-middle font-mono text-sm font-normal text-[var(--color-paper-dim)]">
            ({about.pronouns})
          </span>
        </h1>
        <p className="mt-1 font-mono text-sm text-[var(--color-cyan)]">{about.role}</p>
        <p className="mt-2 text-[var(--color-paper-dim)]">{about.tagline}</p>
        <InfoBox id="run-hint">
          click <span className="text-[var(--color-cyan)]">▶ Run All</span> above, or run any cell yourself via its{" "}
          <span className="text-[var(--color-cyan)]">In [ ]:</span> to see what it does
        </InfoBox>
      </div>
    ),
  },
  {
    id: "about-header",
    kind: "markdown",
    sectionId: "about",
    content: (
      <SectionHeader index="01" slug="about_me">
        A <span className="text-[var(--color-cyan)]">print()</span> before the deep dive — who's behind this
        notebook.
      </SectionHeader>
    ),
  },
  {
    id: "about",
    kind: "code",
    code: `from profile import Engineer\n\nme = Engineer(\n    name="Siddhi Apraj",\n    based_in="Pittsburgh, PA",\n)\n\nprint(me.summary())`,
    runningLabel: "loading profile...",
    output: <AboutOutput />,
  },
  {
    id: "skills-header",
    kind: "markdown",
    sectionId: "skills",
    content: (
      <div>
        <SectionHeader index="02" slug="the_stack">
          This is an actual neural network — layers are skill categories, edges are real pairings (used together,
          or one depends on the other), not decoration.
        </SectionHeader>
        <InfoBox>click a node to trace its real connections and see what I've built with it</InfoBox>
      </div>
    ),
  },
  {
    id: "skills",
    kind: "code",
    code: `import torch.nn as nn\nfrom profile import skills\n\nclass SkillNet(nn.Module):\n    """4 layers: languages -> tools -> ml -> fullstack."""\n\n    def __init__(self, nodes, edges):\n        super().__init__()\n        self.layers = skills.group_by_category(nodes)\n        self.edges = skills.curate_real_connections(edges)\n\n    def forward(self, focus_node=None):\n        return skills.render_network(self.layers, self.edges, focus_node)\n\nSkillNet(skills.nodes, skills.links).forward()`,
    runningLabel: "building graph...",
    output: <NetworkGraph nodes={skillNodes} links={skillLinks} />,
  },
  {
    id: "projects-header",
    kind: "markdown",
    sectionId: "projects",
    content: (
      <div>
        <SectionHeader index="03" slug="projects">
          Two clusters, because I build in two directions: trained models, and shipped products.
        </SectionHeader>
        <InfoBox>click a project's row to expand it — repo, demo, and report links live there</InfoBox>
      </div>
    ),
  },
  {
    id: "projects-ml-subheader",
    kind: "markdown",
    content: <SubHeader color={skillCategories.ml.color}>ml / research</SubHeader>,
  },
  {
    id: "projects-ml",
    kind: "code",
    code: `ml_projects = [p for p in projects if p.category == "ml"]\nml_projects.sort(key=lambda p: p.title)\n\nfor run in ml_projects:\n    experiments.log(run)`,
    runningLabel: "fetching runs...",
    output: <ExperimentLog projects={mlProjects} />,
  },
  {
    id: "projects-sw-subheader",
    kind: "markdown",
    content: <SubHeader color={skillCategories.fullstack.color}>full-stack / software</SubHeader>,
  },
  {
    id: "projects-sw",
    kind: "code",
    code: `software_projects = [p for p in projects if p.category == "fullstack"]\n\nfor build in software_projects:\n    experiments.log(build)`,
    runningLabel: "fetching builds...",
    output: <ExperimentLog projects={softwareProjects} />,
  },
  {
    id: "education-header",
    kind: "markdown",
    sectionId: "education",
    content: (
      <SectionHeader index="04" slug="education">
        Two degrees, four years apart.
      </SectionHeader>
    ),
  },
  {
    id: "education",
    kind: "code",
    code: `from profile import education\n\nfor degree in education:\n    print(degree.summary())`,
    runningLabel: "loading transcripts...",
    output: <EducationBlock education={education} />,
  },
  {
    id: "experience-header",
    kind: "markdown",
    sectionId: "experience",
    content: (
      <div>
        <SectionHeader index="05" slug="experience">
          Six roles, plotted like a training curve — scope on the y-axis, time on the x.
        </SectionHeader>
        <InfoBox>click a point on the curve to open that role</InfoBox>
      </div>
    ),
  },
  {
    id: "experience",
    kind: "code",
    code: `import numpy as np\nfrom profile import experience\n\nx = np.array([r.order for r in experience])\ny = np.array([r.scope for r in experience])\n\ncareer_curve.plot(x, y, highlight="featured")`,
    runningLabel: "plotting growth curve...",
    output: <CareerCurve experience={experience} />,
  },
  {
    id: "contact-header",
    kind: "markdown",
    sectionId: "contact",
    content: (
      <SectionHeader index="06" slug="say_hi">
        No forms, no gatekeeping. Pick a channel.
      </SectionHeader>
    ),
  },
  {
    id: "contact",
    kind: "code",
    code: `from profile import contact\n\ncontact.send(message="let's talk")`,
    runningLabel: "sending...",
    output: <ContactOutput />,
  },
  {
    id: "outro",
    kind: "markdown",
    content: (
      <p className="text-center text-[var(--color-paper-dim)]">Thank you for visiting my portfolio!</p>
    ),
  },
];

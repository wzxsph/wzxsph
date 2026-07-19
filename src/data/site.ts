export type Lang = "en" | "zh";
export type ProjectSlug = "fashionai-studio" | "tt16" | "storyweaver";

export const EMAIL = "nizabentley397@gmail.com";
export const GITHUB = "https://github.com/wzxsph";

export const primaryProjects = {
  en: [
    {
      slug: "fashionai-studio" as const,
      order: "01",
      title: "FashionAI Studio",
      category: "Generative media workflow",
      summary:
        "A reviewable workflow from one garment and a PNG logo to product shots, model images, and social assets.",
      proof: ["Runnable browser-local mock", "Real generation documented", "Human review + delivery manifest"],
      links: [
        { label: "Live mock", href: "https://fashionai-studio-demo.pages.dev/" },
        { label: "Source", href: "https://github.com/wzxsph/fashionai-studio" },
      ],
    },
    {
      slug: "tt16" as const,
      order: "02",
      title: "TT16 · TradeType 16",
      category: "Behavior design",
      summary:
        "Twenty realistic decision scenarios become sixteen trading styles and a complete browser-local report.",
      proof: ["20 decision scenarios", "16 trading styles", "Local report + export"],
      links: [
        { label: "Try it", href: "https://wzxsph.github.io/TT16/" },
        { label: "Source", href: "https://github.com/wzxsph/TT16" },
      ],
    },
    {
      slug: "storyweaver" as const,
      order: "03",
      title: "StoryWeaver",
      category: "Agent workflow",
      summary:
        "A Claude Code plugin for Chinese fiction projects beyond 300,000 characters, built around repeatable planning and verification.",
      proof: ["v1.2.3", "5 agents · 27 commands", "13-dimensional consistency checks"],
      links: [
        { label: "Install", href: "https://github.com/wzxsph/StoryWeaver#安装" },
        { label: "Source", href: "https://github.com/wzxsph/StoryWeaver" },
      ],
    },
  ],
  zh: [
    {
      slug: "fashionai-studio" as const,
      order: "01",
      title: "FashionAI Studio",
      category: "生成式媒体工作流",
      summary: "从一张服装图和 PNG Logo 出发，生成可审核的商品主图、模特图与社媒素材。",
      proof: ["浏览器本地可运行 Mock", "真实生成链路已记录", "人工审核与交付清单"],
      links: [
        { label: "在线 Mock", href: "https://fashionai-studio-demo.pages.dev/" },
        { label: "查看源码", href: "https://github.com/wzxsph/fashionai-studio" },
      ],
    },
    {
      slug: "tt16" as const,
      order: "02",
      title: "TT16 · 交易人格十六型",
      category: "行为设计",
      summary: "用 20 个真实决策场景，整理出 16 种交易风格，并在浏览器本地生成完整报告。",
      proof: ["20 个决策场景", "16 种交易风格", "本地报告与图片导出"],
      links: [
        { label: "在线体验", href: "https://wzxsph.github.io/TT16/" },
        { label: "查看源码", href: "https://github.com/wzxsph/TT16" },
      ],
    },
    {
      slug: "storyweaver" as const,
      order: "03",
      title: "StoryWeaver",
      category: "Agent 工作流",
      summary: "面向 30 万字以上中文长篇的 Claude Code 插件，把规划、续写与校验变成可重复流程。",
      proof: ["v1.2.3", "5 个 Agent · 27 个命令", "13 维一致性校验"],
      links: [
        { label: "安装插件", href: "https://github.com/wzxsph/StoryWeaver#安装" },
        { label: "查看源码", href: "https://github.com/wzxsph/StoryWeaver" },
      ],
    },
  ],
};

export const shippedWork = {
  en: [
    {
      title: "CatOps",
      category: "Product simulation",
      description: "A playable cat ad-operations simulator balancing auction revenue, user experience, retention, and LTV.",
      live: "https://catops-tycoon.samsong-1a3.workers.dev",
      source: "https://github.com/wzxsph/CatOps",
    },
    {
      title: "AutoInsight AI",
      category: "Evidence workspace",
      description: "An evidence-first autonomous-driving case review and task-handoff workspace.",
      live: "https://autoinsight-ai.pages.dev",
      source: "https://github.com/wzxsph/AutoInsight_AI",
    },
    {
      title: "Personality Escape Station",
      category: "Interactive world",
      description: "A personality test, shareable identity card, and explorable vertical pixel room.",
      live: "https://personality-escape-station.samsong-1a3.workers.dev",
      source: "https://github.com/wzxsph/Personality-Escape-Station",
    },
    {
      title: "Narrative Trace",
      category: "Interactive fiction",
      description: "A vertical interactive-fiction experience with an AI-assisted creation pipeline.",
      live: "https://wzxsph.github.io/Narrative-Trace/",
      source: "https://github.com/wzxsph/Narrative-Trace",
    },
    {
      title: "BadGuard",
      category: "Data product",
      description: "Four explainable daily notes for observing common A-share technical states without issuing trading instructions.",
      live: "https://wzxsph.github.io/BadGuard/",
      source: "https://github.com/wzxsph/BadGuard",
    },
    {
      title: "Hip 24-Point Annotation Tool",
      category: "Research tooling",
      description: "A local DICOM annotation and review workspace with YOLO-assisted initialization.",
      source: "https://github.com/wzxsph/hip-22-annotation-tool",
    },
    {
      title: "AI Life Hotpot",
      category: "Generative experience",
      description: "A team-built multimodal experience that turns life choices into a personalized hotpot report.",
      live: "https://ai-life-hotpot.guanhongli1921.workers.dev",
      source: "https://github.com/guanlili/ai-life-hotpot/tree/main",
    },
  ],
  zh: [
    {
      title: "CatOps",
      category: "产品模拟",
      description: "一款可玩的猫猫广告运营模拟器，在竞价收入、用户体验、留存和 LTV 之间做取舍。",
      live: "https://catops-tycoon.samsong-1a3.workers.dev",
      source: "https://github.com/wzxsph/CatOps",
    },
    {
      title: "AutoInsight AI",
      category: "证据工作台",
      description: "以证据为先的自动驾驶案例复盘与任务交接工作台。",
      live: "https://autoinsight-ai.pages.dev",
      source: "https://github.com/wzxsph/AutoInsight_AI",
    },
    {
      title: "人格出逃空间站",
      category: "互动世界",
      description: "人格测试、可分享身份卡与可探索竖屏像素房间组成的完整体验。",
      live: "https://personality-escape-station.samsong-1a3.workers.dev",
      source: "https://github.com/wzxsph/Personality-Escape-Station",
    },
    {
      title: "Narrative Trace",
      category: "互动叙事",
      description: "一款竖屏互动小说，以及配套的 AI 辅助创作管线。",
      live: "https://wzxsph.github.io/Narrative-Trace/",
      source: "https://github.com/wzxsph/Narrative-Trace",
    },
    {
      title: "BadGuard",
      category: "数据产品",
      description: "把常见 A 股技术状态整理为四张可解释的小纸条，不输出交易指令。",
      live: "https://wzxsph.github.io/BadGuard/",
      source: "https://github.com/wzxsph/BadGuard",
    },
    {
      title: "髋关节 24 点标注工具",
      category: "科研工具",
      description: "支持 DICOM、YOLO 辅助初始化和复核流程的本地标注工作台。",
      source: "https://github.com/wzxsph/hip-22-annotation-tool",
    },
    {
      title: "AI 人生火锅",
      category: "生成式体验",
      description: "团队构建的多模态体验，把人生选择转化成一份个性化火锅报告。",
      live: "https://ai-life-hotpot.guanhongli1921.workers.dev",
      source: "https://github.com/guanlili/ai-life-hotpot/tree/main",
    },
  ],
};

export const homeCopy = {
  en: {
    title: "Pinhao Song — AI Product Builder",
    description: "Pinhao Song builds agent systems, generative media tools, and interactive products from definition to deployed demo.",
    nav: { work: "Work", about: "About", contact: "Contact", menu: "Menu", close: "Close", language: "中文" },
    hero: {
      heading: "I turn AI systems into products people can actually use.",
      body: "I'm Pinhao Song, an Electronic Information Engineering undergraduate at Beijing Institute of Technology. I build agent workflows, generative media tools, and interactive products—from product definition to deployed demo.",
      primary: "View selected work",
      email: "Email me",
    },
    work: {
      heading: "Selected systems, shipped end to end.",
      lead: "Each project begins with a real need, becomes working software, and is documented for human review.",
      caseStudy: "Case study",
    },
    more: { heading: "More shipped work", live: "Live", source: "Source" },
    how: {
      heading: "How I build",
      items: [
        ["Make it playable.", "Start with the smallest complete experience a user can finish by hand."],
        ["Make AI controllable.", "Separate generation, validation, review, and publishing into explicit steps."],
        ["Ship the boundary.", "Treat deployment, data definitions, disclaimers, and failure modes as part of the product."],
      ],
    },
    recognition: {
      heading: "Recognition",
      items: [
        ["Youth Resonance Award", "Douyin AI Creator Program Hackathon"],
        ["Excellence Award", "MiraclePlus Vibeathon"],
      ],
    },
    about: {
      label: "About",
      heading: "Building useful, playful, and controllable AI products.",
      body: "I study Electronic Information Engineering at Beijing Institute of Technology. I begin with a small but complete experience, then connect the data, models, product boundaries, and deployment path needed to make it real.",
      nowLabel: "Now",
      nowHeading: "Agent systems, generative media, and interactive products.",
      nowBody: "Currently exploring clear human checkpoints, playful interfaces, and reliable paths from prototype to deployment.",
      toolbox: "Claude Code · Codex · Python · TypeScript · React · FastAPI · Node.js · Cloudflare · GitHub Actions",
    },
    contact: {
      heading: "Have a product worth shipping?",
      body: "I'm open to AI product collaborations, open-source work, and conversations about AI-native experiences.",
      email: "Email me",
      github: "GitHub",
    },
    footer: "Designed and built in Beijing.",
  },
  zh: {
    title: "宋品豪 — AI 产品构建者",
    description: "宋品豪从产品定义到上线 Demo，构建 Agent 系统、生成式媒体工具与互动产品。",
    nav: { work: "作品", about: "关于", contact: "联系", menu: "菜单", close: "关闭", language: "English" },
    hero: {
      heading: "把 AI 系统，做成真正能用的产品。",
      body: "我是宋品豪，北京理工大学电子信息工程专业本科生。我从产品定义、交互到工程落地，构建 Agent 工作流、生成式媒体工具与互动产品。",
      primary: "查看精选作品",
      email: "邮件联系",
    },
    work: {
      heading: "三套从定义到交付的旗舰系统。",
      lead: "每个项目都从真实问题出发，做成可运行的软件，并留下可供验证和复盘的证据。",
      caseStudy: "查看案例",
    },
    more: { heading: "更多已交付作品", live: "体验", source: "源码" },
    how: {
      heading: "我的构建方式",
      items: [
        ["先让它能被体验。", "从用户可以亲手完成的最小闭环开始。"],
        ["让 AI 变得可控。", "把生成、校验、审核和发布拆成明确步骤。"],
        ["把边界一起交付。", "部署、数据口径、免责声明和失败模式都是产品的一部分。"],
      ],
    },
    recognition: {
      heading: "奖项与认可",
      items: [
        ["青年共振奖", "抖音 AI 创变者计划黑客松"],
        ["优秀奖", "MiraclePlus Vibeathon"],
      ],
    },
    about: {
      label: "关于",
      heading: "构建有用、好玩、可控的 AI 产品。",
      body: "我在北京理工大学学习电子信息工程。我偏爱从一个小而完整的体验开始，再把数据、模型、产品边界和部署路径逐层接上。",
      nowLabel: "现在",
      nowHeading: "Agent 系统、生成式媒体与互动产品。",
      nowBody: "正在探索清晰的人机检查点、好玩的产品界面，以及从原型稳定走向上线的路径。",
      toolbox: "Claude Code · Codex · Python · TypeScript · React · FastAPI · Node.js · Cloudflare · GitHub Actions",
    },
    contact: {
      heading: "有一个值得做出来的产品？",
      body: "欢迎聊产品合作、开源项目，以及任何关于 AI 原生体验的想法。",
      email: "邮件联系",
      github: "GitHub",
    },
    footer: "设计与构建于北京。",
  },
};

export const caseOrder: ProjectSlug[] = ["fashionai-studio", "tt16", "storyweaver"];

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}

export function homePath(lang: Lang, anchor = "") {
  const path = lang === "zh" ? "/zh/" : "/";
  return `${withBase(path)}${anchor}`;
}

export function casePath(lang: Lang, slug: ProjectSlug) {
  return withBase(lang === "zh" ? `/zh/work/${slug}/` : `/work/${slug}/`);
}

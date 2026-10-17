export type Lang = "zh" | "en";

export const EMAIL = "nizabentley397@gmail.com";
export const GITHUB = "https://github.com/wzxsph";

export const homeCopy = {
  zh: {
    name: "宋品豪",
    title: "宋品豪 — 独立开发者",
    description: "宋品豪，独立开发者。关注 AI 应用、原生软件与计算机视觉，从产品设计到开发实现，持续打磨具体体验。",
    introduction: "独立开发者。关注 AI 应用、原生软件与计算机视觉，从产品设计到开发实现，持续打磨具体体验。",
    focusHeading: "当前方向",
    focus: ["AI 应用与工作流", "原生软件与交互体验", "计算机视觉与图像工具"],
    contactHeading: "联系",
    emailLabel: "邮件",
    languageLabel: "English",
    languageNavigation: "语言切换",
    homeLabel: "宋品豪主页",
    skipLink: "跳到主要内容",
  },
  en: {
    name: "Pinhao Song",
    title: "Pinhao Song — Independent Developer",
    description: "Pinhao Song is an independent developer focused on AI applications, native software, and computer vision.",
    introduction: "Independent developer focused on AI applications, native software, and computer vision. I work across product design and development, continually refining the experience of using what I build.",
    focusHeading: "Current focus",
    focus: ["AI applications and workflows", "Native software and interaction design", "Computer vision and image tools"],
    contactHeading: "Contact",
    emailLabel: "Email",
    languageLabel: "中文",
    languageNavigation: "Language",
    homeLabel: "Pinhao Song home",
    skipLink: "Skip to main content",
  },
};

export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}

export function homePath(lang: Lang) {
  return withBase(lang === "en" ? "/en/" : "/");
}

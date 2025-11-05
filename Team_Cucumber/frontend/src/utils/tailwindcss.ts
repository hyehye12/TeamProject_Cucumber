// utils/mergeTailwind.ts
type Pattern = { name: string; regex: RegExp };

// 필요한 그룹들
const GROUPS: Pattern[] = [
  { name: "padding", regex: /^(p|px|py|pt|pr|pb|pl)(?:-|\[|$)/ },
  { name: "margin", regex: /^(m|mx|my|mt|mr|mb|ml)(?:-|\[|$)/ },
  { name: "width", regex: /^w(?:-|\[|$)/ },
  { name: "height", regex: /^h(?:-|\[|$)/ },
  { name: "background", regex: /^bg(?:-|\[|$)/ },
  { name: "text", regex: /^text(?:-|\[|$)/ },
  { name: "rounded", regex: /^rounded(?:-|$|\[)/ },
  { name: "flex", regex: /^flex(?:-|$)/ },
  { name: "gap", regex: /^gap(?:-|$)/ },
  { name: "border", regex: /^border(?:-|$)/ },
  { name: "display", regex: /^(block|inline-block|inline|flex|grid)(?:$|:)/ },
  { name: "transition", regex: /^transition(?:-|$)/ },
  {
    name: "duration",
    regex: /^duration-(?:\d+|0|75|100|150|200|300|500|700|1000)$/,
  },
  { name: "ease", regex: /^ease-(linear|in|out|in-out)$/ },
  { name: "delay", regex: /^delay-(?:\d+|75|100|150|200|300|500|700|1000)$/ },
  { name: "placeholder", regex: /^placeholder(?:-[\w\d]+)?(?:-opacity-\d+)?$/ },
  { name: "outline", regex: /^outline(?:-none|-offset-\d+|-[\w\d]+)?$/ },
];

// variant 제거 함수
const stripVariants = (token: string): string => {
  const parts = token.split(":");
  return parts[parts.length - 1];
};

const detectGroup = (token: string): string | null => {
  const cleaned = stripVariants(token.replace(/^!/, "").replace(/!:/, ":"));
  for (const g of GROUPS) {
    if (g.regex.test(cleaned)) return g.name;
  }
  return null;
};

/**
 * baseClasses: 기본 클래스 문자열 (예: "p-2 rounded-lg text-white")
 * overrideClasses: 외부에서 전달된 클래스 문자열 (예: "p-4 w-full")
 * 반환: 충돌 제거 후 최종 클래스 문자열 (override가 우선)
 */
export const mergeTailwindClasses = (
  baseClasses: string,
  overrideClasses?: string
): string => {
  const baseList = baseClasses ? baseClasses.split(/\s+/).filter(Boolean) : [];
  const overrideList = overrideClasses
    ? overrideClasses.split(/\s+/).filter(Boolean)
    : [];

  // 외부가 덮어쓰는 그룹 수집
  const overrideGroups = new Set<string>();
  overrideList.forEach((o) => {
    const g = detectGroup(o);
    if (g) overrideGroups.add(g);
  });

  // base에서 overrideGroups에 속하는 클래스 제거
  const filteredBase = baseList.filter((b) => {
    const g = detectGroup(b);
    return g ? !overrideGroups.has(g) : true;
  });

  // 필터된 기본 + 오버라이드
  return [...filteredBase, ...overrideList].join(" ").trim();
};

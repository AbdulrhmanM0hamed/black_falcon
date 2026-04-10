import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Globe2,
  Layers3,
  LayoutTemplate,
  Mail,
  MessageCircleMore,
  MonitorCog,
  Palette,
  Rocket,
  ServerCog,
  ShieldCheck,
  Smartphone,
  Sparkles,
  SquareKanban,
  Target,
  UsersRound,
} from "lucide-react";

import type { IconKey, ServiceIconKey } from "@/types/content";

export const serviceIconMap: Record<ServiceIconKey, LucideIcon> = {
  "web-development": MonitorCog,
  "website-design": LayoutTemplate,
  "ui-ux": Palette,
  qa: ShieldCheck,
  devops: ServerCog,
  mobile: Smartphone,
};

export const iconMap: Record<IconKey, LucideIcon> = {
  ...serviceIconMap,
  strategy: BriefcaseBusiness,
  shield: ShieldCheck,
  rocket: Rocket,
  layers: Layers3,
  workflow: SquareKanban,
  messages: MessageCircleMore,
  mail: Mail,
  whatsapp: MessageCircleMore,
  location: Globe2,
  clock: BadgeCheck,
  chart: ChartNoAxesCombined,
  sparkles: Sparkles,
  users: BriefcaseBusiness,
  globe: Globe2,
  server: ServerCog,
  smartphone: Smartphone,
  badge: BadgeCheck,
  target: Target,
  "shield-check": ShieldCheck,
  "users-round": UsersRound,
};

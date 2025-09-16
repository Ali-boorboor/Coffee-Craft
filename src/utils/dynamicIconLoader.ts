import dynamic from "next/dynamic";
import { IconType } from "react-icons";

type IconModule = {
  default?: unknown;
  [key: string]: IconType | unknown;
};

export const iconPacks: Record<string, () => Promise<IconModule>> = {
  tb: () => import("react-icons/tb"),
  pi: () => import("react-icons/pi"),
  fa: () => import("react-icons/fa"),
  bs: () => import("react-icons/bs"),
};

const iconLoader = (pack: string, name: string) => {
  return dynamic(async () => {
    if (!iconPacks[pack]) {
      return () => "Invalid icon";
    }

    const mod = await iconPacks[pack]();
    return mod[name as keyof typeof mod] as React.ComponentType<{
      className?: string;
    }>;
  });
};

export default iconLoader;

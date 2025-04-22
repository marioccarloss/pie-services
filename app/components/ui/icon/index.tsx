import * as icons from "@/components/ui/icons";

export type IconsType = keyof typeof icons;

export interface IconProps {
  icon: IconsType;
  size?: string;
  onClick?: () => void;
}

const Icon = ({ size = "w-6 h-6", icon, ...props }: IconProps) => {
  const IconComponent = icons[icon];
  return (
    <span className={`${size} inline-flex`} {...props}>
      <IconComponent />
    </span>
  );
};

export default Icon;

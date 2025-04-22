import { HTMLAttributes, LabelHTMLAttributes, ReactNode } from "react";

type TypographyMode =
  | "title"
  | "subtitle"
  | "body"
  | "caption"
  | "label"
  | "secondary"
  | "error"
  | "disabled";
type TypographySize =
  | "extra-large"
  | "large"
  | "medium"
  | "medium-regular"
  | "medium-bold"
  | "small"
  | "extra-small";
type TypographyAlign = "left" | "right" | "center" | "justify";

type HtmlTypographyProps = HTMLAttributes<HTMLHeadingElement> & {
  htmlFor?: undefined;
};

type LabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
  htmlFor?: string;
};

export interface TypographyProps {
  mode?: TypographyMode;
  size?: TypographySize;
  align?: TypographyAlign;
  icon?: ReactNode;
  children: ReactNode;
}

type TypographyComponentProps = TypographyProps & (HtmlTypographyProps | LabelProps);

const SIZE_CLASSES: Record<TypographySize, string> = {
  "extra-large": "text-4xl",
  large: "text-2xl",
  medium: "text-xl",
  "medium-regular": "text-lg",
  "medium-bold": "text-lg font-bold",
  small: "text-base",
  "extra-small": "text-sm",
};

const MODE_CLASSES: Record<TypographyMode, string> = {
  title: "font-bold",
  subtitle: "font-semibold",
  body: "",
  caption: "",
  label: "font-medium",
  secondary: "",
  error: "text-red-500 dark:text-red-400",
  disabled: "text-gray-400 dark:text-gray-500",
};

const ALIGN_CLASSES: Record<TypographyAlign, string> = {
  left: "text-left",
  right: "text-right",
  center: "text-center",
  justify: "text-justify",
};

const getTypographyClasses = ({
  mode = "body",
  size = "medium",
  align = "left",
  icon = false,
  className = "",
}: Pick<TypographyProps, "mode" | "size" | "align" | "icon"> & {
  className?: string;
}) => {
  // Extraemos las clases específicas del modo
  const modeClasses = MODE_CLASSES[mode].split(" ");

  // Si hay un className personalizado, filtramos las clases del modo que podrían ser sobrescritas
  const filteredModeClasses = className
    ? modeClasses.filter(cls => {
        // Lista de clases que pueden ser sobrescritas
        const overridableClasses = ["font-bold", "font-semibold", "font-medium"];
        return !overridableClasses.some(
          override => className.includes(override) && cls.includes(override)
        );
      })
    : modeClasses;

  return [
    SIZE_CLASSES[size],
    ...filteredModeClasses,
    ALIGN_CLASSES[align],
    icon ? "flex items-center gap-2" : "",
    className,
  ].join(" ");
};

const getTypographyElement = (mode: TypographyMode, props: TypographyComponentProps) => {
  const { children, className, ...rest } = props;

  const componentProps = {
    className: getTypographyClasses({
      mode: props.mode,
      size: props.size,
      align: props.align,
      icon: props.icon,
      className,
    }),
    ...rest,
  };

  switch (mode) {
    case "title":
      return <h1 {...(componentProps as HTMLAttributes<HTMLHeadingElement>)}>{children}</h1>;
    case "subtitle":
      return <h2 {...(componentProps as HTMLAttributes<HTMLHeadingElement>)}>{children}</h2>;
    case "body":
    case "caption":
      return <p {...(componentProps as HTMLAttributes<HTMLParagraphElement>)}>{children}</p>;
    case "label":
      return "htmlFor" in props ? (
        <label {...(componentProps as LabelHTMLAttributes<HTMLLabelElement>)}>{children}</label>
      ) : (
        <span {...componentProps}>{children}</span>
      );
    default:
      return <span {...componentProps}>{children}</span>;
  }
};

export const Typography = (props: TypographyComponentProps) => {
  const { mode = "body" } = props;
  return getTypographyElement(mode, props);
};

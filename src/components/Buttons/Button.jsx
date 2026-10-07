import PropTypes from "prop-types";

const variants = {
  solid: "bg-btn text-btn-fg hover:opacity-85",
  ghost: "border border-line bg-chip text-fg hover:border-muted",
};

const sizes = {
  md: "min-h-11 px-6 text-[15px]",
  sm: "min-h-9 px-4 text-sm",
};

export function PillLink({ href, variant = "solid", size = "md", className = "", children, ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-medium transition ${variants[variant]} ${sizes[size]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

PillLink.propTypes = {
  href: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["solid", "ghost"]),
  size: PropTypes.oneOf(["md", "sm"]),
  className: PropTypes.string,
  children: PropTypes.node,
};

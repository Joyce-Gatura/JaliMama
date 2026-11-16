function Button({
  children,
  className = "",
  variant = "primary",
  type = "button",
  disabled = false,
  ...buttonProps
}) {
  return (
    <button
      type={type}
      className={`app-button app-button-${variant} ${className}`.trim()}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
}

export default Button;
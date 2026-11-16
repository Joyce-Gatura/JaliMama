function InputField({
  id,
  label,
  hint,
  error,
  className = "",
  ...inputProps
}) {
  return (
    <div className={`form-field ${className}`.trim()}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="form-control"
        aria-invalid={Boolean(error)}
        aria-describedby={
          [hint && `${id}-hint`, error && `${id}-error`]
            .filter(Boolean)
            .join(" ") || undefined
        }
        {...inputProps}
      />
      {hint && <small id={`${id}-hint`}>{hint}</small>}
      {error && (
        <small id={`${id}-error`} className="form-field-error">
          {error}
        </small>
      )}
    </div>
  );
}

export function TextAreaField({
  id,
  label,
  hint,
  error,
  className = "",
  ...textareaProps
}) {
  return (
    <div className={`form-field ${className}`.trim()}>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        className="form-control form-control-textarea"
        aria-invalid={Boolean(error)}
        aria-describedby={
          [hint && `${id}-hint`, error && `${id}-error`]
            .filter(Boolean)
            .join(" ") || undefined
        }
        {...textareaProps}
      />
      {hint && <small id={`${id}-hint`}>{hint}</small>}
      {error && (
        <small id={`${id}-error`} className="form-field-error">
          {error}
        </small>
      )}
    </div>
  );
}

export default InputField;
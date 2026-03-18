interface IProps {
  title?: string;
  textarea?: boolean;
  typeInput?: "number" | "search" | "text" | "email" | "password" | "tel";
  required?: boolean;
  pattern?: string;
  validateTitle?: string;
  value?: string;
  onChange?: (e: string) => void;
}
function InputField({
  title = "Поле",
  typeInput = "text",
  textarea,
  required,
  pattern,
  validateTitle,
  value,
  onChange,
}: IProps) {
  return (
    <div>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={title}
          className="w-full resize-none bg-white outline-none py-2 px-5 border border-(--prime) placeholder:text-(--prime) h-[105px]"
        ></textarea>
      ) : (
        <input
          className="w-full bg-white outline-none py-2 px-5 border border-(--prime) placeholder:text-(--prime)"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          type={typeInput}
          placeholder={title}
          required={required}
          pattern={pattern}
          title={validateTitle}
        />
      )}
    </div>
  );
}

export default InputField;

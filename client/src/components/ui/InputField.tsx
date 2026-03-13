interface IProps {
  title?: string;
  textarea?: boolean;
  typeInput?: "number" | "search" | "text" | "email" | "password" | "tel";
  required?: boolean;
}
function InputField({
  title = "Поле",
  typeInput = "text",
  textarea,
  required,
}: IProps) {
  return (
    <div>
      {textarea ? (
        <textarea
          placeholder={title}
          className="w-full resize-none bg-white outline-none py-2 px-5 border border-(--prime) placeholder:text-(--prime) h-[105px]"
        ></textarea>
      ) : (
        <input
          className="w-full bg-white outline-none py-2 px-5 border border-(--prime) placeholder:text-(--prime)"
          type={typeInput}
          placeholder={title}
          required={required}
        />
      )}
    </div>
  );
}

export default InputField;

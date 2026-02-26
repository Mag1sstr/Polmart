interface IProps {
  title?: string;
  textarea?: boolean;
  typeInput?: "number" | "search" | "text" | "email" | "password" | "tel";
}
function InputField({ title = "Поле", typeInput = "text", textarea }: IProps) {
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
        />
      )}
    </div>
  );
}

export default InputField;

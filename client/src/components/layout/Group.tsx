interface IProps {
  title?: string;
  children: React.ReactNode;
}
function Group({ title, children }: IProps) {
  return (
    <section className="my-5 rounded-[4px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#ffffffb3] p-5 ">
          {title && (
            <h2 className="text-[32px] font-bold mb-11.75 leading-[1.15]">
              {title}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}

export default Group;

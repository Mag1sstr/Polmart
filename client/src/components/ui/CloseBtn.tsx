interface IProps {
  onClick: () => void;
}
function CloseBtn({ onClick }: IProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-2.5 right-2.5 cursor-pointer"
    >
      <img className="w-8.75" src="/close.svg" alt="close" />
    </button>
  );
}

export default CloseBtn;

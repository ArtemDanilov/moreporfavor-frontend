import { Cross } from "./icons/Icons";

const CloseBtn = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <button className="absolute top-8 right-5 flex-centered" onClick={onClick}>
      <span className="sr-only">Close Menu button</span>
      <Cross width={26} height={26} />
    </button>
  );
};

export default CloseBtn;

import { Cross } from "./svg/Icons";

const CloseBtn = ({ onClick }: { onClick: () => void }): JSX.Element => {
  return (
    <button className="absolute top-8 right-5 flex-centered" onClick={onClick}>
      <span className="sr-only">Close Menu button</span>
      <Cross className="w-6 h-6" />
    </button>
  );
};

export default CloseBtn;

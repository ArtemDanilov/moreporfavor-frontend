type Props = {
  width: number;
  height: number;
};

const MenuButton = (props: Props): JSX.Element => {
  return (
    <svg
      width={props.width.toString()}
      height={props.height.toString()}
      viewBox="0 0 36 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="36" height="2" rx="1" fill="currentColor" />
      <rect y="8" width="36" height="2" rx="1" fill="currentColor" />
      <rect y="16" width="36" height="2" rx="1" fill="currentColor" />
    </svg>
  );
};

export default MenuButton;

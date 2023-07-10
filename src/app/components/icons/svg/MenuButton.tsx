const MenuButton = ({ className = "" }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 36 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="36" height="2" rx="1" fill="currentColor" />
      <rect y="8" width="36" height="2" rx="1" fill="currentColor" />
      <rect y="16" width="36" height="2" rx="1" fill="currentColor" />
    </svg>
  );
};

export default MenuButton;

const Cross = ({ className = "" }: { className: string }) => {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="1.34662"
        width="34.2793"
        height="1.90441"
        rx="0.952204"
        transform="rotate(45 1.34662 0)"
        fill="currentColor"
      />
      <rect
        x="0.414246"
        y="24.6533"
        width="34.2793"
        height="1.90441"
        rx="0.952204"
        transform="rotate(-45 0.414246 24.6533)"
        fill="currentColor"
      />
    </svg>
  );
};

export default Cross;

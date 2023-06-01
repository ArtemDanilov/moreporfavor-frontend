type Props = {
  width: number;
  height: number;
};

const Arrow = (props: Props): JSX.Element => {
  return (
    <svg
      width={props.width.toString()}
      height={props.height.toString()}
      viewBox="0 0 61 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M60.7071 8.75923C61.0976 8.36871 61.0976 7.73554 60.7071 7.34502L54.3432 0.981056C53.9526 0.590532 53.3195 0.590532 52.9289 0.981056C52.5384 1.37158 52.5384 2.00475 52.9289 2.39527L58.5858 8.05212L52.9289 13.709C52.5384 14.0995 52.5384 14.7327 52.9289 15.1232C53.3195 15.5137 53.9526 15.5137 54.3432 15.1232L60.7071 8.75923ZM0 9.05212H60V7.05212H0V9.05212Z"
        fill="white"
      />
    </svg>
  );
};

export default Arrow;

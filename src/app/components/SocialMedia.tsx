import { Tiktok, Instagram } from "./icons/Icons";

const SocialMedia = ({ classes }: { classes?: string }): JSX.Element => {
  return (
    <div className={`flex justify-end space-x-6 ${classes}`}>
      <a
        href="https://www.tiktok.com/@more.porfavor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tiktok width={32} height={36} />
      </a>
      <a
        href="https://www.instagram.com/more.porfavor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram width={36} height={36} />
      </a>
    </div>
  );
};

export default SocialMedia;

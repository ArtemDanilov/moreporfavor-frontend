import { Tiktok, Instagram } from "./svg/Icons";

const SocialMedia = ({ className }: { className?: string }): JSX.Element => {
  return (
    <div className={className}>
      <a
        href="https://www.tiktok.com/@more.porfavor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tiktok className="w-auto h-[2em]" />
      </a>
      <a
        href="https://www.instagram.com/more.porfavor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-auto h-[2em]" />
      </a>
    </div>
  );
};

export default SocialMedia;

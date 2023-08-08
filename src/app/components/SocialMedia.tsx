import { Tiktok, Instagram } from "./svg/Icons";

const SocialMedia = ({ className }: { className?: string }): JSX.Element => {
  return (
    <div className={className}>
      <a
        href="https://www.tiktok.com/@more.porfavor"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Tiktok className="w-[2em] h-[2.25em]" />
      </a>
      <a
        href="https://www.instagram.com/more.porfavor/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-[2em] h-[2em]" />
      </a>
    </div>
  );
};

export default SocialMedia;

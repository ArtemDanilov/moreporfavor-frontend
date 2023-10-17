import { Map } from "../../svg/Icons";

import "./style.scss";

type Props = {
  url: string;
  label: string;
};

const MapLink = ({ url, label }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="map-link inline-flex items-center no-underline text-lg text-black mb-5"
    >
      <Map className="w-10 h-10" />
      <span className="leading-tight ml-2 translate-y-1">{label}</span>
    </a>
  );
};

export default MapLink;

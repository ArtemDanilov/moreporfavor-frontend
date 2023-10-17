import { Map } from "../../svg/Icons";

import "./style.scss";

type Props = {
  url: string;
  label: string;
  isHeading?: boolean;
};

const MapLink = ({ url, label, isHeading = false }: Props) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="map-link flex items-center no-underline text-lg text-black mt-2 mb-5"
    >
      <Map className="w-10 h-10" />
      {isHeading ? (
        <h3 className="ml-3 mb-0 translate-y-1">{label}</h3>
      ) : (
        <span className="leading-tight ml-2 translate-y-1">{label}</span>
      )}
    </a>
  );
};

export default MapLink;

import React from 'react';

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "1.5",
  strokeLinecap: "round" as "round",
  strokeLinejoin: "round" as "round",
};

export const CustomHouseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M3 9.5l9-7 9 7V20a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const CustomSatelliteIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...iconProps} {...props}>
        <path d="M7 4L3.02 7.02" />
        <path d="M17 4L20.98 7.02" />
        <path d="M10.14 7.5L5.5 12.5" />
        <path d="M13.86 7.5L18.5 12.5" />
        <path d="M12 13a4 4 0 0 0-4 4v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2a4 4 0 0 0-4-4z" />
        <path d="M12 2v2" />
        <path d="M12 13v-3.5" />
    </svg>
);

export const CustomRocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...iconProps} {...props}>
    <path d="M5.1,18.9,2.2,21.8a2.8,2.8,0,0,0,4,4l2.9-2.9" />
    <path d="M12,12,6,18" />
    <path d="m18,6-6,6" />
    <path d="M21.8,2.2a2.8,2.8,0,0,0-4-4L5.1,10.9" />
  </svg>
);

export const AfricaIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.435 2.146a1 1 0 0 0-1.16-.314l-4.14 1.76a1 1 0 0 0-.58.91v7.587l-2.03-1.464a1 1 0 0 0-1.248.11l-3.23 3.494a1 1 0 0 0 .11 1.56L9.63 19.82a1 1 0 0 0 1.25-.11l2.365-2.557.73 3.09a1 1 0 0 0 .97.746h.02a1 1 0 0 0 .93-.65l2.45-6.02a1 1 0 0 0-.27-1.12l-3.08-3.08.79-3.344 1.7 1.23a1 1 0 0 0 1.34-.15l1-1.16a1 1 0 0 0-.32-1.634z"/>
    </svg>
);

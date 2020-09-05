import * as React from "react";

import { SVGIcon } from "./icon.style";

function SvgTube(props) {
  return (
    <SVGIcon viewBox="0 0 50 62.5" width="1em" height="1em" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="currentColor"
        d="M33.219 6.04H16.781v2.84h1.189v34.281C17.97 48.043 21.327 50 25 50s7.03-1.969 7.03-6.838V8.88h1.19V6.04zM20.81 23.777h8.381v19.385c0 2.767-1.518 3.999-4.19 3.999-2.678 0-4.19-1.225-4.19-3.999V23.777zm5.987-10.709a1.09 1.09 0 100 2.18 1.09 1.09 0 000-2.18zm-1.474 5.24a1.713 1.713 0 10-3.426 0 1.713 1.713 0 003.426 0zm.342 6.532a1.899 1.899 0 10-.002 3.798 1.899 1.899 0 00.002-3.798zM22.84 2.839h4.321L26.994 4.4h2.855l.47-4.4H19.681l.469 4.4h2.855l-.165-1.561zm-2.03 6.04h8.381v12.057H20.81V8.879z"
      />
    </SVGIcon>
  );
}

export default SvgTube;

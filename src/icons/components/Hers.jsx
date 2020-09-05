import * as React from "react";

import { SVGIcon } from "./icon.style";

function SvgHers(props) {
  return (
    <SVGIcon viewBox="0 0 204 80" width="1em" {...props}>
      <path
        fill="currentColor"
        d="M59.7523 79.4043l-23.8386-.0024c-.855-.1073-1.1764-.9627-1.1764-1.7103 0-1.069.5348-1.3896 1.4966-1.603 1.6033-.428 2.6724-.7482 3.1-1.9238.455-1.2753.6392-2.3894.6843-5.09a57.6155 57.6155 0 0 1-.0129-1.1815v-13.141l.0247-.013v-9.6417c0-4.5957-.2692-11.9683-7.964-11.9683-2.3482 0-9.941 1.1428-9.941 12.7857v25.2583c0 2.6713.3208 3.7396 3.955 4.7012.9618.214 2.031.4275 2.031 1.4964 0 1.9237-1.39 2.031-3.3135 2.031H2.7792C.855 79.402 0 79.402 0 77.6916c0-1.069.641-1.2823 1.8168-1.603 3.527-1.283 3.527-2.6714 3.527-7.9086V24.3313c0-2.2445 0-9.2624-.2135-10.6526-.3208-1.9232-.8557-2.03-3.8483-2.778C.2135 10.6871 0 9.9383 0 9.084c0-1.0689.1061-1.1756 3.3129-1.8176 6.2-1.389 11.437-3.5257 16.5678-6.5177C20.9487 0 21.1627 0 21.3767 0c.855 0 .855.9616.855 2.2445v11.2202l-.1067 18.275c0 1.175 0 1.7091.5349 1.7091.1067 0 .3202 0 1.71-1.2817 4.9169-4.1677 10.474-6.6256 16.8875-6.6256 4.81 0 9.192 1.4963 12.506 5.0231 2.8854 2.9915 3.313 7.48 3.313 12.3964v28.533c0 .0047-.0071.0111-.0077.0164.0598 2.2979.5917 3.2982 4.012 4.2035.9775.217 2.0636.4344 2.0636 1.521 0 1.9548-1.4368 2.1694-3.392 2.1694zm99.9109-9.9546c0-3.4154 2.1094-5.7273 6.2298-5.7273 4.8248 0 6.2305 1.7086 7.94 8.642.6029 2.4104 2.0097 3.817 5.8287 3.817 5.125 0 7.9388-2.8132 7.9388-6.9328 0-3.6177-3.6765-6.5306-10.8112-11.0519-7.8374-4.8238-12.16-9.4453-12.16-16.177 0-10.4498 11.6146-16.7799 22.268-16.7799 11.959 0 16.582 5.1246 16.582 9.9472 0 3.215-2.1107 4.9235-5.7285 4.9235-4.5221 0-5.929-1.8088-7.4368-7.2342-.7031-2.713-2.11-3.8188-4.8241-3.8188-4.3204 0-7.2357 2.2105-7.2357 6.2304 0 3.8176 3.7768 6.2287 12.1173 11.4547 7.8397 4.6203 11.3572 9.6453 11.3572 15.5731 0 9.7456-10.5098 17.684-23.6762 17.684-13.1635 0-18.3893-5.3257-18.3893-10.55zm-5.8749-44.1758c6.1425 0 11.6399 5.6588 9.524 10.9769-.9225 2.319-3.3023 3.7156-5.7977 3.644-1.713-.0492-2.9398-.6637-4.3145-2.1448l-1.082-1.2958c-1.0192-1.2237-2.0837-1.793-3.3527-1.793-1.3031 0-2.6602.6878-4.6828 2.3735-3.1886 2.6567-4.8875 6.1003-5.0781 10.1923 0 .0082-.0006.0141-.0006.0217l.0334 24.183c.0528 2.3318.9155 3.3403 4.3626 4.2533.9859.2187 2.0808.438 2.0808 1.5326 0 1.7972-1.2046 2.139-2.9118 2.1842l-11.6017.0023c-.0006-.0012-11.4634-.0006-11.4634-.0006-1.2057 0-2.3616.0006-2.3616-2.099 0-1.1722 1.0667-1.3956 2.0778-1.6195 3.229-.8543 3.9034-1.7942 4.0254-3.8124V48.3933c-.0012-2.8784-.0176-9.8628-.2135-11.1334-.3202-1.9232-.855-2.0305-3.8477-2.7781-1.0691-.214-1.2826-.9616-1.2826-1.8165 0-1.0689.1068-1.1756 3.3135-1.8176 6.197-1.3885 10.2558-2.6022 15.3838-5.592a.1576.1576 0 0 0 .0129-.0081c1.0626-.7441 1.276-.7441 1.4895-.7441.855 0 .855.9622.855 2.2445l-.004 6.6192c0 .401.5043.5845.7583.2744 4.2652-5.2073 9.5145-8.3677 14.0777-8.3677zm-41.7558 36.0395c1.6221 0 2.893 1.4658 2.893 3.3374 0 1.616-.8909 3.5755-2.5095 5.5151C107.097 76.5992 99.489 80 90.4153 80c-16.1098 0-26.934-10.6467-26.934-26.4914 0-16.6977 11.6658-28.3594 28.369-28.3594 12.2088 0 22.5233 7.5843 22.5233 16.5617 0 3.3639-1.4855 4.8156-6.1138 5.9742l-28.2182 7.263c-.0774.0194-.129.102-.1155.1835 1.2802 7.7063 5.9706 15.1158 14.6812 15.1152 4.5274 0 9.216-2.1946 13.2022-6.18 2.3375-2.3377 2.8618-2.7534 4.223-2.7534zM79.5759 49.0372l.2035.1601 16.375-5.1774c3.2278-1.077 4.1626-1.9906 4.1626-4.0686 0-4.4866-3.7979-8.1372-8.4666-8.1372-2.727 0-5.6235 1.4418-7.7482 3.8564-3.4132 3.8804-4.2031 8.9346-4.5263 13.3667z"
      />
    </SVGIcon>
  );
}

export default SvgHers;

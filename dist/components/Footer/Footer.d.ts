import React, { ReactElement } from "react";
import { FooterProps } from "./types";
import { socialLinksTypes } from "./config";
declare const MenuItem: React.FC<FooterProps & {
    newsLetterComponent: ReactElement;
    socialLinks: socialLinksTypes[];
    LinkComponent?: any;
}>;
export default MenuItem;

import { Language } from "../LangSelector/types";
import { FooterLinkType } from "./types";
export declare const footerLinks: FooterLinkType[];
export declare type socialLinksTypes = {
    label: string;
    icon: string;
    href: string;
    items?: socialLinksTypes[];
};
export declare const socials: socialLinksTypes[];
export declare const langs: Language[];

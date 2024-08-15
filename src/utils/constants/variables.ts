import { APP_RESOURCES_ROUTES, AppLinkProps } from "./routes";
import LinkedInIcon from "@/assets/linkedin.svg";
import XIcon from "@/assets/x.svg";
import SlackIcon from "@/assets/slack.svg";
import YoutubeIcon from "@/assets/youtube.svg";
import OpenBookIcon from "@/assets/book-open.svg";
import BookIcon from "@/assets/book.svg";
import { CardProps, Option } from "@/models/shared";

export interface FooterSection {
    id: number;
    name: string;
    links: AppLinkProps[];
} 

export const APP_CONNECT_LINKS:AppLinkProps[] = [
    {
        name: "LinkedIn",
        route: "#",
        icon: LinkedInIcon
    },
    {
        name: "X",
        route: "#",
        icon: XIcon
    },
    {
        name: "Youtube",
        route: "#",
        icon: YoutubeIcon
    },
    {
        name: "Slack",
        route: "#",
        icon: SlackIcon
    },
]

export const APP_LEGAL_LINKS:AppLinkProps[] = [
    {
        name: "Terms",
        route: "#",
    },
    {
        name: "Privacy",
        route: "#",
    },
]

export const FOOTER_SECTIONS:FooterSection[] = [
    {
        id: 1,
        name: "RESOURCES",
        links: [
            ...APP_RESOURCES_ROUTES
        ]
    },
    {
        id: 2,
        name: "CONNECT WITH US",
        links: [
            ...APP_CONNECT_LINKS
        ]
    },
    {
        id: 3,
        name: "LEGAL",
        links: [
            ...APP_LEGAL_LINKS
        ]
    }
]

export const CARDS:CardProps[] = [
    {
        type: 'big',
        title: "Brinte docs",
        guideText: 'See Brinte docs',
        icon: OpenBookIcon,
        link: '#',
    },
    {
        type: 'small',
        title: "Brinte community",
        guideText: 'Join Slack community',
        icon: SlackIcon,
        link: '#',
    },
    {
        type: 'small',
        title: "Brinte support",
        guideText: 'Go to help center',
        icon: BookIcon,
        link: '#',
    }
]

export const FoundUsOptions:Option[] = [
    {
        name: 'Search engine',
        value: 'searchEngine'
    },
    {
        name: 'Recommended by friends or colleague',
        value: 'recommended'
    },
    {
        name: 'Social media',
        value: 'socialMedia'
    },
    {
        name: 'Blog or publication',
        value: 'blog'
    },
    {
        name: 'Others',
        value: 'others'
    },
]

export const urlStructure =
  /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/g;
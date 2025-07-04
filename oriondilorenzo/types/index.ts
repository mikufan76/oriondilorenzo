import type { PortableTextBlock } from '@portabletext/types';
import type { Image } from 'sanity';

export interface MenuItem {
  page?: {
    _type: string;
    slug?: string;
    title?: string;
  };
  link?: {
    _type: string;
    url?: string;
    title?: string;
  };
}

export interface PageItem {
  _type: string;
  slug?: string;
  title?: string;
}

export interface LinkItem {
  _type: string;
  url?: string;
  title?: string;
}

export interface ShowcaseProject {
  page?: number;
  icon?: Image;
  _type: string;
  coverImage: Image;
  overview?: PortableTextBlock[];
  slug?: string;
  tags?: string[];
  title?: string;
  year?: string;
  _updatedAt?: string;
  gallery?: Object[];
  projectLinks?: LinkItem[];
  fontClassName?: string;
}

// Page payloads

export interface HomePagePayload {
  footer?: PortableTextBlock[];
  overview?: any;
  showcaseProjects?: ShowcaseProject[];
  title?: string;
  customLogo?: Image;
  _updatedAt?: string;
  cover?: Image;
  resumeUrl: string;
}

export interface ProjectPayload {
  year?: string;
  coverImage?: Image;
  description?: PortableTextBlock[];
  overview?: PortableTextBlock[];
  site?: {
    urltitle?: string;
    url: string;
  };
  slug: string;
  tags?: string[];
  title?: string;
  content?: Content[];
  projectLinks?: LinkItem[];
}

export interface Content {
  _type: string;
  _key: string;
  photo: object[];
  photoOne: object[];
  photoTwo: object[];
  textBlock: object[];
  videoLink: object[];
}

export interface SettingsPayload {
  menuItems?: {
    page?: PageItem[];
    link?: LinkItem[];
  };
  resumeUrl: string;
  ogImage?: Image;
  favIcon?: Image;
  title?: string;
  bgColor: {
    r?: string;
    g?: string;
    b?: string;
  };
  textColor: {
    r?: string;
    g?: string;
    b?: string;
  };
  displayLastUpdated: boolean;
}

export interface AboutPayload {
  overview?: PortableTextBlock[];
  title?: string;
  aboutImage?: {
    asset: Image;
    width: number;
    height: number;
  };
  aboutLinks?: LinkItem[];
}

export interface linksPayload {
  title?: string;
  linksLinks?: LinkItem[];
}

export type PhotoModalState = (payload: any[]) => void;

export interface PhotoModalPayload {
  open: boolean;
  gallery?: Image[];
}

import Image from 'next/image';
import Link from 'next/link';

import { HeaderLinks } from '@/components/shared/HeaderLinks';
import { resolveHref, urlForLogo } from '@/sanity/lib/utils';
import type { LinkItem, PageItem, SettingsPayload } from '@/types';

interface NavbarProps {
  data: SettingsPayload;
  title: string | null;
  logo: any | null;
}
export default function Navbar(props: NavbarProps) {
  const { data } = props;
  const title = props.title ?? '';

  const menuItems = data?.menuItems ?? {};
  const menuPages = menuItems?.page || ([] as PageItem[]);
  const menuLinks = menuItems?.link || ([] as LinkItem[]);

  const customLogo = props?.logo;
  const logoImageUrl = customLogo && urlForLogo(customLogo)?.url();

  return (
    <div className="flex w-full flex-wrap items-center justify-between gap-x-5 px-4 py-4 md:px-5 md:py-4 lg:px-5">
      {customLogo && customLogo ? (
        <Link
          href={`/`}
          className={`hover:text-secondary h-full text-xl md:text-2xl`}
        >
          <div className="flex h-6">
            <Image
              alt={title}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: 'auto', height: 'auto' }}
              src={logoImageUrl}
            />
          </div>
        </Link>
      ) : (
        <Link
          href={`/`}
          className={`hover:text-secondary h-full text-2xl md:text-2xl`}
        >
          {title}
        </Link>
      )}
      <div className="mt-4 flex flex-wrap gap-3 md:mt-0">
        {menuPages &&
          menuPages.map((menuItem, key) => {
            const href = resolveHref(menuItem?._type, menuItem?.slug);
            if (!href) {
              return null;
            }
            return <HeaderLinks key={key} href={href} title={menuItem.title} />;
          })}

        {menuLinks &&
          menuLinks.map((menuItem, key) => {
            return (
              <Link
                key={key}
                target="_blank"
                className={`text-secondary border-secondary hover:bg-secondary rounded border px-3 py-1 text-lg hover:text-primary md:text-2xl`}
                href={menuItem.url!}
              >
                ↗ {menuItem.title}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

import type { HomePagePayload, SettingsPayload } from '@/types';

interface FooterProps {
  data: SettingsPayload;
  title: string | null;
  homepage: HomePagePayload | null;
}
export default function Footer(props: FooterProps) {
  const {} = props ?? {};
  const title = props.title;
  const lastUpdated = props.homepage?._updatedAt ?? '';
  const displayLastUpdate = props.data?.displayLastUpdated;
  return (
    <footer className="bottom-0 mt-12 grid w-full grid-cols-1 items-center gap-3 px-4 py-2 md:grid-cols-3 md:gap-x-5 md:px-5 md:py-5 lg:px-5">
      <div className="text-center text-xl md:text-left md:text-2xl">
        {title && (
          <div>
            © {title} {new Date().getFullYear()}
          </div>
        )}
      </div>
      {displayLastUpdate == true ? (
        <div className="text-center text-sm md:text-sm">
          <div>Last updated:</div>
          {new Date(lastUpdated).toLocaleString('en-GB', {
            dateStyle: 'long',
            timeStyle: 'short',
          })}
        </div>
      ) : null}
    </footer>
  );
}

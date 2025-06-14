export default function StickyLink({
  url,
  title,
}: {
  url: string;
  title?: string;
}) {
  return (
    <div className="group relative flex h-full w-full">
      <div className="sticky-note-shadow pt-1/6 absolute bottom-[-12%] h-1/2 w-full transition-all" />
      <a
        href={url}
        target="_blank"
        className={`absolute h-full w-full skew-y-[-1deg] bg-gradient-to-r from-sticky-100 to-sticky-400 pt-1 text-center text-xs sm:text-sm text-bg transition-all group-hover:skew-y-[-2deg] group-hover:underline lg:text-lg`}
      >
        {title}
      </a>
    </div>
  );
}

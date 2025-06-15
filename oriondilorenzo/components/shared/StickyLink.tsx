import { randomArrayItem } from '@/sanity/lib/utils';

const stickyNoteColors = [
  // - Yellow:
  '#fff9b1',
  // - White:'#f5f6f8',
  // - Light Orange:
  '#f5d128',
  // - Olive:
  '#d0e17a',
  // - Green:
  '#d5f692',
  // - Pastel Blue:
  '#a6ccf5',
  // - Aqua:
  '#67c6c0',
  // - Blue:
  '#23bfe7',
  // - Orange:
  '#ff9d48',
  // - Pink:
  '#ea94bb',
  // - Red:
  '#f16c7f',
  // - Purple: #b384bb
];

export default function StickyLink({
  url,
  title,
  index = 0,
}: {
  url: string;
  title?: string;
  index?: number;
}) {
  const color = stickyNoteColors[index % stickyNoteColors.length];

  return (
    <div className="group relative flex h-full w-full">
      <div className="sticky-note-shadow pt-1/6 absolute bottom-[-12%] h-1/2 w-full transition-all" />
      <a
        href={url}
        target="_blank"
        style={{ backgroundColor: color }}
        className={`absolute mb-2 h-full w-full skew-y-[-1deg] pt-1 text-center text-xs text-bg transition-all group-hover:skew-y-[-2deg] group-hover:underline sm:text-sm lg:text-lg`}
      >
        {title}
      </a>
    </div>
  );
}

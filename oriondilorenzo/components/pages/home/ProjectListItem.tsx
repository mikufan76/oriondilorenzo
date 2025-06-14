import Image from 'next/image';

import ImageBox from '@/components/shared/ImageBox';
import { urlForImage } from '@/sanity/lib/utils';
import type { ShowcaseProject } from '@/types';

interface ProjectProps {
  project: ShowcaseProject;
}

export function ProjectListItem(props: ProjectProps) {
  const { project } = props;
  const { icon } = project;
  const imageUrl =
    icon && urlForImage(icon)?.height(10).width(10).fit('crop').url();

  return (
    <div className={`flex flex-row`}>
      <div className="flex">
        {imageUrl && <Image src={imageUrl} width={10} height={10} alt={''} />}
        <TextBox project={project} />
      </div>
    </div>
  );
}

function TextBox({ project }: { project: ShowcaseProject }) {
  return (
    <div className="row flex">
      {/* Title */}
      <div className="">{project.title}</div>
      {/* Year */}
    </div>
  );
}

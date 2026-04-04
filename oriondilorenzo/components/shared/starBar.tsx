import { cn } from '@/sanity/lib/utils';

import Star from './svgs/star';

const SVGComponent = (props) => {
  ;
  const starStyle = 'h-full aspect-square';
  return (
    <div className={cn(`flex h-full w-full flex-row`, props.className)}>
      <Star
        style={props?.shown && { display: 'block' }}
        className={`block sm:hidden ${starStyle}`} />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full shrink scale-[103%] sm:scale-100"
      >
        <line
          x1="0%"
          y1="50%"
          x2="100%"
          y2="50%"
          style={{ strokeWidth: props?.strokeWidth ? props.strokeWidth : '1.5%' }}
          stroke="var(--primary-color)"
        />
      </svg>
      <Star className={`${starStyle} sm:translate-x-[-14%]`} />
    </div>
  );
};
export default SVGComponent;

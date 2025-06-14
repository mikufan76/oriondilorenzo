import StarBar from '@/components/shared/starBar';
import Name from '@/components/shared/svgs/name';

const TitlePlate = () => {
  return (
    <div
      className={
        'relative mb-[1%] flex h-min w-full min-w-[300px] flex-col items-center sm:mb-[3%] sm:items-start sm:justify-start'
      }
    >
      <Name className="h-full w-5/6 min-w-[220px] pl-2" />
      <StarBar className="absolute bottom-[-60%]" />
    </div>
  );
};

export default TitlePlate;

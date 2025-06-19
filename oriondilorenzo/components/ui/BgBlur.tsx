export default function BgBlur({ opened, onClick }) {
  const animation = opened
    ? 'animate-in fade-in duration-500 ease-out'
    : 'animate-custom-fade ';
  return (
    <div
      onClick={onClick}
      className={`absolute h-screen w-screen backdrop-blur-lg ${animation} `}
    ></div>
  );
}

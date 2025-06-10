import { cn } from "@/sanity/lib/utils";

export default function PhotoPocket(props) {
  return <div {...props} className={cn(props.className, "bg-red aspect-square w-1/5 ")}></div>
}

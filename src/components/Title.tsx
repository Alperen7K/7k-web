export function Title({
 title,
 position = "center",
}: {
 title: string;
 position?: "center" | "left" | "right";
}) {
 return (
  <h1
   className={`text-${position} sm:text-start w-full sm:text-[52px] text-[45px] font-bold mt-0 pt-0 `}
  >
   {title}
  </h1>
 );
}

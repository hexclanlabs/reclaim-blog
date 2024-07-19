interface TagProps {
  tag: string;
  current?: boolean;
  count?: number;
}
export function Tag({ tag, current, count }: TagProps) {
  return (
    <span
      className={
        "inline-block text-xs font-medium tracking-wider uppercase mt-5 text-blue-600"
      }
      suppressHydrationWarning
    >
      {tag}
    </span>
  );
}

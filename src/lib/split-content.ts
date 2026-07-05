export function splitContentInHalf(content: string): [string, string] {
  const blocks = content.split(/\n{2,}/);
  if (blocks.length < 4) return [content, ""];

  const midpoint = Math.ceil(blocks.length / 2);
  return [blocks.slice(0, midpoint).join("\n\n"), blocks.slice(midpoint).join("\n\n")];
}

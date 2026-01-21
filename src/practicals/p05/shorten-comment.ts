const comment = "TypeScript is a strongly typed programming language"
let comm = comment.split("");

export function shortenComment(comment: string): string {
  let filtered: string[] = comm.filter((comm) => comm.length >= 5 && comm.length <= 10);

  return comm.toString();
}

shortenComment("TypeScript is a strongly typed programming language");


//*** 
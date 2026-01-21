const comment = "TypeScript is a strongly typed programming language"
const comm = comment.split("");

function shortenComment(comment: string): string {
  let filtered: string[] = comm.filter((comm) => comm.length >= 5 && comm.length <= 10);

  return filtered.toString();
}

shortenComment("TypeScript is a strongly typed programming language");

//*** 
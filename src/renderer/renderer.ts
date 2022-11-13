// Override function
export const renderer = {

  // Header
  heading(text: string, level: number) {

    return `<h${level} className="text-2xl">
              ${text}
            </h${level}>`;
  }
};

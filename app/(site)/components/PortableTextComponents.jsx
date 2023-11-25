 // `components` object you'll pass to PortableText
export const components = {
  block: {
    h1: ({ children }) => <h1 className="heading-1 mb-4 first:mt-0 mt-8">{children}</h1>,
    h2: ({ children }) => <h2 className="heading-2 mb-4 first:mt-0 mt-8">{children}</h2>,
    h3: ({ children }) => <h3 className="heading-3 mb-4 first:mt-0 mt-8">{children}</h3>,
    eyebrow: ({ children }) => <span className="eyebrow">{children}</span>,
    textLarge: ({ children }) => <p className="large-text mb-5 last:mb-0">{children}</p>,
    textBase: ({ children }) => <p className="base-text mb-5 last:mb-0">{children}</p>,
  },
};

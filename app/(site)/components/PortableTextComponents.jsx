 // `components` object you'll pass to PortableText
export const components = {
  block: {
    h1: ({ children }) => <h1 className="heading-1">{children}</h1>,
    h2: ({ children }) => <h2 className="heading-2">{children}</h2>,
    h3: ({ children }) => <h3 className="heading-3">{children}</h3>,
    eyebrow: ({ children }) => <span className="eyebrow">{children}</span>,
    textLarge: ({ children }) => <p className="large-text">{children}</p>,
    textBase: ({ children }) => <p className="base-text">{children}</p>,
  },
};

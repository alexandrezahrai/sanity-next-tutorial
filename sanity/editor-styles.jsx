export const editorStyles = [
  // { 
  //   title: "Normal", 
  //   value: "normal",
  //   component: (props) => <p className="base-text mb-5 last:mb-0">{props.children}</p>,
  // },
  // { 
  //   title: "Title", 
  //   value: "title" 
  // },
  // { 
  //   title: "Quote", 
  //   value: "blockquote" 
  // },
  {
    title: "H1",
    value: "h1",
    component: (props) => <h1 className="heading-1 mb-4 first:mt-0 mt-8">{props.children}</h1>,
  },
  {
    title: "H2",
    value: "h2",
    component: (props) => <h2 className="heading-2 mb-4 first:mt-0 mt-8">{props.children}</h2>,
  },
  {
    title: "H3",
    value: "h3",
    component: (props) => <h3 className="heading-3 mb-4 first:mt-0 mt-8">{props.children}</h3>,
  },
  {
    title: "Eyebrow",
    value: "eyebrow",
    component: (props) => <span className="eyebrow">{props.children}</span>,
  },
  {
    title: "Text Large",
    value: "textLarge",
    component: (props) => <p className="large-text mb-5 last:mb-0">{props.children}</p>,
  },
  {
    title: "Text Base",
    value: "textBase",
    component: (props) => <p className="base-text mb-5 last:mb-0">{props.children}</p>,
  },
];

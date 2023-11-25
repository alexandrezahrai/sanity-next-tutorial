export default function Heading({ tag, style, label }) {
  switch (tag) {
    case "h1":
      return <h1 className={style}>{label}</h1>;
    case "h2":
      return <h2 className={style}>{label}</h2>;
    case "h3":
      return <h3 className={style}>{label}</h3>;
    case "h4":
      return <h4 className={style}>{label}</h4>;
    case "h5":
      return <h5 className={style}>{label}</h5>;
    case "h6":
      return <h6 className={style}>{label}</h6>;
    default:
      return null;
  }
}

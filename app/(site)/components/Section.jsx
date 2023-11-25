export default function Section({ children, padding }) {
  return (
    <section className={`container ${padding ? padding : ""}`}>
      {children}
    </section>
  );
}

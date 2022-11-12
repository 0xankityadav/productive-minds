import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <div className="content-center md-mx-auto font-fragmentMono">
      <Nav />
      <main>{children}</main>
    </div>
  );
}

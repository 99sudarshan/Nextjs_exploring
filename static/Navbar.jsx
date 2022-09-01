import Link from "next/link";

const Navbar = () => {
  return (
    <>
      {/* styled-jsx */}
      <style jsx>
        {`
          header {
            display: flex;
            justify-content: center;
            padding-top: 1rem;
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 1rem;
            background: red;
            padding: 0 5rem;
            border-radius: 25px;
          }

          a {
            color: white;
            margin: 10px 0;
            font-size: 1.2rem;
          }
          a:hover {
            color: #d1d5db;
          }
        `}
      </style>
      <header>
        <nav>
          {/* navbar link style */}
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

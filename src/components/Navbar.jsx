function Navbar() {
  const data = ["Numbers", "Strings", "Arrays", "Objects"];

  return (
    <nav className="flex flex-col md:flex-row justify-around items-center p-4 space-y-2 md:space-y-0">
      {data.map((elem) => {
        const text = elem.toLowerCase();
        return (
          <a
            href={`/${text}`}
            key={elem}
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            {elem}
          </a>
        );
      })}
    </nav>
  );
}

export default Navbar;

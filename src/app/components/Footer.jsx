const Footer = () => {
  return (
    <footer className="footer border border-t-[var(--input-border)] border-l-transparent border-r-transparent text-[var(--text-primary)]">
      <div className="container p-12 flex flex-col sm:flex-row justify-end items-center gap-2 sm:gap-6 pr-20 sm:pr-28">
        <a
          href="mailto:thedikshagrover@gmail.com"
          className="text-[var(--text-secondary)] text-sm hover:text-[var(--text-primary)] transition-colors duration-200"
        >
          thedikshagrover@gmail.com
        </a>
        <p className="text-slate-500 text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
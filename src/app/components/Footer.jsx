const Footer = () => {
  return (
    <footer className="footer border border-t-[var(--input-border)] border-l-transparent border-r-transparent text-[var(--text-primary)]">
      <div className="container p-12 flex justify-between items-center">
        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">DG</span>
        <p className="text-slate-500 text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
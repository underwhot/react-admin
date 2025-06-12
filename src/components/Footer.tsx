export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex items-center border-t py-4">
      <div className="container flex items-center justify-center">
        <p className="text-sm">&copy; {currentYear} React Admin Host</p>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8">
      <div className="mx-auto max-w-[90%] px-6 text-center">
        <p className="text-sm text-text-tertiary">
          Anil Kumar &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}

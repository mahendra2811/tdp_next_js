import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-border mt-10 p-5">
      <div className="container max-w-5xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex flex-col items-center md:items-start">
          <div className="font-bold text-lg mb-1 text-primary">Thar Desert Photography</div>
          <div>Jaisalmer, Rajasthan, India</div>
          <a href="mailto:info@thardesertphotography.com" className="hover:underline text-primary">info@thardesertphotography.com</a>
          <div>+91-XXXXXXXXXX</div>
        </div>
        <nav className="flex gap-4">
          <Link href="/about" className="hover:text-primary">About</Link>
          <Link href="/gallery" className="hover:text-primary">Gallery</Link>
          <Link href="/products" className="hover:text-primary">Products</Link>
          <Link href="/contact" className="hover:text-primary">Contact</Link>
        </nav>
        <div className="text-xs">&copy; {new Date().getFullYear()} Thar Desert Photography. All rights reserved.</div>
      </div>
    </footer>
  );
}

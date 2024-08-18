import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-muted p-10 md:py-20 w-full ">
      <div className="container max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-lg">
        <div className="grid gap-5 text-white">
          <h1 className="font-semibold">Contact</h1>
          <div className="flex flex-col gap-1 text-white">
            <p>Phone: +1 (555) 555-5555</p>
            <p>Email: info@acme.com</p>
            <p>Address: 123 Main St, Anytown USA</p>
          </div>
        </div>
        <div className="grid gap-5 text-white ">
          <h1 className="font-semibold">Legal</h1>
          <Link href="#" className="hover:underline" prefetch={false}>
            Terms &amp; Conditions
          </Link>
          <Link href="#" className="hover:underline" prefetch={false}>
            Privacy Policy
          </Link>
        </div>
        <div className="grid gap-5 text-white">
          <h1 className="font-semibold">About</h1>
          <p>&copy; 2024 CineFlare Inc. All rights reserved.</p>
          <p>CineFlare Inc. is a leading provider of innovative solutions.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 bg-neutral">
      <div className="section-shell py-12 my-5 h-40 grid gap-8 lg:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
              ME
            </div>
            <div>
              <p className="text-lg font-semibold">Mesa Elegante</p>
            </div>
          </div>
          <p className="text-sm text-neutral-200">
            Crafted plates, seasonal cocktails, and an inviting ambiance. Join
            us for brunch, dinner, or late-night gatherings.
          </p>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm font-semibold uppercase tracking-wide text-neutral-100">
            Visit
          </h6>
          <p className="text-sm text-neutral-200">123 Elegante Avenue, Dhaka</p>
          <p className="text-sm text-neutral-200">
            Open daily · 11:00am — 11:00pm
          </p>
          <p className="text-sm text-neutral-200">Call: 01406 584 258</p>
        </div>

        <div className="space-y-3">
          <h6 className="text-sm font-semibold uppercase tracking-wide text-neutral-100">
            Follow
          </h6>
          <div className="flex gap-4 text-neutral-100">
            <a className="hover:text-primary">Instagram</a>
            <a className="hover:text-primary">Facebook</a>
            <a className="hover:text-primary">YouTube</a>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="input input-bordered input-sm w-full max-w-xs bg-neutral-focus"
            />
            <button className="btn btn-primary btn-sm">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="section-shell py-4 text-center text-sm text-neutral-300">
          © {new Date().getFullYear()} Mesa Elegante. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

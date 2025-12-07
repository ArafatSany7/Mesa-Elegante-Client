import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTittle from "../../Components/SectionTittle/SectionTittle";
import Cover from "../Shared/Cover/Cover";
import contactBanner from "../../../../assets/contact/banner.jpg";

const Contact = () => {
  return (
    <div>
      <Helmet>
        <title>Mesa Elegante | Contact</title>
      </Helmet>
      <Cover img={contactBanner} tittle="Contact Us"></Cover>

      <div className="section-shell">
        <SectionTittle
          heading="Our Location"
          subHeading="Visit or call"
        ></SectionTittle>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {[
            {
              label: "Phone",
              value: "+1 (555) 123-4567",
            },
            {
              label: "Address",
              value: "123 Culinary Ave, Foodville, CA",
            },
            {
              label: "Hours",
              value: "Mon - Sun | 10:00 AM - 11:00 PM",
            },
          ].map((item) => (
            <div key={item.label} className="glass-card h-full text-center p-6">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary">
                <span className="text-base font-semibold">{item.label[0]}</span>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900">
                {item.label}
              </h3>
              <p className="text-sm text-neutral-600">{item.value}</p>
            </div>
          ))}
        </div>

        <SectionTittle
          heading="Send A Message"
          subHeading="We reply quickly"
        ></SectionTittle>

        <div className="grid md:grid-cols-2 gap-10 items-stretch pb-12">
          <div className="glass-card space-y-4 p-8 flex flex-col justify-center">
            {["Dine-in", "Takeaway", "Events"].map((type) => (
              <div key={type} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/15 text-primary flex items-center justify-center text-sm font-semibold">
                  {type.slice(0, 2)}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-neutral-500">
                    Service
                  </p>
                  <p className="font-semibold text-neutral-900">{type}</p>
                </div>
              </div>
            ))}
          </div>

          <form className="glass-card space-y-4 p-8">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-28"
                placeholder="Tell us how we can help"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full uppercase tracking-wide"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

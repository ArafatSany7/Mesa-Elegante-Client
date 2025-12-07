import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTittle from "../../Components/SectionTittle/SectionTittle";
import Cover from "../Shared/Cover/Cover";
import reserveBg from "../../../../assets/reservation/category-pizza.jpg";

const Reservation = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <Helmet>
        <title>Mesa Elegante | Reservation</title>
      </Helmet>
      <Cover img={reserveBg} tittle="Book A Table"></Cover>

      <SectionTittle
        heading="Reservation"
        subHeading="We will confirm shortly"
      ></SectionTittle>

      <div className=" max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-16">
        <div className="relative overflow-hidden rounded-3xl border border-base-300 glass-card  ">
          <div className="relative p-6 md:p-10 lg:p-12 space-y-6 ">
            <div className="space-y-2 text-center">
              <p className="text-sm uppercase tracking-[0.2em] ">
                Plan your visit
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold ">
                Reserve your table in seconds
              </h2>
              <p className="text-sm md:text-base text-neutral-600 max-w-2xl mx-auto">
                Pick a date, time, and share any preferences. We will confirm
                and make sure your table feels special.
              </p>
            </div>

            <form
              className=" grid gap-6 md:grid-cols-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input input-bordered w-full"
                  required
                  aria-label="Name"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="input input-bordered w-full"
                  required
                  aria-label="Email"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Date</span>
                </label>
                <input
                  type="date"
                  className="input input-bordered w-full"
                  required
                  aria-label="Date"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Time</span>
                </label>
                <input
                  type="time"
                  className="input input-bordered w-full"
                  required
                  aria-label="Time"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Guests</span>
                </label>
                <input
                  type="number"
                  min="1"
                  max="12"
                  defaultValue="2"
                  className="input input-bordered w-full"
                  required
                  aria-label="Guests"
                />
              </div>

              <div className="form-control md:col-span-2">
                <label className="label">
                  <span className="label-text font-semibold">
                    Special Requests
                  </span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-28 w-full"
                  placeholder="Allergies, occasions, seating preferences"
                  aria-label="Special Requests"
                ></textarea>
              </div>

              <div className="md:col-span-2 flex items-center justify-center gap-4">
                <button
                  type="submit"
                  className="btn btn-primary px-8 md:px-10 uppercase tracking-wide shadow-lg shadow-primary/30"
                >
                  Confirm Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;

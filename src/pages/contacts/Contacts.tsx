import React from "react";
import AppHeader from "../../components/app-header/AppHeader";

import { useForm, ValidationError } from "@formspree/react";

const Contacts = () => {
  const [state, handleSubmit] = useForm("xrbglkea");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div className="max-w-[750px] mx-auto px-5 my-20 flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <AppHeader
          variant="primary"
          size="large"
          headingLevel="h2"
          className=""
        >
          Better Together
        </AppHeader>
        <AppHeader variant="secondary" size="small">
          let's connect...
        </AppHeader>
      </div>
      <div className="w-full h-[0.5rem] bg-transparent border border-gray-500/50 rounded-full shadow-[5px_0px_10px_10px_rgba(180,_180,_255,_0.05)]"></div>

      <div className="relative">
        <div className="border border-gray-500/50 p-5  w-full lg:w-[16rem]">
          <p className="text-gray-300">
            "Let’s connect and collaborate to create something extraordinary
            together—because together, we make things better!"
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="lg:w-[30rem] right-0 top-28 border border-gray-500/50 p-5 w-full flex flex-col gap-4 lg:absolute bg-zinc-800  "
        >
          <label
            htmlFor="email"
            className="text-gray-300  w-full flex flex-col"
          >
            <input
              type="email"
              className="bg-transparent border border-gray-500/50 focus:outline-none text-white py-3 px-5 focus:border focus:border-gray-500"
              placeholder="Email"
              name="email"
              required
              id="email"
            />
          </label>
          <textarea
            name="message"
            className="bg-transparent border border-gray-500/50 focus:outline-none text-white py-3 px-5 focus:border focus:border-gray-500"
            placeholder="message"
            required
            id="message"
          ></textarea>

          <button
            type="submit"
            className=" bg-gray-300 px-4 py-2 text-zinc-900  hover:bg-zinc-200 transition-all duration-300"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contacts;

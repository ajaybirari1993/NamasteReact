import React from "react";

const ContactUs = () => {
  return (
    <div className="m-4 p-4 w-full justify-center items-center flex flex-col">
      <h2 className="p-1 text-2xl">Contact us</h2>

      <form
        action="submit"
        className="flex flex-col justify-center items-center gap-3 p-4"
      >
        <input
          type="text"
          placeholder="name"
          className="border border-b-mauve-800 rounded-sm w-auto px-1"
        />
        <input
          type="text"
          placeholder="message"
          className="border border-b-mauve-800 rounded-sm w-auto px-1"
        />
        <button className="px-2 py-1 border border-solid border-[#ccc] bg-black text-white rounded-sm cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;

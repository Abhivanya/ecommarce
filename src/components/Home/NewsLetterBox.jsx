import React from "react";

const NewsLetterBox = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, cum.
      </p>
      <form
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3"
        onSubmit={submitHandler}
      >
        <input
          type="email"
          className="bg-inherit w-full sm:flex-1 outline-none "
          placeholder="Enter Your email"
          required
        />
        <button className="bg-black text-white text-xs px-10 py-4 ">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;

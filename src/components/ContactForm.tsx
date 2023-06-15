import { useState } from "react";

function ContactForm() {
  let messageMaxLength: number = 1000;
  const [inputFormMessage, setInputFormMessage] = useState("");

  function handleMessageWriting(value: string) {
    setInputFormMessage(value);
  }

  function sendForm() {}

  return (
    // fix - make contact form functional
    <div className="bg-zinc-50 dark:bg-zinc-400 rounded-lg shadow-lg border p-8">
      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-gray-900 text-xs font-bold mb-2"
              htmlFor="grid-full-name"
            >
              Full Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-full-name"
              type="text"
              placeholder="Full Name"
            />
            <p className="text-red-500 text-xs italic">
              Please fill out this field.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-gray-900 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              E-mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="email"
              type="email"
              placeholder="example@email.com"
            />
            <p className="text-gray-600 text-xs italic">
              Some tips - as long as needed
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 dark:text-gray-900 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Message
            </label>
            <textarea
              className="no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
              id="message"
              maxLength={messageMaxLength}
              placeholder="Type your message."
              value={inputFormMessage}
              onChange={(event) => handleMessageWriting(event.target.value)}
            ></textarea>
            <p className="text-gray-600 text-xs italic">{`Maximum characters allowed: ${
              messageMaxLength - inputFormMessage.length
            }.`}</p>
          </div>
        </div>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3">
            <button
              className="shadow bg-emerald-700 hover:bg-emerald-900 dark:bg-pink-600 dark:hover:bg-pink-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={sendForm}
            >
              Send
            </button>
          </div>
          <div className="md:w-2/3"></div>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

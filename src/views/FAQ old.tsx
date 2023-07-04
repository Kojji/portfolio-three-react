import FAQAccordion from "../components/ItemsAccordion";
import ContactForm from "../components/ContactForm";
import { FAQList } from "../contents";

function FAQ() {
  return (
    <div className="container bg-gray-200 rounded-lg border p-2 mx-auto my-2 md:my-4">
      <div className="w-full">
        <div className="mb-10">
          <p className="flex justify-center text-3xl text-gray-700 font-bold mb-5">
            FAQ
          </p>
          {FAQList.map(({ title, answer }, key) => (
            <div key={key}>
              <FAQAccordion
                title={title}
                children={answer}
                index={key}
              ></FAQAccordion>
            </div>
          ))}
        </div>
        <div>
          <p
            className="flex justify-center text-3xl text-gray-700 font-bold mb-5"
            id="contact"
          >
            Contact
          </p>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default FAQ;

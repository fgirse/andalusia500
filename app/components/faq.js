import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Warum gilt eine Sperrfrist von 12 Monaten?",
    answer: "Die Sperrfrist von 12 Monaten ist dem spaischen Gesetz §345 geschuldet , welcher besagt dass...",
  },
  {
    question: "Droht mir der Totalverlust meiner investierten Anzahlung?",
    answer: "Nein, der Investitionsbetrag liegt auf einem Sperrkonto...",
  },
  {
    question: "Was passiert wenn bei nicht Gefallen der Kauf der Immobilie nicht zustande kommt? ",
    answer:
      "Sollte der Kauf der Immobilie nicht zu Vertrag kommen,...",
  },
  {
    question: "Ist eine Durchführung von ggf. nach dem Erwerb des Objektes gewünschten Modernisierungs- oder Sanierungsprojekten vertraglich an die Wohntraum Andalusia GmbH gebunden ? ",
    answer:
      "Nein, es liegt Ihnen frei....",
  },
];

export default Faq;
import { archidaught } from '../../utils/fonts';

export default function VerticalTimeline() {
    const data = [
      {
        date: "Start",
        title: "Projektstart",
        description:
          "Sie wünschen sich den Kauf einer Immobilie in Andalusien",
      },
      {
        date: "Woche 1",
        title: "Projektstart und Meeting durch und mit dem Team der Wohntraum Andalusia SI",
        description:
          "In eienm ausfürlichen Gespräch erläutern wir Ihnen die inhaltlichen und zeitlichen Abläufe beim Kauf Ihrer Immobilie",
      },
      {
        date: "Woche 2",
        title: "Auftragserteilung",
        description:
          "Sie erteilen uns die Legitimation zum Kauf der Immobilie",
      },
      {
        date: "Woche 3",
        title: "Notarielle Supervision der Anzahlung bzw. Zahlung der Kaufoption",
        description:
          "Zur Kaufoption der von Ihnen in Betracht gezogenen Immobilie leisten Sie einen prozentuale Anzahlung. Ber von Ihnen geleistetet Betrag wird auf einem Sperrkonto himterlegt.",
      },
      {
        date: "Woche 12",
        title: "Status des Insolvenzverfahrens",
        description:
          "Information über den aktuellen Stand des Insolvenzverfahrens",
      },
      {
      date: "Woche 24",
      title: "Status des Insolvenzverfahrens",
      description:
        "Information über den aktuellen Stand des Insolvenzverfahrens",
    },
      {
        date: "Woche 52",
        title: "Einlösen der Kaufoption und ggf. optional Start Projekt Sanierung / Rennovation/ Modifikation",
      },
    ];
  
    return (
      <>
      <section className={archidaught.className}>
        <div className=" px-5 bg-slate-700 text-slate-200 px-3">
          <div className="relative max-w-xl mx-auto my-16 lg:max-w-3xl before:absolute before:top-0 before:w-1 before:h-full before:left-2 before:bg-yellow-600 lg:before:left-1/2">
            {data.map((item, index) => (
              <div
                key={index}
                className="relative pl-8 mb-12 lg:flex even:flex-row-reverse">
                <div className="absolute top-0 left-0 w-5 h-5 bg-yellow-500 border-4 border-white rounded-full dark:bg-slate-900 lg:left-1/2 lg:-translate-x-2"></div>
                <p
                  className={`text-sm tracking-wide text-teal-400 uppercase lg:w-1/2 lg:mt-px  lg:pr-8 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}>
                  {item.date}
                </p>
                <div
                  className={`lg:w-1/2 lg:-mt-1  ${
                    index % 2 === 0
                      ? "lg:text-left lg:ml-5 "
                      : "lg:text-right lg:pr-10"
                  }`}>
                  <h4 className="mt-4 text-xl text-yellow-500 lg:mt-0">
                    {item.title}
                  </h4>
                  {item.description && (
                    <p className="mt-2 leading-7 text-primary-light">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        </section>
      </>
    );}
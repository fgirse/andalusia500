import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  AcademicCapIcon,
  ArchiveBoxIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/assets/images/Bildschirmfoto 2023-06-16 um 18.00.50.png";
import benefitTwoImg from "../public/assets/images/Beispiel_02.png";

const benefitOne = {
  title: "Ablauf des Immobilienerwerbes",
  desc: "Text Text Text.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Vorbereitung",
      desc: "text text text...",
      icon: <ArchiveBoxIcon />,
    },
    {
      title: "Notarielle Beglaubigung",
      desc: "text text text...",
      icon: <BanknotesIcon />,
    },
    {
      title: "Uebergabe des Objektes",
      desc: "text text text text ...",
      icon: <AcademicCapIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Rechtliche Grundlagen",
  desc: "text text text",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Notarielle Dokumentation",
      desc: "text text text",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Bankabwicklung",
      desc: "text text text ",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Sie haben den Wunsch nach unmittelbaren Modifikatioenen oder Sanierungen?",
      desc: "text text text ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};

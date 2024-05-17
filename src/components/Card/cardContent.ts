import Check from '../../images/icons/Check.svg';
import Copywriting from '../../images/icons/Copywriting.svg';
import Email from '../../images/icons/Email.svg';
import Friends from '../../images/icons/Friends.svg';
import Office from '../../images/icons/Office.svg';
import PR from '../../images/icons/PR.svg';
import Phone from '../../images/icons/Phone.svg';
import Security from '../../images/icons/Security.svg';
import Seo from '../../images/icons/Seo.svg';
import SocialMedia from '../../images/icons/SocialMedia.svg';

export interface ICard {
  title: string;
  description: string;
  icon: string;
}

interface CardData {
  aboutUs: ICard[];
  whatWeOffer: ICard[];
  contact: ICard[];
}

const cardData: CardData = {
  aboutUs: [
    {
      title: 'Qualität',
      description:
        'SEO und organischer Traffic ist unser Herzblut - wir akquirieren hochwertige Leads für unsere Partner durch individuelle Strategien und branchenführende Herangehensweisen. Qualität steht für uns immer an erster Stelle.',
      icon: Check,
    },
    {
      title: 'Expertise',
      description:
        'Mit unserem Fachwissen helfen wir einer Vielzahl von Kunden aus der Finanz- und Technologiebranche ihre Online-Präsenz massiv zu steigern und ihre digitalen Marketingziele zu erreichen.',
      icon: Friends,
    },
  ],
  whatWeOffer: [
    {
      title: 'SEO',
      description:
        'Wir stellen sicher, dass Ihre Webseite oder Ihr Projekt komplett optimiert ist und den organischen Traffic bekommt, um ein Erfolg zu werden.',
      icon: Seo,
    },
    {
      title: 'Social Media',
      description:
        'Wir erzielen über beliebte Plattformen wie LinkedIn, Reddit und Medium, erstklassige Ergebnisse in den sozialen Medien.',
      icon: SocialMedia,
    },
    {
      title: 'PR',
      description:
        'Unsere langjährigen Pressekontakte garantieren maximale Reichweite für Ihr Projekt.',
      icon: PR,
    },
    {
      title: 'Copywriting',
      description:
        'Unser Expertenteam erstellt überzeugende und SEO-freundliche Inhalte, die speziell auf die Finanz- und Technologiebranche zugeschnitten sind.',
      icon: Copywriting,
    },
  ],
  contact: [
    {
      title: 'Email',
      description: 'hello@finvestec-gmbh.de',
      icon: Email,
    },
    {
      title: 'Phone',
      description: '0931/730 442 86',
      icon: Phone,
    },
    {
      title: 'Office',
      description: 'finvestec GmbH, Kister Str. 61, 97204 Höchberg, Germany',
      icon: Office,
    },
    {
      title: 'Kontaktformular',
      description: 'Zum Kontaktformular',
      icon: Security,
    },
  ],
};

export default cardData;

export interface Paragraph {
  title: string;
  content: string[];
}

export interface TabContent {
  title: string;
  description: string;
  paragraphs: Paragraph[];
}

export const tabData: TabContent[] = [
  {
    title: 'Manager On-Page / CRO',
    description:
      'Bei Panda, Penguin und Hummingbird denkst du nicht zuerst an Tiere? Bert und Maverick haben für dich nichts mit TV-Shows zu tun? Dann bist du hier genau richtig. Wir suchen einen erfahrenen SEO-Manager im Bereich On-Page Optimierung für Ausbau und Pflege unseres mittlerweile 70 Seiten umfassenden Portfolios.',
    paragraphs: [
      {
        title: 'Deine Aufgaben',
        content: [
          'Du bist verantwortlich für die Publikation von neuem Content und kannst dafür auf unser Team von erfahrenen Textern zurückgreifen',
          'Du bist für die konstante, datengesteuerte Optimierung von bestehenden Seiten verantwortlich',
          'In Zusammenarbeit mit Linkbuilding Team sorgst du dafür, dass neue und bestehenden Seiten in den Rankings nach oben klettern und der Traffic stetig zunimmt',
        ],
      },
      {
        title: 'Was wir bieten',
        content: [
          'Kurze Entscheidungswege: Wir sind ein junges, kleines und dynamisches Unternehmen. Du berichtest direkt an den CEO',
          'Freiraum für eigene Ideen: Experimentierfreude ist bei uns gerne gesehen',
          'Flexible Arbeitszeiten, um Familie, Party, Hobbys und Arbeit entspannt unter einen Hut zu bringen',
          '80-100% Homeoffice nach der Einarbeitungsphase',
          'Hervorragende Vergütung',
          'Unser Business wird getrieben von SEO – und nicht andersherum. Änderungen und Ideen werden unbürokratisch implementiert, dokumentiert und getestet',
        ],
      },
      {
        title: 'Dein Profil',
        content: [
          'Du hast Erfahrung im Aufbau, Entwicklung und Pflege von Affiliate Seiten',
          'Du verfügst über ein abgeschlossenes relevantes Studium oder kannst konkrete Erfahrungen und Ergebnisse im Bereich Affiliate Marketing aufweisen',
          'Im Bereich On-Page SEO macht dir niemand etwas vor',
          'Du kennst dich mit Tools wie Google Search Console, Analytics, ahrefs, SEMRush, Surfer etc. aus',
          'Im Idealfall bringst du Erfahrung im Bereich Conversion Rate Optimization mit',
          'Dein Englisch ist für den täglichen Austausch mit internationalen Kollegen auf einem soliden Niveau',
          'Klingt spannend? Dann schicke uns deine Bewerbung mit Anschreiben, Lebenslauf und Zeugnissen an jobs@finvestec-gmbh.de',
          'Wir freuen uns, von dir zu hören!',
        ],
      },
    ],
  },
  {
    title: 'Aktuelle Stellenangebote',
    description: '',
    paragraphs: [
      {
        title: 'Die passende Stelle ist nicht dabei?',
        content: [
          'Wir freuen uns auch jederzeit über Initiativbewerbungen an hello@finvestec-gmbh.de',
        ],
      },
    ],
  },
];
export default tabData;

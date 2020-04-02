
import fr from "vuetify/es5/locale/fr";

export default {
  and: 'et',
  year:  'an | ans',
  month: 'mois | mois',
  $vuetify: {
    ...fr
  },
  resume: {
    experience: {
      title: 'Expériences',
      experiences: {
        calyon: {
          location: 'Paris (France)',
          position: 'Java Software engineer',
          company: 'Crédit agricole CIB',
          start: '2006-05',
          end: '2007-08',
          tags: ['java', 'jUnit'],
          description: `<p>todo</p>
          `,
        },
        thales: {
          location: 'Melbourne (Australie)',
          position: 'Java Software engineer',
          company: 'Thales ATM',
          start: '2004-11',
          end: '2006-05',
          tags: ['java', 'jUnit'],
          description: `<p>The Java Human Machine Interface (JHMI) was a complete redevelopment of the GUI of the EUROCAT Air Traffic Management system – new languages, new UI philoshopies, new processes. Written in Java and OpenGL, the JHMI is a plug’n’play real-time command-an-control-style system.</p>
          <span>Roles :</span>
          <ul>
            <li>Design and development of core's sytem</li>
            <li>Design and development of OpenGL's framework</li>
            <li>Design and development of plugins based on Eclipse RCP</li>
            <li>Development of unit tests</li>
          </ul>
          <p></p>
          <p>An eXtrem Programming environment was in place : TDD, Pair Programming...</p>
          `,
        }
      }
    },
  },
}

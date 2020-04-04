
import fr from "vuetify/es5/locale/fr";

export default {
  and: 'et',
  year:  'an | ans',
  month: 'mois | mois',
  $vuetify: {
    ...fr
  },
  resume: {
    me: {
      personal: {
        remote: 'working full remote',
        xp: "sans expérience | un an d'expérience | {count} années d'expérience",
        home: 'Menthon saint Bernard, 74290, France',
      },
      position: 'Lead developer - Web architect',
      subPosition: 'Backend - Frontend - Devops',
    },
    infos: {
      title: 'Infos',
      content: `<p>slsqlsq</p>
      <p>fffd</p>`,
    },
    education: {
      title: 'Education',
      content: `<p>EPITA (promo 2004)</p>
      <p>fffd</p>`,
    },
    experience: {
      title: 'Expériences',
      experiences: {
        calyon: {
          location: 'Paris (France)',
          position: 'Java Software engineer',
          company: 'Crédit agricole CIB',
          start: '5-2006',
          end: '8-2007',
          tags: ['java', 'jUnit'],
          description: `<p>todo</p>
          `,
        },
        thales: {
          location: 'Melbourne (Australie)',
          position: 'Java Software engineer',
          company: 'Thales ATM',
          start: '11-2004',
          end: '05-2006',
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


import fr from "vuetify/es5/locale/fr";

export default {
  and: 'et',
  year:  'an | ans',
  month: 'mois | mois',
  see_in: {
    en: 'See in english',
  },
  $vuetify: {
    ...fr
  },
  pages: {
    home: {
      tooltip: 'Accueil',
    },
    resume: {
      tooltip: 'Mon CV',
    },
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
          description: `<p>TODO</p>
          `,
        }
      }
    },
  },
}

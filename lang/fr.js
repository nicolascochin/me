
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
  // dateTimeFormats: {
  //   short: {
  //     day: 'numeric', month: 'short', year: 'numeric'
  //   },
  //   monthAndYear: {
  //     month: 'short', year: 'numeric'
  //   },
  //   long: {
  //     year: 'numeric', month: 'short', day: 'numeric',
  //     weekday: 'short', hour: 'numeric', minute: 'numeric', hour12: false
  //   }
  // },
  pages: {
    home: {
      tooltip: 'Accueil',
    },
    resume: {
      tooltip: 'Mon CV',
    },
    contact: {
      tooltip: 'Contactez moi',
    },
  },
  contact: {
    messageSent: 'Votre message a bien été envoyé',
    messageNotSent: "Une erreur est survenue. Votre message n'a pas été envoyé",
    pageTitle: 'Contact',
    from: 'Email',
    yourEmail: 'Votre email',
    message: 'Message',
    yourMessage: 'Votre message',
    validate: 'Envoyer'
  },
  resume: {
    me: {
      personal: {
        remote: 'Travaille à distance',
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
          description: `<p>TODO</p>
          `,
        }
      }
    },
  },
}

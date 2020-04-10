
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
      position: 'Lead developer - Architecte web',
      subPosition: 'Backend - Frontend - Devops',
    },
    infos: {
      title: 'Infos',
      content: `<p>Mes différentes expériences m’ont permis d’acquérir une expertise dans le développement logiciel.
      J’ai eu l’occasion de mettre en place de nouvelles applications, d’optimiser les performances d’applications
      existantes, de manager des équipes, de coacher des équipes sur de nouveaux sujets/technos.</p>
      <p>Passionné par le développement, j’aime apprendre et je suis toujours à l’écoute de nouvelles technos.</p>
      <p>Les sujets qui me tiennent à cœur : le clean code, les tests unitaires, l’automatisation des tâches, l’optimisation et l’architecture logicielle. </p>
      `,
    },
    education: {
      title: 'Education',
      content: `<p>EPITA (promo 2004)</p>
      <p>fffd</p>`,
    },
    experience: {
      title: 'Expériences',
      experiences: {
        helloPret: {
          headerColors: ['white'],
          location: 'Travaille à distance',
          position: 'Senior Lead developer',
          company: 'HelloPrêt',
          start: '2019-02',
          end: '',
          tags: ['Ruby', 'Sidekiq'],
          description: `<p>todo</p>
          `,
        },
        effilab: {
          headerColors: ['blue', 'darken-2'],
          location: 'Travaille à distance',
          position: 'Senior Lead developer',
          company: 'Prium Solution',
          start: '2017-08',
          end: '2019-02',
          tags: ['Ruby', 'Sidekiq'],
          description: `<p>todo</p>
          `,
        },
        prium: {
          headerColors: ['green'],
          location: 'Travaille à distance',
          position: 'Senior Lead developer',
          company: 'Prium Solution',
          start: '2015-03',
          end: '2017-08',
          tags: ['Ruby', 'Sidekiq'],
          description: `<p>todo</p>
          `,
        },
        bnpCalpypsoLast: {
          headerColors: ['pink', 'darken-2'],
          location: 'Paris (France)',
          position: 'Senior Lead developer',
          company: 'BNP Paribas',
          start: '2015-05',
          end: '2016-02',
          tags: ['java', 'jUnit'],
          description: `<p>todo</p>
          `,
        },
        TrikeItEasy: {
          headerColors: ['orange', 'lighten-2'],
          location: 'Entre Paris et Bangkok',
          position: 'Voyage à vélo',
          subtitle: 'De Paris à Bangkok',
          company: 'TrikeItEasy',
          start: '2014-03',
          end: '2015-03',
          tags: ['Vélo', 'pâtes'],
          description: `<p>todo</p>
          `,
        },
        SG: {
          headerColors: ['brown', 'darken-2'],
          location: 'Paris (France)',
          position: 'Senior Lead developer',
          company: 'Société Générale',
          start: '2011-09',
          end: '2014-01',
          tags: ['java', 'jUnit'],
          description: `<p>todo</p>
          `,
        },
        bnpPrimeBrokerage: {
          headerColors: ['blue-grey', 'lighten-2'],
          location: 'Travaille à distance (équipe à New York)',
          position: 'Java Software engineer',
          company: 'BNP Paribas',
          start: '2010-03',
          end: '2011-09',
          tags: ['java', 'jUnit'],
          description: `<p>todo</p>
          `,
        },
        bnpCalpypsoFirst: {
          headerColors: ['error'],
          location: 'Paris (France)',
          position: 'Consultant Calypso',
          company: 'BNP Paribas',
          start: '2007-08',
          end: '2010-03',
          tags: ['java', 'jUnit'],
          description: `<p>todo</p>
          `,
        },
        calyon: {
          headerColors: ['blue', 'lighten-5'],
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
          headerColors: ['primary'],
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

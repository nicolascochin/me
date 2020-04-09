import en from "vuetify/es5/locale/en";

export default {
  and: 'and',
  year:  'year | years',
  month: 'month | months',
  see_in: {
    fr: 'Voir en francais',
  },
  $vuetify: {
    ...en
  },
  pages: {
    home: {
      tooltip: 'Home',
    },
    resume: {
      tooltip: 'My resume',
    },
    contact: {
      tooltip: 'Contact me',
    },
  },
  contact: {
    messageSent: 'Your message has been sent.',
    messageNotSent: "An error occurred. Your message has not been sent.",
    pageTitle: 'Contact',
    from: 'Email',
    yourEmail: 'Your email',
    message: 'Message',
    yourMessage: 'Your message',
    validate: 'Send'
  },
  resume: {
    me: {
      personal: {
        remote: 'Working full remote',
        xp: "no experience | one year experience | {count} years experience",
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
        helloPret: {
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
          location: 'Entre Paris et Bangkok',
          position: 'Voyage à vélo (Paris à Bangkok)',
          company: 'TrikeItEasy',
          start: '2014-03',
          end: '2015-03',
          tags: ['Vélo', 'pâtes'],
          description: `<p>todo</p>
          `,
        },
        SG: {
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

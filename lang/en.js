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
    index: {
      tooltip: 'Home',
      title: 'Home',
      description: 'todo en',
    },
    resume: {
      tooltip: 'My resume',
      title: 'My resume',
      description: 'todo en',
    },
    contact: {
      tooltip: 'Contact me',
      title: 'Contact me',
      description: 'todo en',
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
      content: `<p>My various experiences have allowed me to acquire an expertise in software development.
      I had the opportunity to set up new applications (design, production, maintenance), optimize the performance
      of existing applications, manage teams and coach teams on new subjects/technologies.</p>
      <p>Passionate about development, I love to learn and am always on the lookout for new technologies.</p>
      `,
    },
    education: {
      title: 'Education',
      content: `<p>EPITA (1999 -- 2004)</p>
      <p class="font-italic font-weight-light">Specialization MMA (object-oriented programming)<br />
      Secretary of the association MHIGE (Mission Humanitaire Inter Grandes Ecoles)
      </p>
      `,
    },
    experience: {
      title: 'Work experience',
      experiences: {
        helloPret: {
          icon: 'home',
          headerColors: ['pink', 'darken-1'],
          location: 'Full remote',
          position: 'Senior Lead Developer',
          company: 'HelloPrêt',
          start: '2019-02',
          end: '',
          tags: ['Ruby', 'Ruby on Rails', 'Sidekiq', 'PostgreSQL', 'Heroku', 'NuxtJS', 'JSONAPI'],
          description: `<p>Hellopret is a 100% digital real estate broker</p>
          Roles :
          <ul>
            <li>Choosing the architecture</li>
            <li>Design and implementation of all Front and Back applications</li>
            <li>Team management: 3 people (all full-remote)</li>
          </ul>
          `,
        },
        effilab: {
          icon: 'googleAds',
          headerColors: ['light-blue', 'darken-4'],
          location: 'Full remote',
          position: 'Senior Lead Developer',
          company: 'Effilab',
          start: '2017-08',
          end: '2019-02',
          tags: ['Ruby', 'Ruby on Rails', 'Sidekiq', 'Hadoop', 'Hive', 'PostgreSQL', 'PrestoDB', 'Google Ads', 'Bing Ads', 'Facebook Ads', 'Heroku', 'GCP', 'Kubernetes', 'Helm', 'Terraform', 'Infrastructure as Code'],
          description: `<p>Effilab is an agency specialized in digital marketing.</p>
          Roles :
          <ul>
            <li>Implementation of the data warehouse based on Hadoop and Hive. Data extracted from Google, Bing and Facebook</li>
            <li>Conception and realization of a new ruby application for the publication of ads on Facebook. This application allows to manage thousands of FB campaigns through a single Excel sheet.</li>
            <li>In charge of cloud migration (OVH/Heroku) to the Google Cloud platform. Applications are now deployed on the kubernetes via a Helm package. All clusters are powered by terraform.</li>
            <li>Team management: 10 people (all full-remote)</li>
          </ul>
          `,
        },
        bnpCalpypsoLast: {
          icon: 'bank',
          headerColors: ['teal', 'darken-1'],
          location: 'Paris (France)',
          position: 'Senior Lead Developer',
          company: 'BNP Paribas',
          start: '2015-05',
          end: '2016-02',
          tags: ['Java', 'Hibernate', 'JMS', 'JUnit', 'Maven', 'KSH', 'Oracle', 'Jenkins'],
          description: `<p>Back to Calypso's team</p>
          Roles :
          <ul>
            <li>Redesign of the non-regression tool in order to make the scenarios realisable and independent</li>
            <li>Optimization of the refresh of the database used by the non-regression tool (database of several teras)</li>
            <li>Refactoring Calypso's Scheduled tasks</li>
          </ul>
          `,
        },
        prium: {
          icon: 'web',
          headerColors: ['error'],
          location: 'Full remote',
          position: 'Senior Lead Developer',
          company: 'Prium Solution',
          start: '2015-03',
          end: '2017-08',
          tags: ['Ruby', 'Ruby on Rails', 'Rspec', 'Sidekiq', 'Docker', 'AWS', 'Heroku', 'Javascript', 'API REST', 'Coffeescript', 'Bootstrap', 'MySQL', 'PostgreSQL', 'Capistrano'],
          description: `<p>Development of projects based on Ruby on Rails</p>
          Roles :
          <ul>
            <li>Design and development of Front-End applications</li>
            <li>Design and development of Back-End applications</li>
            <li>Setting up CI and CD</li>
          </ul>
          `,
        },
        TrikeItEasy: {
          icon: 'bicycle',
          headerColors: ['green', 'darken-1'],
          location: 'Somewhere between Paris and Bangkok',
          position: 'Bicycle trip',
          subtitle: 'From Paris to Bangkok',
          company: 'TrikeItEasy',
          start: '2014-03',
          end: '2015-03',
          tags: ['Vélo', 'pâtes', 'Voyage', 'Photo', 'Détermination', 'Italie', 'Slovénie', 'Croatie', 'Monténégro', 'Albanie', 'Grèce','Turquie', 'Iran', 'Turkménistan', 'Ouzbékistan', 'Kirghizistan', 'Chine', 'Laos', 'Cambodge', 'Thaïlande'],
          description: `<p>Voyage à deux en vélo couché de Paris à Bangkok</p>
          Roles :
          <ul>
            <li>Trip Planning</li>
            <li>In charge of the itinerary</li>
            <li>Camping spots manager</li>
            <li>Bicycle repair and maintenance</li>
            <li>Motivation of the team</li>
          </ul>
          <p></p>
          <p><a href="https://trikeiteasy.com/" target="_blank">The blog of our journey (TrikeItEasy)</a></p>
          `,
        },
        SG: {
          icon: 'bank',
          headerColors: ['yellow', 'darken-2'],
          location: 'Paris (France)',
          position: 'Lead Developer',
          company: 'Société Générale',
          start: '2011-09',
          end: '2014-01',
          tags: ['Java', 'Spring', 'Spring Batch', 'Spring Integration', 'Hibernate', 'JMS', 'JUnit', 'Maven', 'KSH', 'Oracle 10g', 'Jenkins'],
          description: `<p>Système Règlements was an "in-house" inter-banking payments systems.</p>
          <p>Developed in C language, my mission was to implement a new architecture based on Java and to migrate the most critical batches.</p>

          Roles :
          <ul>
            <li>Design and development of the new architecture based on Spring Batch and Spring Integration</li>
            <li>Implementation of unit tests. Coverage close to 90%.</li>
            <li>Implementation of Continuous Integration (CI) and Continuous Deployment (CD)</li>
            <li>Migration of C batches to Java</li>
            <li>Team management: 8 people (5 in Paris and 3 in India)</li>
          </ul>
          <p>Due to the critical level of this application, a lot of effort has been made on unit testing and non-regression.</p>
          `,
        },
        bnpPrimeBrokerage: {
          icon: 'bank',
          headerColors: ['blue-grey', 'darken-2'],
          location: 'Full-remote (team based in New York)',
          position: 'Senior Java engineer',
          company: 'BNP Paribas',
          start: '2010-03',
          end: '2011-09',
          tags: ['Java', 'Spring', 'Hibernate', 'Gwt', 'Gxt', 'GigaSpace', 'Mule', 'OSWorkflow', 'JUnit', 'Maven'],
          description: `<p>Development of the next Prime Brokerage platform. This platform is a merge of the European and US activities.</p>
          <p>As a member of the US team (based in NYC), I was working in a full remote environment from Paris.</p>
          Roles :
          <ul>
            <li>Design and development of the trade capture application</li>
            <li>Design and development of an application based on Mule (ESB) whose objective was to integrate the positions of numerous systems into Prime Brokerage's platform.</li>
            <li>Design and development of a monitiring application</li>
            <li>Coordination of teams between the United States and France</li>
          </ul>
          `,
        },
        bnpCalpypsoFirst: {
          icon: 'bank',
          headerColors: ['orange', 'darken-2'],
          location: 'Paris (France)',
          position: 'Calypso Consultant',
          company: 'BNP Paribas',
          start: '2007-08',
          end: '2010-03',
          tags: ['Java', 'Calypso', 'Multithreading', 'Performance', 'jUnit', 'Maven', 'Jenkins'],
          description: `<p>Implementation of Calypso on Listed Securities perimeter.</p>
          <p>Calypso quickly faced performances issues (300K deals / day).</p>
          <p>One major part of my mission was to secure Calypso and improve the performances.</p>
          Roles:
          <ul>
            <li>Performance Improvement:
              <ul>
                <li>Design and development of a new trade integration system (multithreaded)</li>
                <li>Identification of the bottlenecks of the application</li>
                <li>SQL request optimization</li>
                <li>JVM optimization</li>
                <li>Implementation of a framework to parallelize ScheduledTasks</li>
              </ul>
            </li>
            <li>Implementation of unit tests</li>
            <li>Setup Continuous Integration (CI) and Continuous Deployment (CD)</li>
            <li>Team management: 4 people</li>
          </ul>
          <p></p>
          <p>In the end, Calypso was able to integrate more than 1.5 million trades per day.</p>
          `,
        },
        calyon: {
          icon: 'bank',
          headerColors: ['pink', 'accent-3'],
          location: 'Paris (France)',
          position: 'Java software engineer',
          company: 'Crédit agricole CIB',
          start: '2006-05',
          end: '2007-08',
          tags: ['Java', 'Hibernate', 'Sybase', 'jUnit'],
          description: `<p>Horus was a in-house software developed to represent the financial packages across different systems.</p>
          Roles:
          <ul>
            <li>Design and development of a reconciling operations system from other back office systems such as Calypso, Murex, Summit...</li>
            <li>Refactoring the application to improve performance</li>
            <li>Setup a CI and unit tests</li>
            <li>Administration of the development servers</li>
          </ul>
          `,
        },
        thales: {
          icon: 'plane',
          headerColors: ['primary'],
          location: 'Melbourne (Australie)',
          position: 'Java software engineer',
          company: 'Thales ATM',
          start: '2004-11',
          end: '2006-05',
          tags: ['Java', 'OpenGL', 'Multithreading', 'Performances', 'Architecture', 'CI', 'jUnit'],
          description: `<p>Java Human Machine Interface (JHMI) was a complete redevelopment of the GUI of the EUROCAT
          Air Traffic Management system – new languages, new UI philoshopies, new processes.</p>
          <p>Written in Java and OpenGL, the JHMI is a plug’n’play real-time command-an-control-style system.</p>
          <p>I had the chance to join the team at the beginning of the project and so I participated to build the core system.
          Given the level of criticality, special attention was paid to testing as well as performance.</p>
          Roles:
          <ul>
            <li>Design and development of core's sytem</li>
            <li>Design and development of OpenGL's framework</li>
            <li>Design and development of plugins based on Eclipse RCP</li>
            <li>Development of unit tests</li>
            <li>Development of a JNI application to interface libraries written in C</li>
          </ul>
          `,
        }
      }
    },
  },
}

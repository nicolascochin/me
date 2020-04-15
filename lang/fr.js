
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
    index: {
      tooltip: 'Accueil',
      title: 'Accueil',
      description: 'moi, juste moi',
    },
    resume: {
      tooltip: 'Mon CV',
      title: 'Mon CV',
      description: 'mon cv, mon parcours professionnel',
    },
    contact: {
      tooltip: 'Contactez moi',
      title: 'Contactez moi',
      description: 'contactez moi. Laisser votre email et votre message et je vous recontacterai',
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
      J’ai eu l’occasion de mettre en place de nouvelles applications (conception, mise en production, maintenance), d’optimiser les performances d’applications
      existantes, de manager des équipes, de coacher des équipes sur de nouveaux sujets/technos.</p>
      <p>Passionné par le développement, j’aime apprendre et je suis toujours à l’écoute de nouvelles technos.</p>
      <p>Les sujets qui me tiennent à cœur : le clean code, les tests unitaires, l’automatisation des tâches, l’optimisation et l’architecture logicielle. </p>
      `,
    },
    education: {
      title: 'Formation',
      content: `<p>EPITA (1999 -- 2004)</p>
      <p class="font-italic font-weight-light">Spécialisation MMA (Programmation orientée objet)<br />
      Secrétaire de l'association MHIGE (Mission Humanitaire Inter Grandes Ecoles)
      </p>
      `,
    },
    experience: {
      title: 'Expériences',
      experiences: {
        helloPret: {
          icon: 'home',
          headerColors: ['pink', 'darken-1'],
          location: 'Travaille à distance',
          position: 'Senior Lead Developer',
          company: 'HelloPrêt',
          start: '2019-02',
          end: '',
          tags: ['Ruby', 'Ruby on Rails', 'Sidekiq', 'PostgreSQL', 'Heroku', 'NuxtJS', 'JSONAPI'],
          description: `<p>helloprêt un courtier en crédit immobilier 100% digital</p>
          Rôles :
          <ul>
            <li>Choix de l'architecture</li>
            <li>Conception et réalisation de toutes les applications Front et Back</li>
            <li>Gestion d'équipe : 3 personnes (tous en full-remote)</li>
          </ul>
          `,
        },
        effilab: {
          icon: 'googleAds',
          headerColors: ['light-blue', 'darken-4'],
          location: 'Travaille à distance',
          position: 'Senior Lead Developer',
          company: 'Effilab',
          start: '2017-08',
          end: '2019-02',
          tags: ['Ruby', 'Ruby on Rails', 'Sidekiq', 'Hadoop', 'Hive', 'PostgreSQL', 'PrestoDB', 'Google Ads', 'Bing Ads', 'Facebook Ads', 'Heroku', 'GCP', 'Kubernetes', 'Helm', 'Terraform', 'Infrastructure as Code'],
          description: `<p>Effilab est une agence spécialisée dans le marketing digital</p>
          Rôles :
          <ul>
            <li>Mise en place du data warehouse basé sur Hadoop et Hive. Les données extraites depuis Google, Bing et Facebook</li>
            <li>Conception et réalisation d'une nouvelle application ruby pour la publication de publicités sur Facebook. Cette application permet de gérer des milliers de campagnes FB à travers une seule feuille Excel.</li>
            <li>En charge de la migration cloud (OVH/Heroku) vers la plateforme Google Cloud. Les applications sont désormais déployées sur les kubernetes via un paquet Helm.Tous les clusters sont approvisionnés par terraform</li>
            <li>Gestion d'équipe : 10 personnes (tous en full-remote)</li>
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
          description: `<p>Retour à l'équipe Calypso</p>
          Rôles :
          <ul>
            <li>Refonte de l'outil de non-régression afin de rendre les scénarios ré-réalisables et indépendants</li>
            <li>Optimisation du rafraîchissement de la base de données utilisée par l'outil de non-régression (BDD de plusieurs teras)</li>
            <li>Refonte des Scheduled tasks de Calypso</li>
          </ul>
          `,
        },
        prium: {
          icon: 'web',
          headerColors: ['error'],
          location: 'Travaille à distance',
          position: 'Senior Lead Developer',
          company: 'Prium Solution',
          start: '2015-03',
          end: '2017-08',
          tags: ['Ruby', 'Ruby on Rails', 'Rspec', 'Sidekiq', 'Docker', 'AWS', 'Heroku', 'Javascript', 'API REST', 'Coffeescript', 'Bootstrap', 'MySQL', 'PostgreSQL', 'Capistrano'],
          description: `<p>Développement de projets basés sur Ruby on Rails</p>
          Rôles :
          <ul>
            <li>Choix des architectures</li>
            <li>Conception et développement d'applications Front-End</li>
            <li>Conception et développement d'applications Back-End</li>
            <li>Mise en place de CI - CD</li>
          </ul>
          `,
        },
        TrikeItEasy: {
          icon: 'bicycle',
          headerColors: ['green', 'darken-1'],
          location: 'Quelquepart entre Paris et Bangkok',
          position: 'Voyage à vélo',
          subtitle: 'De Paris à Bangkok',
          company: 'TrikeItEasy',
          start: '2014-03',
          end: '2015-03',
          tags: ['Vélo', 'pâtes', 'Voyage', 'Photo', 'Détermination', 'Italie', 'Slovénie', 'Croatie', 'Monténégro', 'Albanie', 'Grèce','Turquie', 'Iran', 'Turkménistan', 'Ouzbékistan', 'Kirghizistan', 'Chine', 'Laos', 'Cambodge', 'Thaïlande'],
          description: `<p>Voyage à deux en vélo couché de Paris à Bangkok</p>
          Rôles :
          <ul>
            <li>Planification du voyage</li>
            <li>Responsable de l'itinéraire</li>
            <li>Choix des spots de camping</li>
            <li>Réparation et maintenance des vélos</li>
            <li>Motivation de l'équipe</li>
          </ul>
          <p></p>
          <p><a href="https://trikeiteasy.com/" target="_blank">Le blog de notre voyage (TrikeItEasy)</a></p>
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
          description: `<p>Système Règlements était un système de paiement interbancaire interne.</p>
          <p>Développé en langage C, ma mission était de mettre en place une nouvelle architecture basée sur Java et de migrer les batchs les plus critiques.</p>

          Rôle :
          <ul>
            <li>Conception et développement de la nouvelle architecture basée sur Spring batch et Spring Integration</li>
            <li>Mise en place de tests unitaires. Couverture proche de 90%.</li>
            <li>Mise en place d'une intégration continue (CI) ainsi qu'un deploiement continu (CD)</li>
            <li>Migration des batchs C vers Java</li>
            <li>Gestion d'équipe : 8 personnes (5 à Paris et 3 en Inde)</li>
          </ul>
          <p>En raison du niveau critique de cette application, beaucoup d'efforts ont été faits sur les tests unitaires et la non-régression.</p>
          `,
        },
        bnpPrimeBrokerage: {
          icon: 'bank',
          headerColors: ['blue-grey', 'darken-2'],
          location: 'Travaille à distance (équipe à New York)',
          position: 'Ingénieur Java sénior',
          company: 'BNP Paribas',
          start: '2010-03',
          end: '2011-09',
          tags: ['Java', 'Spring', 'Hibernate', 'Gwt', 'Gxt', 'GigaSpace', 'Mule', 'OSWorkflow', 'JUnit', 'Maven'],
          description: `<p>Développement de la prochaine plateforme de Prime Brokerage. Cette plateforme est une fusion des activités européennes et américaines.</p>
          <p>En tant que membre de l'équipe américaine (basée à New York), je travaillais dans un environnement totalement éloigné de Paris.</p>
          Rôle :
          <ul>
            <li>Conception et développement de l'application de capture des trades</li>
            <li>Conception et développement d'une application basée sur Mule (ESB) dont l'objectif était d'intégrer les positions de nombreux systèmes dans la plateforme de Prime Brokerage</li>
            <li>Conception et développement d'une application de monitiring</li>
            <li>Coordination des équipes entre les États-Unis et la France</li>
          </ul>
          `,
        },
        bnpCalpypsoFirst: {
          icon: 'bank',
          headerColors: ['orange', 'darken-2'],
          location: 'Paris (France)',
          position: 'Consultant Calypso',
          company: 'BNP Paribas',
          start: '2007-08',
          end: '2010-03',
          tags: ['Java', 'Calypso', 'Multithreading', 'Performance', 'jUnit', 'Maven', 'Jenkins'],
          description: `<p>Implémentation de Calypso sur le périmètre des titres cotés.</p>
          <p>Arrivé lors des première migrations en production, le logiciel a très rapidement été confronté à des problèmes
          de performances (impossible de traiter les 300K trades / jour).</p>
          <p>Une partie importante de ma mission a consisté à améliorer les performances.</p>
          Rôles:
          <ul>
            <li>Amélioration des performances:
              <ul>
                <li>Conception et développement d'un nouveau système d'intégration des trades (multithreadé)</li>
                <li>Identification des "bottlenecks" de l'application</li>
                <li>Optimisation des reqûetes SQL</li>
                <li>Optimisation de la JVM</li>
                <li>Mise en place d'un framework pour paralleliser les ScheduledTasks</li>
              </ul>
            </li>
            <li>Mise en place de tests unitaires</li>
            <li>Mise en place d'une intégration continue (CI) ainsi qu'un deploiement continu (CD)</li>
            <li>Gestion d'équipe : 4 personnes</li>
          </ul>
          <p></p>
          <p>Au final, Calypso était en mesure d'intégrer plus de 1,5 million de trades / jour</p>
          `,
        },
        calyon: {
          icon: 'bank',
          headerColors: ['pink', 'accent-3'],
          location: 'Paris (France)',
          position: 'Ingénieur Java',
          company: 'Crédit agricole CIB',
          start: '2006-05',
          end: '2007-08',
          tags: ['Java', 'Hibernate', 'Sybase', 'jUnit'],
          description: `<p>Horus était un logiciel in-house qui avait pour but de représenter les montages financiers
          à travers les différents systèmes bancaires.</p>
          Rôles:
          <ul>
            <li>Conception et développement d'un système de rapprochements des opérations avec les autres outils
            back : Calypso, Murex, Summit...</li>
            <li>Refonte de l'application afin d'améliorer les performances</li>
            <li>Mise en place d'un CI et des tests unitaires</li>
            <li>Administration des serveurs de developpement</li>
          </ul>
          `,
        },
        thales: {
          icon: 'plane',
          headerColors: ['primary'],
          location: 'Melbourne (Australie)',
          position: 'Ingénieur Java',
          company: 'Thales ATM',
          start: '2004-11',
          end: '2006-05',
          tags: ['Java', 'OpenGL', 'Multithreading', 'Performances', 'Architecture', 'CI', 'jUnit'],
          description: `<p>Java Human Machine Interface (JHMI) a été un redéveloppement complet de l’interface
          graphique du système de gestion du trafic aérien EUROCAT — nouveaux langages, nouvelles philosophies
          d’interface utilisateur, nouveaux processus.</p>
          <p>Écrite en Java et OpenGL, la JHMI est un système plug'n’play de type commande/contrôle en temps réel.</p>
          <p>Arrivé lors du démarrage du projet, j’ai eu la chance de participer aux fondements de ce logiciel.
          Étant donné le niveau de criticité, une attention toute particulière était apportée sur les tests ainsi que les performances.</p>
          Rôles:
          <ul>
            <li>Conception et développement du "core"</li>
            <li>Conception et développement du framework OpenGL</li>
            <li>Conception et développement de plugins basés sur Eclipse RCP</li>
            <li>Développement d'une application JNI pour interfacer des librairies écrites en C</li>
            <li>Ecriture de tests unitaires</li>
          </ul>
          `,
        }
      }
    },
  },
}


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
      description: `Nicolas COCHIN, lead développeur full stack.
      Son domaine d'expertise : applis back et front, devops, Java, Ruby, Javascript, Typescript, Python.`,
    },
    resume: {
      tooltip: 'Mon CV',
      title: 'Mon CV',
      description: 'CV de Nicolas COCHIN, lead développeur full stack.',
    },
    contact: {
      tooltip: 'Contactez moi',
      title: 'Contactez moi',
      description: 'Prenez contact avec Nicolas COCHIN, lead développeur full stack.',
    },
  },
  home: {
    btn: {
      contact: 'Un petit mail?',
      resume: 'Voir mon cv',
    },
    intro: `<p>Mes {count} années d’expérience m’ont permis d’acquérir une expertise dans le développement logiciel.</p>
    <p>Du développement d’un outil de contrôle aérien, au remplacement d’une solution de paiements d’une BFI, j’ai appris à developper et mettre en place des solutions maintenables et robustes ou très souvent, l’erreur n’est pas permise.</p>
    <p>Mon passage dans le milieu bancaire m’a permis de développer des solutions où la performance est primordiale.</p>
    <p>Dernièrement mes expériences dans le web, m’ont permis d’élargir mes compétences sur de nouveaux langages, frameworks, architectures et nouvelles technologies.</p>
    <p>Au cours de toutes ces expériences, j’ai très souvent été lead developer. J’ai également coaché et encadré des équipes jusqu’à une dizaine de personnes.</p>
    `
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
          tags: ['Lead dev', 'Event driven architecture', 'TDD', 'Ruby', 'Ruby on Rails', 'Websocket', 'Docker', 'Sidekiq', 'PostgreSQL', 'Heroku', 'NuxtJS', 'Vuetify', 'JsonAPI', 'Vue.js', 'CI', 'CD'],
          description: `<p>Helloprêt est un courtier en crédit immobilier 100% digital</p>
          <p>J'ai rejoint Helloprêt, un an après sa création en tant que lead dev. L'ancienne équipe venait de partir. Il fallait donc reprendre le back-end (développé en PHP) qui souffrait de gros problèmes de lenteur et le faire évoluer pour répondre aux besoins du business.</p>
          <dl>
            <dt>Reprise de l'existant</dt>
            <dd>
              <p>L'application existante avait quelques lacunes : front et back sur la même application (impossible de scaler), pas d'environnement de staging, ni de tests unitaires et pas de CI/CD. J'ai donc pris la décision de refaire l'existant en séparant le back-end du front-end.</p>
              <p>Le <strong>back-end</strong> à été developpé en Ruby on Rails afin d'avoir des itération rapides. Rspec pour les tests unitaires (couverture de tests proche de 100%).</p>
              <p>Côté <strong>front-end</strong>, 2 applications ont été développées : une pour le front public et une autre pour le back-end des brokers. Les 2 applications ont été developpées en Vue.js</p>
              <p>Pour le back, comme pour les applis front, un CI/CD à été mis en place, ainsi que des environnements de staging et des review apps. La communication entre le front et le back se fait via JsonAPI (<a href="https://www.graphiti.dev/" target="_blank">Graphiti</a>)</p>
            </dd>
            <dt>Évolution de l'application.</dt>
            <dd>
              <ul>
                <li>Mise en place d'une architecture basée sur les events afin de pouvoir facilement modifier le backend avec un minimum d'impact</li>
                <li>Mise en place de websockets afin d'avoir des retours en temps réel côté front</li>
                <li>Intégration de différentes solutions tiers: Calendly, Vialink, Docusign, Twilio, Microsoft outlook, Mandrill, Autho....</li>
                <li>Intégration de 2 autres développeurs en full-remote</li>
              </ul>
            </dd>
          </dl>
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
          tags: ['Lead dev', 'Ruby', 'Ruby on Rails', 'Sidekiq', 'TDD', 'Hadoop', 'Hive', 'PostgreSQL', 'PrestoDB', 'Google Ads', 'Bing Ads', 'Facebook Ads', 'Heroku', 'GCP', 'Kubernetes', 'Helm', 'Terraform', 'Infrastructure as Code', 'CI', 'CD'],
          description: `<p>Effilab est une agence spécialisée dans le marketing digital.</p>
          <p>Arrivé au sein d'une équipe de 12 développeurs, j'ai eu plusieurs missions :</p>
          <ul>
            <li>Mettre en place un data warehouse avec une solution permettant de requêter l'historique Google et Bing.</li>
            <li>Mettre en place une nouvelle application permettant de publier des annonces sur Facebook</li>
            <li>Migrer toutes les applications d'OVH/Heroku vers Google Cloud Plateform (GCP) en utilisant Google Kubernetes Engine (GKE)</li>
          </ul>
          <dl style="margin-top: 10px">
            <dt>Mise en place du data warehouse</dt>
            <dd>
              <p>La directive que j'avais était de requeter Google et Bing pour récupérer l'historique et de ne pas modifier ces données. Nous sommes donc partis sur une solution basée sur Hadoop et Hive.</p>
              <p>La partie traitement des données se faisait par le business à travers Metabase qui était pluggé sur un presto DB lui-même pluggé sur Hive</p>
              <ul>
                <li>Mise en place de Hadoop et Hive</li>
                <li>Développement des batchs pour récupérer quotidiennement l'historique Google et Bing</li>
                <li>Mise en place de PrestoDB et connexion à Metabase</li>
              </ul>
            </dd>
            <dt>Développement de l'application Facebook</dt>
            <dd>
              <p>Le but de cette application était de gérer les campagnes des clients via une feuille Google Sheet</p>
              <ul>
                <li>Lead dev sur l'application ruby on rails.</li>
                <li>Mise en place d'un système de synchronisation des campagnes FB afin d'être le plus rapide possible</li>
                <li>Publication et mise à jour des publicités et pages FB des clients</li>
                <li>Mise en place d'un système de récupération de l'historique pour le data warehouse</li>
                <li>Mise en place d'un CI / CD avec une couverture de tests proche de 100%</li>
                <li>Encadrement de 3 personnes en full-remote</li>
              </ul>
            </dd>
            <dt>Migration vers GKE</dt>
            <dd>
              <p>Le but était d'uniformiser les déploiements des applications</p>
              <ul>
                <li>Création des clusters via terraform</li>
                <li>Construction des packages kubernetes via Helm</li>
                <li>Déploiement automatique sur GKE</li>
                <li>Encadrement d'une dizaine de personnes en full-remote</li>
              </ul>
            </dd>
            <dt style="margin-top: 20px">Bilan</dt>
            <dd>
              <ul>
                <li>Pour le data warehouse, la directive de vouloir garder les résultats de Google et Bing dans des fichiers a demander une grosse infrastructure assez complexe à maintenir. Pour l'application FB, j'ai proposé de stocker les résultats dans PG (dans des tables partitionnées). Cette solution est beaucoup plus simple à maintenir, plus faible en coût d'infra et plus performante.</li>
                <li>L'application FB à permis, dès sa mise en production, de gérer des centaines de comptes client par utilisateurs back, sans jamais avoir à se connecter à Facebook. La synchronisation avec FB est quasi instantanée.</li>
                <li>Toutes les applications ont maintenant un déploiement similaire</li>
              </ul>
            </dd>
          </dl>
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
          tags: ['Java', 'Lead dev', 'Hibernate', 'JMS', 'TDD', 'JUnit', 'Maven', 'KSH', 'Oracle', 'Calypso', 'Jenkins', 'CI', 'CD'],
          description: `<p>Projet Calypso</p>
          <p>Calypso est un progiciel de finance utilisé à la BNP pour gérer les produits listés. Une des particularités de ce projet est que la base de données (Oracle) est très volumineuse : plusieurs Teras (10 à l'époque). Ma mission était d'optimiser les scheduled tasks ainsi que de rendre la suite de tests fonctionnels plus rapide et idempotent.</p>
          <ul>
            <li>Etude des scénarios pour trouver les dépendances et effets de bords</li>
            <li>Optimisation du rafraîchissement de la base de données utilisée par l'outil de non-régression</li>
            <li>Refonte des Scheduled tasks afin de paralléliser les traitements</li>
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
          tags: ['Ruby', 'Ruby on Rails', 'Lead dev', 'Coaching', 'Rspec', 'Sidekiq', 'Docker', 'AWS', 'Heroku', 'Javascript', 'API REST', 'Coffeescript', 'Bootstrap', 'MySQL', 'PostgreSQL', 'Capistrano', 'TDD', 'CI', 'CD'],
          description: `<p>Prium Solutions est une société d’ingénierie d’applications Web et Mobile</p>
          <p>En tant que lead developer, j'ai participé aux développements d'applications web de la phase d'étude du besoin à la maintenance du projet. J'ai également encadré une équipe de 6 développeurs Ruby on Rails.</p>
          <ul>
            <li>Étude du besoin avec le client</li>
            <li>Proposition d'une solution</li>
            <li>Conception et développement d'applications Ruby on Rails</li>
            <li>Mise en production</li>
            <li>Maintenance d'applications</li>
            <li>Mise en place de CI / CD</li>
            <li>Encadrement de 6 développeurs</li>
            <li>Coaching TDD, XP programming...</li>
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
          description: `<p>Break professionnel: voyage à deux en vélo couché de Paris à Bangkok</p>
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
          tags: ['Java', 'JEE', 'Spring', 'Spring Batch', 'Spring Integration', 'JTA', 'MQSeries', 'Hibernate', 'JMS', 'JUnit', 'Maven', 'KSH', 'Oracle 10g', 'Jenkins', 'CI', 'CD'],
          description: `<p>Système Règlements (SR) est un système de paiement interbancaire interne.</p>
          <p>Au sein d'une équipe composée d'une dizaine de personnes, ma mission était de migrer des batchs développés en C vers une nouvelle architecture plus simple, plus robuste et plus facile à maintenir en Java. SR était une application ultra-critique de la banque (450 milliards d'euros / jours)</p>

          <dl style="margin-top: 10px">
            <dt>Développement de la nouvelle solution</dt>
            <dd>
              <p>Au vu de l'existant et la criticité du projet, j'ai décidé de garder le système de batch (qui répondaient bien au besoin) pour les migrer vers spring batch. Les nouveaux développements, eux, ne fonctionnaient pas en mode batch mais en temps réel.</p>
              <ul>
                <li>Étude de la solution la plus adaptée</li>
                <li>Conception et développement de la nouvelle architecture basée sur Spring batch et Spring Integration</li>
                <li>Mise en place de tests unitaires. Couverture proche de 90%.</li>
                <li>Mise en place d'une intégration continue (CI) ainsi qu'un déploiement continu (CD)</li>
                <li>Migration des batchs C vers la nouvelle architecture en Java</li>
                <li>Migration de la base Oracle</li>
                <li>Gestion d'équipe : 8 personnes (5 à Paris et 3 en Inde)</li>
              </ul>
            </dd>
            <dt style="margin-top: 20px">Bilan</dt>
            <dd>
              <ul>
                <li>Étant donné la criticité du projet, une grosse partie du travail à été de mettre en place des tests (unitaires, intégration, non-régression..). Aucun test n'éxistait sur la plateforme en C. De même, la mise en place d'un CI/CD à permis de dégager du temps de dev et de minimiser les erreurs humaines</li>
                <li>La migration des batchs s'est faite au fil de l'eau avec un taux d'erreur proche de 0%.</li>
              </ul>
            </dd>
          </dl>
          `,
        },
        bnpPrimeBrokerage: {
          icon: 'bank',
          headerColors: ['blue-grey', 'darken-2'],
          location: 'Travaille à distance (équipe à New York)',
          position: 'Ingénieur Java senior',
          company: 'BNP Paribas',
          start: '2010-03',
          end: '2011-09',
          tags: ['Java', 'JEE', 'Spring', 'Hibernate', 'Gwt', 'Gxt', 'GigaSpace', 'Oracle', 'Mule', 'ESB', 'Calypso', 'OSWorkflow', 'JUnit', 'Maven', 'CI', 'CD'],
          description: `<p>Au sein d'une équipe de 15 personnes basée à New York, j'ai participé, en remote à Paris, au développement de la prochaine plateforme de Prime Brokerage. Cette plateforme est une fusion des activités européennes et américaines.</p>
          <p>Une partie de ma mission était d'implémenter les nouvelles fonctionnalités dans l'application américaine ainsi que de coordonner les équipes parisiennes pour s'interfacer avec les applications US.</p>
          <p>J'ai également participé aux développements de deux applications Java (du désign à la mise en prod et maintenance).</p>
          <dl style="margin-top: 10px">
            <dt>Implémentation des nouvelles fonctionnalités dans l'application US</dt>
            <dd>
              <ul>
                <li>Implémentation de nouvelles fonctionnalités</li>
                <li>Support</li>
                <li>Coordination d'équipes</li>
                <li>Tests d'intégration entre équipes</li>
                <li>Parallel runs international</li>
              </ul>
            </dd>
            <dt>Implémentation d'une application d'import des positions</dt>
            <dd>
              <ul>
                <li>Étude et proposition d'architecture</li>
                <li>Implémentation de l'application basée sur Mule (ESB) et GXT / GWT</li>
                <li>Intégration de l'application dans le framework US</li>
                <li>CI / CD</li>
                <li>Tests unitaires</li>
              </ul>
            </dd>
            <dt>Implémentation d'une application de monitoring</dt>
            <dd>
              <ul>
                <li>Étude et proposition d'architecture</li>
                <li>Implémentation de l'application basée GWT / GXT</li>
                <li>Intégration de l'application dans le framework US</li>
                <li>CI / CD</li>
                <li>Tests unitaires</li>
              </ul>
            </dd>
          </dl>
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
          tags: ['Java', 'JEE', 'Calypso', 'Multithreading', 'Performance', 'jUnit', 'Maven', 'Jenkins', 'CI', 'CD', 'Oracle'],
          description: `<p>Implémentation de Calypso sur le périmètre des produits listés.</p>
          <p>J'ai intégré l'équipe lors de sa mise en production qui remplaçait une application vieillissante. Lors des premières bascules, l'application a été confrontée à d'énormes problèmes
          de performances (impossible de traiter les 300K trades / jour).</p>
          <p>Une grande partie de ma mission a consisté à stabiliser l'application et améliorer les performances globales.</p>
          <dl style="margin-top: 10px">
            <dt>Amélioration des performances</dt>
            <dd>
              <ul>
                <li>Conception d'un nouveau système d'intégration des trades (multithreadé)</li>
                <li>Identification des "bottlenecks" de l'application</li>
                <li>Optimisation des requêtes SQL</li>
                <li>Optimisation de la JVM</li>
                <li>Conception d'un framework pour paralléliser les ScheduledTasks</li>
                <li>Refonte de tâches existantes pour afin de les rendre plus performantes</li>
              </ul>
            </dd>
            <dt>Industrialisation des process</dt>
            <dd>
              <p>Lors de mon arrivée sur le projet, il n'y avait aucun test unitaire. De plus, il fallait environ une 1/2 journée pour déployer l'application sur un environnement.
              Tout était fait à la main. Afin d'éviter les erreurs humaines et libérer du temps de dev, j'ai mis en place une intégration continue, ainsi qu'un déploiement continu.</p>
              <ul>
                <li>Refonte totale du process de packaging de l'application afin que tout soit automatique et puisse rentrer dans un serveur d'intégration</li>
                <li>Mise en place du serveur d'intégration</li>
                <li>Mise en place du déploiement continu</li>
                <li>Maintenance des serveurs de tests : dev et staging</li>
                <li>Mise en place de tests unitaires</li>
              </ul>
            </dd>
            <dt style="margin-top: 20px">Bilan</dt>
            <dd>
              <p>Au final, Calypso était une application stable et en mesure d'intégrer plus de 1,5 million de trades / jour.</p>
            </dd>
          </dl>
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
          tags: ['Java', 'JEE', 'Hibernate', 'Sybase', 'jUnit', 'CI'],
          description: `<p>Horus était un logiciel in-house qui avait pour but de représenter les montages financiers
          à travers les différents systèmes bancaires.</p>
          <p>Ma mission principale était de mettre en place un outil de réconciliation afin de matcher les informations internes avec les différents systèmes back</p>
          <ul>
            <li>Conception d'un système de rapprochements des opérations en Java</li>
            <li>Refonte de l'application afin d'améliorer les performances</li>
            <li>Mise en place d'un CI et des tests unitaires</li>
            <li>Administration des serveurs de développement</li>
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
          <p>Les pratiques agiles (daily scrum, sprint, backlog..) et Xtrem Programming (Pair programming, intégration continue, tests unitaires, refactoring, TDD) étaient déjà utilisées sur ce projet.</p>
          <ul>
            <li>Conception et développement du "core"</li>
            <li>Conception et développement du framework OpenGL</li>
            <li>Conception et développement de plugins basés sur Eclipse RCP</li>
            <li>Développement d'une application JNI pour interfacer des librairies écrites en C</li>
            <li>Mise en place de la machine test basée sur RedHat avec écrans 4k</li>
            <li>Écriture de tests unitaires</li>
          </ul>
          <dl>
            <dt style="margin-top: 20px">Bilan</dt>
            <dd>
              <p>Participer à un projet d'une telle envergure (très longue durée de vie, déploiements internationaux, forte criticité, temps réel...) a été une vraie chance pour moi.<br />
              J'y ai pu découvrir et acquérir les bonnes pratiques essentielles au bon développement d'un(e) logiciel/application. Pratiques que j'ai toujours essayé de ramener sur mes projets futurs.
              </p>
            </dd>
          </dl>
          `,
        }
      }
    },
  },
}

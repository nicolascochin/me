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
      description: `Nicolas COCHIN, lead developer full stack.
      His area of expertise: back and front applications, devops, Java, Ruby, Javascript, Typescript, Python.`,
    },
    resume: {
      tooltip: 'My resume',
      title: 'My resume',
      description: `Nicolas COCHIN's resume full stack lead developer.`,
    },
    contact: {
      tooltip: 'Contact me',
      title: 'Contact me',
      description: "Get in touch with Nicolas COCHIN, full stack lead developer.",
    },
  },
  home: {
    btn: {
      contact: 'An email?',
      resume: 'See my resume',
    },
    intro: `<p>My {count} years of experience have allowed me to acquire expertise in software development.</p>
    <p>From the development of an air traffic control tool, to the replacement of a Investment banking payment solution, I have learned how to develop and implement maintainable and robust solutions where very often, error is not allowed.</p>
    <p>My experience in the banking industry has allowed me to develop solutions where performance is paramount.</p>
    <p>My last experiences in the web has allowed me to broaden my skills on new languages, frameworks, architectures and new technologies.</p>
    <p>During all these experiences, I was often lead developer. I have also coached and supervised teams of up to ten people.</p>
    `
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
          tags: ['Lead dev', 'Event driven architecture', 'TDD', 'Ruby', 'Ruby on Rails', 'Websocket', 'Docker', 'Sidekiq', 'PostgreSQL', 'Heroku', 'NuxtJS', 'Vuetify', 'JsonAPI', 'Vue.js', 'CI', 'CD'],
          description: `<p>Helloprêt is a 100% digital real estate credit broker.</p>
          <p>I joined Helloprêt one year after its creation as lead dev. The old team had just left. So I had to take over the back-end (developed in PHP) which was suffering from big problems of slowness and make it evolve to meet the needs of the business.</p>
          <dl>
            <dt>Takeover of the existing</dt>
            <dd>
              <p>The existing application had some shortcomings: front and back on the same application (impossible to scale), no staging environment, no unit tests and no CI/CD. So I decided to rebuild the existing application by separating the back end from the front end.</p>
              <p>The back-end has been developed in Ruby on Rails in order to have fast iterations. Rspec for unit tests (near 100% test coverage).</p>
              <p>On the front-end side, 2 applications have been developed: one for the public frontend and another one for the brokers back-end. Both applications have been developed in Vue.js.</p>
              <p>For the back end, as for the front end applications, a CI/CD has been set up, as well as staging environments and review apps. The communication between the front and the back is done via JsonAPI (<a href="https://www.graphiti.dev/" target="_blank">Graphiti</a>).</p>
            </dd>
            <dt>Evolution of the application</dt>
            <dd>
              <ul>
                <li>Implementation of an event-based architecture in order to be able to easily modify the backend with a minimum of impact.</li>
                <li>Setting up websockets to get real-time feedback on the front side of the system.</li>
                <li>Integration of various third-party solutions: Calendly, Vialink, Docusign, Twilio, Microsoft outlook, Mandrill, Autho...</li>
                <li>Management of 2 other developers in full-remote</li>
              </ul>
            </dd>
          </dl>
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
          tags: ['Lead dev', 'Ruby', 'Ruby on Rails', 'Sidekiq', 'TDD', 'Hadoop', 'Hive', 'PostgreSQL', 'PrestoDB', 'Google Ads', 'Bing Ads', 'Facebook Ads', 'Heroku', 'GCP', 'Kubernetes', 'Helm', 'Terraform', 'Infrastructure as Code', 'CI', 'CD'],
          description: `<p>Effilab is a web agency specialized in digital marketing.</p>
          <p>Arrived in a team of 12 developers, I had several missions:</p>
          <ul>
            <li>Set up a data warehouse with a solution to query Google and Bing history.</li>
            <li>Set up a new application to publish ads on Facebook.</li>
            <li>Migrate all applications from OVH/Heroku to Google Cloud Platform (GCP) using Google Kubernetes Engine (GKE)</li>
          </ul>
          <dl style="margin-top: 10px">
            <dt>Setting up the data warehouse</dt>
            <dd>
              <p>The directive I had was to request Google and Bing to retrieve the history and not to modify this data. So we went for a solution based on Hadoop and Hive.</p>
              <p>The data processing part was done by the business through Metabase which was plugged on PrestoDB plugged on Hive.</p>
              <ul>
                <li>Setting up Hadoop and Hive</li>
                <li>Development of batchs to retrieve daily Google and Bing history</li>
                <li>Setting up PrestoDB and connecting to Metabase</li>
              </ul>
            </dd>
            <dt>Development of the Facebook application</dt>
            <dd>
              <p>The purpose of this application was to manage customer campaigns via a Google Sheet</p>
              <ul>
                <li>Lead dev on the ruby on rails application.</li>
                <li>Implementation of a synchronization system for FB campaigns in order to be as fast as possible</li>
                <li>Publication and updating of customer advertisements and FB pages</li>
                <li>Implementation of a history retrieval system for the data warehouse</li>
                <li>Implementation of a CI / CD with a test coverage close to 100%</li>
                <li>Management of 3 people in full-remote</li>
              </ul>
            </dd>
            <dt>GKE migration</dt>
            <dd>
              <p>The goal was to standardize application deployments.</p>
              <ul>
                <li>Cluster creation via terraform</li>
                <li>Construction of kubernete packages via Helm</li>
                <li>Automatic deployment on GKE</li>
                <li>Supervision of a dozen people in full-remote</li>
              </ul>
            </dd>
            <dt style="margin-top: 20px">Results</dt>
            <dd>
              <ul>
                <li>For the data warehouse, the directive to want to keep the results of Google and Bing in files has required a large infrastructure quite complex to maintain. For the FB application, I proposed to store the results in PG (in partitioned tables). This solution is much simpler to maintain, lower in infra cost and more performant.</li>
                <li>The FB application has allowed, since its production launch, to manage hundreds of client accounts per back users, without ever having to connect to Facebook. Synchronization with FB is almost instantaneous.</li>
                <li>All applications now have a similar deployment.</li>
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
          description: `<p>Calypso Project</p>
          <p>Calypso is a finance software application used at BNP to manage the listed products. One of the particularities of this project is that the database (Oracle) is very large: several Teras (10 at the time). My mission was to optimize the scheduled tasks as well as to make the functional test suite faster and idempotent.</p>
          <ul>
            <li>Study of scenarios to find dependencies and side effects</li>
            <li>Optimization of the refresh of the database used by the non-regression tool</li>
            <li>Refactoring of Scheduled tasks in order to parallelise the treatments</li>
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
          tags: ['Ruby', 'Ruby on Rails', 'Lead dev', 'Coaching', 'Rspec', 'Sidekiq', 'Docker', 'AWS', 'Heroku', 'Javascript', 'API REST', 'Coffeescript', 'Bootstrap', 'MySQL', 'PostgreSQL', 'Capistrano', 'TDD', 'CI', 'CD'],
          description: `<p>Prium Solutions is a Web and Mobile application engineering company.</p>
          <p>As a lead developer, I participated in the development of web applications from the needs analysis phase to project maintenance. I also managed a team of 6 Ruby on Rails developers.</p>
          <ul>
            <li>Needs analysis with the client</li>
            <li>Proposal of a solution</li>
            <li>Design and development of Ruby on Rails applications</li>
            <li>Production releases</li>
            <li>Applications maintenance</li>
            <li>Setup CI / CD</li>
            <li>Management of 6 developers</li>
            <li>TDD coaching, XP programming...</li>
          </ul>
          `,
        },
        TrikeItEasy: {
          icon: 'bicycle',
          headerColors: ['green', 'darken-1'],
          location: 'Somewhere between Paris and Bangkok',
          position: 'Career break : Bike trip',
          subtitle: 'From Paris to Bangkok',
          company: 'TrikeItEasy',
          start: '2014-03',
          end: '2015-03',
          tags: ['Bike', 'pasta', 'travel', 'Photo', 'Determination', 'Italy', 'Slovenia', 'Croatia', 'Montenegro', 'Albania', 'Greece','Turkey', 'Iran', 'Turkmenistan', 'Uzbekistan', 'Kyrgyzstan', 'China', 'Laos', 'Cambodia', 'Thailand'],
          description: `<p>Career break: trip for two on a recumbent bike from Paris to Bangkok</p>
          <ul>
            <li>Planning the trip</li>
            <li>Responsible for the itinerary</li>
            <li>Choice of camping spots</li>
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
          tags: ['Java', 'JEE', 'Spring', 'Spring Batch', 'Spring Integration', 'JTA', 'MQSeries', 'Hibernate', 'JMS', 'JUnit', 'Maven', 'KSH', 'Oracle 10g', 'Jenkins', 'CI', 'CD'],
          description: `<p>Système Règlements (SR) is an internal interbank payment system.</p>
          <p>Within a team of about ten people, my mission was to migrate batches developed in C to a new architecture that was simpler, more robust and easier to maintain in Java. SR was an ultra-critical application of the bank (450 billion euros / days).</p>

          <dl style="margin-top: 10px">
            <dt>Implementation of the new solution</dt>
            <dd>
              <p>Given the existing and criticality of the project, I decided to keep the batch system (which responded well to the need) to migrate them to spring batch. The new developments were not running in batch mode but in real time.</p>
              <ul>
                <li>Study of the most suitable solution</li>
                <li>Design and development of the new architecture based on Spring Batch and Spring Integration</li>
                <li>Implementation of unit tests. Coverage close to 90%.</li>
                <li>Setup a continuous integration (CI) as well as continuous deployment (CD).</li>
                <li>Migration of C batchs to the new architecture in Java</li>
                <li>Oracle database migration</li>
                <li>Team management: 8 people (5 in Paris and 3 in India)</li>
              </ul>
            </dd>
            <dt style="margin-top: 20px">Results</dt>
            <dd>
              <ul>
                <li>Given the criticality of the project, a big part of the work was to set up tests (unitary, integration, non-regression...). No test existed on the C platform. Similarly, the implementation of a CI/CD allowed to free up dev time and minimize human errors.</li>
                <li>The migration of the batches was done on the fly with an error rate close to 0%.</li>
              </ul>
            </dd>
          </dl>
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
          tags: ['Java', 'JEE', 'Spring', 'Hibernate', 'Gwt', 'Gxt', 'GigaSpace', 'Oracle', 'Mule', 'ESB', 'Calypso', 'OSWorkflow', 'JUnit', 'Maven', 'CI', 'CD'],
          description: `<p>As part of a team of 15 people based in New York, I took part, remotely in Paris, in the development of the next Prime Brokerage platform. This platform is a merger of the European and American activities.</p>
          <p>Part of my mission was to implement the new functionalities in the US application and to coordinate the Parisian teams to interface with the US applications.</p>
          <p>I also participated in the development of two Java applications (from design to production and maintenance).</p>
          <dl style="margin-top: 10px">
            <dt>Implementation of new functionalities in the US application</dt>
            <dd>
              <ul>
                <li>Implementation of new functionalities</li>
                <li>Support</li>
                <li>Team coordination</li>
                <li>Integration tests between teams</li>
                <li>International parallel runs</li>
              </ul>
            </dd>
            <dt>Implementing a position import applicatio</dt>
            <dd>
              <ul>
                <li>Architectural study and proposal</li>
                <li>Implementation of the application based on Mule (ESB) and GXT / GWT</li>
                <li>Integration of the application in the US framework</li>
                <li>CI / CD</li>
                <li>Unit tests</li>
              </ul>
            </dd>
            <dt>Implementation of a monitoring application</dt>
            <dd>
              <ul>
                <li>Architectural study and proposal</li>
                <li>Implementation of the GWT / GXT based application</li>
                <li>Integration of the application in the US framework</li>
                <li>CI / CD</li>
                <li>Unit tests</li>
              </ul>
            </dd>
          </dl>
          `,
        },
        bnpCalpypsoFirst: {
          icon: 'bank',
          headerColors: ['orange', 'darken-2'],
          location: 'Paris (France)',
          position: 'Calypso consultant',
          company: 'BNP Paribas',
          start: '2007-08',
          end: '2010-03',
          tags: ['Java', 'JEE', 'Calypso', 'Multithreading', 'Performance', 'jUnit', 'Maven', 'Jenkins', 'CI', 'CD', 'Oracle'],
          description: `<p>Implementation of Calypso on the perimeter of the listed products.</p>
          <p>I joined the team when it went into production to replace an aging application. During the first failovers, the application faced huge performance issues (impossible to process 300K trades / day).</p>
          <p>A large part of my mission was to stabilize the application and improve overall performance.</p>
          <dl style="margin-top: 10px">
            <dt>Performance improvement</dt>
            <dd>
              <ul>
                <li>Refactoring the trade integration system (multithreaded)</li>
                <li>Identification of the application's bottlenecks</li>
                <li>SQL query optimization</li>
                <li>JVM optimization</li>
                <li>Design a new framework to run ScheduledTasks in a multithreaded environment</li>
                <li>Refactoring existing tasks to make them more efficient</li>
              </ul>
            </dd>
            <dt>Industrialization of processes</dt>
            <dd>
              <p>When I joined the project, there was no unit test. Moreover, it took about half a day to deploy the application on an environment. Everything was done by hand. In order to avoid human error and free up dev time, I implemented continuous integration and continuous deployment.</p>
              <ul>
                <li>Rewrite of the packaging process of the application so that everything is automatic and can fit into an integration server.</li>
                <li>Setup the integration server</li>
                <li>Setup the continuous deployment</li>
                <li>Test server maintenance: dev and staging</li>
                <li>Implementation of unit tests</li>
              </ul>
            </dd>
            <dt style="margin-top: 20px">Results</dt>
            <dd>
              <p>In the end, Calypso was a stable application that was able to integrate more than 1.5 million trades per day.</p>
            </dd>
          </dl>
          `,
        },
        calyon: {
          icon: 'bank',
          headerColors: ['pink', 'accent-3'],
          location: 'Paris (France)',
          position: 'Java engineer',
          company: 'Crédit agricole CIB',
          start: '2006-05',
          end: '2007-08',
          tags: ['Java', 'JEE', 'Hibernate', 'Sybase', 'jUnit', 'CI'],
          description: `<p>Horus was an in-house software that aimed to represent the financial arrangements through the different banking systems.</p>
          <p>My main mission was to set up a reconciliation tool in order to match the internal information with the different back office systems.</p>
          <ul>
            <li>Design of an operations reconciliation system in Java</li>
            <li>Refactoring the application to improve performance</li>
            <li>Setup a CI and unit tests</li>
            <li>Administration of development servers</li>
          </ul>
          `,
        },
        thales: {
          icon: 'plane',
          headerColors: ['primary'],
          location: 'Melbourne (Australie)',
          position: 'Java engineer',
          company: 'Thales ATM',
          start: '2004-11',
          end: '2006-05',
          tags: ['Java', 'OpenGL', 'Multithreading', 'Performances', 'Architecture', 'CI', 'jUnit'],
          description: `<p>Java Human Machine Interface (JHMI) was a complete redevelopment of the graphical user interface of the EUROCAT air traffic management system - new languages, new user interface philosophies, new processes.</p>
          <p>Written in Java and OpenGL, the JHMI is a plug'n'play real-time command/control system.</p>
          <p>Arrived at the beginning of the project, I had the chance to build the foundations of this software. Given the level of criticality, special attention was given to testing and performance.</p>
          <p>Agile practices (daily scrum, sprint, backlog...) and Xtrem Programming (Pair programming, continuous integration, unit tests, refactoring, TDD) were already used on this project.</p>
          <ul>
            <li>Core design and development</li>
            <li>Design and development of the OpenGL framework</li>
            <li>Design and development of plugins based on Eclipse RCP</li>
            <li>Development of a JNI application to interface libraries written in C</li>
            <li>Setting up the RedHat based test machine with 4k screens</li>
            <li>Unit tests</li>
          </ul>
          <dl>
            <dt style="margin-top: 20px">Results</dt>
            <dd>
              <p>Beeing part of a project of such a scale (very long lifespan, international deployments, high criticality, real time...) was a real chance for me.<br />
              I was able to discover and acquire the best practices essential to the good development of a software/application. Practices that I always tried to bring back on my future projects.
              </p>
            </dd>
          </dl>
          `,
        }
      }
    },
  },
}

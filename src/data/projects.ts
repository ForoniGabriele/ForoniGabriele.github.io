export type Project = {
  slug: string
  title: string
  subtitle: string
  period: string
  description: string
  summary: string
  context: string
  objective: string
  responsibilities: string[]
  highlights: string[]
  stack: string[]
  outcome: string[]
  securityNotes?: string[]
}

export const projects: Project[] = [
  {
    slug: 'ai-devsecops-runtime-remediation',
    title: 'AI DevSecOps Runtime & Remediation Platform',
    subtitle: 'Case study Webranking',
    period: '2026',
    description:
      'Progetto sviluppato durante lo stage per esplorare automazione DevSecOps, triage runtime e remediation assistita da AI su AWS.',
    summary:
      'Una piattaforma sperimentale che raccoglie finding di sicurezza e incidenti runtime, salva evidenze, cataloga problemi e produce analisi assistite da AI con remediation proposta tramite pull request separata.',
    context:
      'Il progetto nasce in un contesto formativo e controllato durante lo stage in Webranking. L\'obiettivo era costruire un flusso tracciabile per capire, catalogare e proporre interventi su finding di sicurezza e segnali runtime.',
    objective:
      'Creare un sistema DevSecOps end-to-end capace di collegare scanner, CloudWatch, Sentry, New Relic, storage evidenze, catalogo problemi e generazione controllata di remediation.',
    responsibilities: [
      'Definizione dell\'infrastruttura AWS con Pulumi tramite Python.',
      'Integrazione di scanner e pipeline CI/CD per normalizzare i finding.',
      'Gestione delle evidenze in S3 e catalogazione dei problemi in DynamoDB.',
      'Integrazione con Amazon Bedrock per summary e triage assistito da AI.',
      'Configurazione di allarmi CloudWatch, EventBridge, SNS e tuning anti-rumore sulle notifiche runtime.',
      'Documentazione tecnica del flusso, dei guardrail e delle parti operative.',
    ],
    highlights: [
      'Separazione tra remediation automatica proposta e review umana obbligatoria.',
      'Evidenze runtime salvate e redatte prima dell\'utilizzo in analisi AI.',
      'Catalogo problemi riusabile per correlare incidenti e finding futuri.',
      'Allarmi CloudWatch configurati con soglie più sostenibili per ridurre spam operativo.',
    ],
    stack: ['AWS', 'Pulumi', 'Python', 'Amazon Bedrock', 'S3', 'DynamoDB', 'CloudWatch', 'EventBridge', 'SNS', 'CodeBuild'],
    outcome: [
      'Pipeline e infrastruttura documentate in Markdown.',
      'Flusso di triage runtime capace di notificare incidenti e allegare evidenze.',
      'Remediation proposta tramite branch e pull request separata, senza merge automatico.',
    ],
  },
  {
    slug: 'webapp-iac-aws',
    title: 'Webapp + IaC AWS',
    subtitle: 'Architettura cloud',
    period: 'giu 2026 - set 2026',
    description:
      'Architettura AWS multi-regione per una libreria online, con focus su automazione, sicurezza e disaster recovery.',
    summary:
      'Una webapp progettata insieme a un\'infrastruttura AWS definita come codice, con pipeline automatizzate, controlli security e strategia di disaster recovery tra regioni.',
    context:
      'Il progetto è stato pensato per esercitare competenze cloud reali: IaC, ambienti replicabili, deploy automatizzati, gestione dei fallback e documentazione operativa.',
    objective:
      'Costruire un\'architettura cloud multi-regione per una libreria online, mantenendo il deployment ripetibile e verificabile tramite pipeline.',
    responsibilities: [
      'Progettazione dell\'architettura AWS multi-regione.',
      'Scrittura dell\'infrastruttura con Pulumi tramite Python.',
      'Configurazione di pipeline GitHub Actions con test, security scan e deploy.',
      'Script di failover e procedure di disaster recovery.',
      'Documentazione completa in Markdown.',
    ],
    highlights: [
      'Infrastructure as Code con configurazione versionata.',
      'Disaster recovery tra eu-north-1 ed eu-central-1.',
      'Pipeline eseguita a ogni commit con controlli automatici.',
    ],
    stack: ['AWS', 'Pulumi', 'Python', 'GitHub Actions', 'Security scanning'],
    outcome: [
      'Architettura replicabile e documentata.',
      'Deploy automatizzato tramite CI/CD.',
      'Procedure operative più chiare per test, sicurezza e failover.',
    ],
  },
  {
    slug: 'sito-iscrizione-atleti',
    title: 'Sito iscrizione e tesseramento atleti',
    subtitle: 'Web application',
    period: 'apr 2025 - presente',
    description:
      'Piattaforma per gestire iscrizioni, dati degli atleti, dati dei genitori, documenti PDF e ricevute di pagamento.',
    summary:
      'Una webapp gestionale nata per semplificare il lavoro amministrativo di una società sportiva, trasformando moduli manuali e ricevute in un flusso digitale più ordinato.',
    context:
      'La società aveva bisogno di raccogliere dati anagrafici e amministrativi in modo più efficiente, generare documenti pronti per stampa e firma, e gestire le ricevute dei pagamenti.',
    objective:
      'Ridurre lavoro manuale e errori nella raccolta dati, producendo documenti PDF e ricevute in modo automatico.',
    responsibilities: [
      'Sviluppo dei form HTML per atleti e genitori.',
      'Collegamento dei dati a un database.',
      'Generazione automatica di documenti PDF per stampa e firma.',
      'Realizzazione di una pagina dedicata alla gestione delle ricevute.',
    ],
    highlights: [
      'Digitalizzazione di un flusso amministrativo ripetitivo.',
      'Generazione documenti pronti per consegna fisica.',
      'Migliore organizzazione delle ricevute di pagamento.',
    ],
    stack: ['PHP', 'HTML',  'Database', 'PDF generation', 'Automazione'],
    outcome: [
      'Compilazione più rapida dei documenti.',
      'Riduzione degli errori manuali.',
      'Processo più ordinato per iscrizioni e pagamenti.',
    ],
  },
  {
    slug: 'monitoraggio-router-mikrotik',
    title: 'Monitoraggio router Mikrotik',
    subtitle: 'Networking',
    period: '2025',
    description:
      'Sistema PHP per monitorare router Mikrotik aziendali e supportare la gestione operativa dell\'infrastruttura di rete.',
    summary:
      'Un sistema di monitoraggio orientato all\'operatività, affiancato dalla documentazione dell\'infrastruttura tramite NetBox.',
    context:
      'Durante l\'esperienza come sistemista ho lavorato su strumenti utili per avere maggiore visibilità sui router aziendali e mantenere ordinata la documentazione di rete.',
    objective:
      'Rendere più semplice il controllo dello stato dei router e la consultazione delle informazioni infrastrutturali.',
    responsibilities: [
      'Sviluppo di un sistema di monitoraggio in PHP.',
      'Raccolta e visualizzazione di informazioni dai router Mikrotik.',
      'Documentazione e gestione dell\'infrastruttura tramite NetBox.',
    ],
    highlights: [
      'Esperienza diretta su networking e apparati reali.',
      'Integrazione tra monitoraggio e documentazione infrastrutturale.',
      'Supporto a controlli operativi più rapidi.',
    ],
    stack: ['PHP', 'Mikrotik', 'NetBox', 'Docker', 'Networking'],
    outcome: [
      'Maggiore visibilità sullo stato degli apparati.',
      'Documentazione di rete più strutturata.',
      'Esperienza pratica su esigenze sistemistiche concrete.',
    ],
  },
]

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug)
}
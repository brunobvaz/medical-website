import siteConfig from '../config/site.js'

const privacyPage = {
  pt: {
    eyebrow: 'Informação legal', title: 'Política de Privacidade', updated: 'Última atualização: agosto de 2026',
    introduction: 'A sua privacidade é importante para nós. Esta Política explica como recolhemos, utilizamos, conservamos e protegemos os seus dados pessoais quando utiliza este website ou contacta a clínica.',
    backLabel: 'Voltar ao início',
    sections: [
      {
        title: '1. Responsável pelo tratamento',
        paragraphs: [`A ${siteConfig.brand} é responsável pelo tratamento dos dados pessoais recolhidos através deste website. Para questões relacionadas com privacidade ou para exercer os seus direitos, contacte-nos através de ${siteConfig.email}.`],
      },
      {
        title: '2. Dados que recolhemos',
        paragraphs: ['Podemos recolher dados de identificação e contacto, informação incluída em pedidos de marcação ou mensagens, preferências de comunicação e dados técnicos necessários ao funcionamento e segurança do website.', 'Dados relativos à saúde apenas serão tratados quando necessários à prestação de cuidados, nos termos permitidos pela legislação aplicável e sujeitos a dever de confidencialidade.'],
      },
      {
        title: '3. Finalidades e fundamentos do tratamento',
        paragraphs: ['Utilizamos os dados para responder a contactos, gerir pedidos de consulta, prestar cuidados de saúde, cumprir obrigações legais, assegurar o funcionamento do website e enviar comunicações quando tenha autorizado essa utilização.', 'O tratamento pode basear-se em diligências pré-contratuais ou contratuais, obrigações legais, consentimento, interesses legítimos ou fundamentos aplicáveis à prestação de cuidados de saúde.'],
      },
      {
        title: '4. Partilha de dados',
        paragraphs: ['Os dados podem ser partilhados com prestadores que apoiem o funcionamento do website, sistemas de comunicação, gestão administrativa ou serviços clínicos, apenas na medida necessária e sujeitos a obrigações de proteção de dados.', 'Também poderão ser comunicados quando exigido por lei, por uma autoridade competente ou para proteção de direitos legítimos.'],
      },
      {
        title: '5. Conservação',
        paragraphs: ['Os dados são conservados durante o período necessário às finalidades para que foram recolhidos e pelos prazos exigidos por obrigações legais, regulamentares, clínicas ou de defesa de direitos. Após esse período, são eliminados ou anonimizados de forma segura.'],
      },
      {
        title: '6. Segurança',
        paragraphs: ['Aplicamos medidas técnicas e organizativas adequadas para proteger os dados contra acesso não autorizado, perda, alteração ou divulgação indevida. Nenhum sistema é totalmente isento de risco, pelo que estas medidas são revistas regularmente.'],
      },
      {
        title: '7. Os seus direitos',
        paragraphs: ['Nos termos aplicáveis, pode solicitar acesso, retificação, apagamento, limitação, portabilidade ou oposição ao tratamento dos seus dados. Quando o tratamento dependa de consentimento, pode retirá-lo a qualquer momento, sem afetar a licitude do tratamento anterior.', 'Pode ainda apresentar uma reclamação junto da Comissão Nacional de Proteção de Dados.'],
      },
      {
        title: '8. Alterações e contacto',
        paragraphs: [`Esta Política pode ser atualizada para refletir alterações legais, técnicas ou dos nossos serviços. A versão mais recente estará sempre disponível nesta página. Para qualquer questão, contacte ${siteConfig.email}.`],
      },
    ],
  },
  en: {
    eyebrow: 'Legal information', title: 'Privacy Policy', updated: 'Last updated: August 2026',
    introduction: 'Your privacy matters to us. This Policy explains how we collect, use, retain and protect your personal data when you use this website or contact the clinic.',
    backLabel: 'Return home',
    sections: [
      {
        title: '1. Data controller',
        paragraphs: [`${siteConfig.brand} is responsible for personal data collected through this website. For privacy questions or to exercise your rights, contact us at ${siteConfig.email}.`],
      },
      {
        title: '2. Data we collect',
        paragraphs: ['We may collect identification and contact details, information included in appointment requests or messages, communication preferences and technical data required for website operation and security.', 'Health data will only be processed where necessary for care, as permitted by applicable law and subject to professional confidentiality.'],
      },
      {
        title: '3. Purposes and legal bases',
        paragraphs: ['We use data to respond to enquiries, manage appointment requests, provide healthcare, comply with legal duties, operate the website and send communications where you have authorised us to do so.', 'Processing may rely on pre-contractual or contractual steps, legal obligations, consent, legitimate interests or legal grounds applicable to healthcare provision.'],
      },
      {
        title: '4. Data sharing',
        paragraphs: ['Data may be shared with providers supporting the website, communications, administration or clinical services, only where necessary and subject to data-protection obligations.', 'Data may also be disclosed where required by law, by a competent authority or to protect legitimate rights.'],
      },
      {
        title: '5. Retention',
        paragraphs: ['Data is retained for as long as necessary for the purposes for which it was collected and for periods required by legal, regulatory, clinical or legal-claims obligations. It is then securely deleted or anonymised.'],
      },
      {
        title: '6. Security',
        paragraphs: ['We use appropriate technical and organisational measures to protect data against unauthorised access, loss, alteration or improper disclosure. No system is entirely risk-free, so these measures are reviewed regularly.'],
      },
      {
        title: '7. Your rights',
        paragraphs: ['Where applicable, you may request access, rectification, erasure, restriction, portability or object to the processing of your data. Where processing relies on consent, you may withdraw it at any time without affecting earlier lawful processing.', 'You may also lodge a complaint with the competent data-protection authority.'],
      },
      {
        title: '8. Changes and contact',
        paragraphs: [`This Policy may be updated to reflect legal, technical or service changes. The latest version will always be available on this page. For questions, contact ${siteConfig.email}.`],
      },
    ],
  },
}

export const getPrivacyPage = (language) => privacyPage[language] ?? privacyPage.pt

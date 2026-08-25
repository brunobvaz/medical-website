import siteConfig from '../config/site.js'

const termsPage = {
  pt: {
    eyebrow: 'Informação legal', title: 'Termos de Uso', updated: 'Última atualização: agosto de 2026',
    introduction: 'Estes Termos regulam o acesso e a utilização deste website. Ao navegar no site ou utilizar as suas funcionalidades, aceita respeitar as condições abaixo.',
    backLabel: 'Voltar ao início',
    sections: [
      { title: '1. Identificação e aceitação', paragraphs: [`O website é disponibilizado pela ${siteConfig.brand}. Se não concordar com estes Termos, deverá deixar de utilizar o website.`] },
      { title: '2. Finalidade do website', paragraphs: ['O website disponibiliza informação geral sobre a clínica, áreas de atuação, tratamentos, profissionais e formas de contacto ou marcação.', 'O conteúdo tem natureza informativa e não substitui uma consulta, diagnóstico ou recomendação médica individualizada. Em caso de urgência, contacte os serviços de emergência adequados.'] },
      { title: '3. Pedidos de contacto e marcação', paragraphs: ['O envio de um formulário constitui apenas um pedido de contacto ou marcação. A consulta só se considera confirmada após comunicação expressa da clínica.', 'O utilizador compromete-se a fornecer informação correta, atual e suficiente para permitir o tratamento do pedido.'] },
      { title: '4. Utilização permitida', paragraphs: ['O website deve ser utilizado de forma lícita e responsável. Não é permitido interferir com o seu funcionamento, tentar obter acesso não autorizado, introduzir código malicioso, recolher dados de outros utilizadores ou utilizar o conteúdo para fins fraudulentos ou ilícitos.'] },
      { title: '5. Conteúdo e propriedade intelectual', paragraphs: ['Salvo indicação em contrário, textos, elementos gráficos, fotografias, identidade visual e demais conteúdo pertencem à clínica ou são utilizados com autorização.', 'A reprodução, alteração, distribuição ou utilização comercial depende de autorização prévia, sem prejuízo das utilizações permitidas por lei.'] },
      { title: '6. Informação e disponibilidade', paragraphs: ['Procuramos manter a informação correta e atualizada, mas não garantimos que todo o conteúdo esteja permanentemente completo ou isento de lapsos. Podemos corrigir, atualizar, suspender ou remover conteúdos e funcionalidades quando necessário.'] },
      { title: '7. Ligações e serviços externos', paragraphs: ['O website pode incluir ligações para serviços geridos por terceiros. Não controlamos esses serviços nem somos responsáveis pelas respetivas práticas, disponibilidade ou conteúdo. A utilização desses serviços está sujeita aos seus próprios termos e políticas.'] },
      { title: '8. Responsabilidade', paragraphs: ['Na medida permitida pela lei aplicável, a clínica não é responsável por danos resultantes do uso indevido do website, da indisponibilidade temporária, de interferências externas ou da confiança exclusiva em informação geral sem avaliação clínica.', 'Nada nestes Termos exclui responsabilidades que não possam ser legalmente limitadas ou excluídas.'] },
      { title: '9. Privacidade', paragraphs: ['O tratamento de dados pessoais relacionado com o website é explicado na Política de Privacidade. Recomendamos a sua leitura antes de enviar dados através dos formulários.'] },
      { title: '10. Alterações, lei aplicável e contacto', paragraphs: [`Podemos atualizar estes Termos para refletir alterações legais, técnicas ou dos nossos serviços. A versão em vigor estará disponível nesta página. A utilização do website está sujeita à legislação aplicável. Para questões, contacte ${siteConfig.email}.`] },
    ],
  },
  en: {
    eyebrow: 'Legal information', title: 'Terms of Use', updated: 'Last updated: August 2026',
    introduction: 'These Terms govern access to and use of this website. By browsing the site or using its features, you agree to comply with the conditions below.',
    backLabel: 'Return home',
    sections: [
      { title: '1. Identity and acceptance', paragraphs: [`This website is provided by ${siteConfig.brand}. If you do not agree with these Terms, you should stop using the website.`] },
      { title: '2. Purpose of the website', paragraphs: ['The website provides general information about the clinic, clinical areas, treatments, professionals and contact or booking options.', 'Its content is informational and does not replace an individual consultation, diagnosis or medical recommendation. In an emergency, contact the appropriate emergency services.'] },
      { title: '3. Contact and appointment requests', paragraphs: ['Submitting a form only constitutes a contact or appointment request. An appointment is confirmed only after express communication from the clinic.', 'Users agree to provide accurate, current and sufficient information so that the request can be processed.'] },
      { title: '4. Permitted use', paragraphs: ['The website must be used lawfully and responsibly. Users must not interfere with its operation, attempt unauthorised access, introduce malicious code, collect other users’ data or use its content for fraudulent or unlawful purposes.'] },
      { title: '5. Content and intellectual property', paragraphs: ['Unless otherwise stated, text, graphics, photographs, visual identity and other content belong to the clinic or are used with permission.', 'Reproduction, alteration, distribution or commercial use requires prior authorisation, without prejudice to uses permitted by law.'] },
      { title: '6. Information and availability', paragraphs: ['We aim to keep information accurate and current, but cannot guarantee that all content will always be complete or free from errors. We may correct, update, suspend or remove content and features where necessary.'] },
      { title: '7. External links and services', paragraphs: ['The website may contain links to third-party services. We do not control those services and are not responsible for their practices, availability or content. Their use is governed by their own terms and policies.'] },
      { title: '8. Liability', paragraphs: ['To the extent permitted by applicable law, the clinic is not liable for loss caused by misuse of the website, temporary unavailability, external interference or exclusive reliance on general information without clinical assessment.', 'Nothing in these Terms excludes liability that cannot legally be limited or excluded.'] },
      { title: '9. Privacy', paragraphs: ['Personal-data processing related to the website is explained in the Privacy Policy. We recommend reading it before submitting information through the forms.'] },
      { title: '10. Changes, applicable law and contact', paragraphs: [`We may update these Terms to reflect legal, technical or service changes. The current version will be available on this page. Website use is subject to applicable law. For questions, contact ${siteConfig.email}.`] },
    ],
  },
}

export const getTermsPage = (language) => termsPage[language] ?? termsPage.pt

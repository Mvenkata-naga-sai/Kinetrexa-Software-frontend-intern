const nav = document.querySelector('.navbar');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const themeToggle = document.querySelector('[data-theme]');

const linkedinUrl = 'https://www.linkedin.com/company/kinetrexa/posts/?feedView=all';
document.querySelectorAll('a[href="https://www.linkedin.com"]').forEach(link => {
  link.href = linkedinUrl;
  link.textContent = 'LinkedIn';
});
document.querySelectorAll('.arrow').forEach(link => link.remove());
const cleanTextNodes = node => node.childNodes.forEach(child => {
  if (child.nodeType === Node.TEXT_NODE) child.textContent = child.textContent.replace(/[↗→]/g, '').replace(/\s{2,}/g, ' ');
  else cleanTextNodes(child);
});
document.querySelectorAll('a, button').forEach(element => {
  if (!element.classList.contains('arrow')) cleanTextNodes(element);
});

const projectDetails = {
  'Northstar Health': ['Brand system + digital platform', 'We clarified a crowded care journey into a calm, confident experience that helps people make better decisions sooner.', 'Strategy / Identity / Product'],
  'Parade Finance': ['Product strategy + launch identity', 'A warmer visual language and a simpler product story helped Parade make money conversations feel more human.', 'Positioning / Product / Campaign'],
  'Field Notes': ['Campaign identity + editorial system', 'A flexible identity gave Field Notes a distinct point of view across film, print, packaging and community events.', 'Identity / Art direction / Culture'],
  'Onda Energy': ['Digital platform + data experience', 'We turned complex clean-energy data into a dashboard that gives teams a clear next move every day.', 'Research / UX / Technology'],
  'Good Grain': ['Packaging + brand refresh', 'A tactile identity and a more generous shelf presence helped a pantry staple earn a second look.', 'Strategy / Packaging / Identity'],
  'Open House': ['Campaign + cultural platform', 'Open House created a welcoming platform for the next generation of makers to meet, learn and collaborate.', 'Campaign / Community / Digital']
};

const projects = document.querySelectorAll('.project');
if (projects.length) {
  const modal = document.createElement('dialog');
  modal.className = 'project-modal';
  modal.innerHTML = '<button class="modal-close" aria-label="Close project details">×</button><div class="modal-kicker"></div><h2></h2><p></p><span class="modal-meta"></span>';
  document.body.appendChild(modal);
  const closeModal = () => modal.close();
  modal.querySelector('.modal-close').addEventListener('click', closeModal);
  modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
  projects.forEach(project => {
    const title = project.querySelector('h3')?.textContent.trim();
    const detail = projectDetails[title];
    if (!detail) return;
    project.tabIndex = 0;
    project.setAttribute('role', 'button');
    const openModal = () => {
      modal.querySelector('.modal-kicker').textContent = detail[0];
      modal.querySelector('h2').textContent = title;
      modal.querySelector('p').textContent = detail[1];
      modal.querySelector('.modal-meta').textContent = detail[2];
      modal.showModal();
    };
    project.addEventListener('click', openModal);
    project.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); openModal(); } });
  });
}

const applyLinks = document.querySelectorAll('.job-card a[href^="mailto:"]');
if (applyLinks.length) {
  const applicationModal = document.createElement('dialog');
  applicationModal.className = 'application-modal';
  applicationModal.innerHTML = `<button class="modal-close" aria-label="Close application form">×</button>
    <div class="modal-kicker">Join the studio</div><h2>Tell us about you.</h2>
    <p class="modal-intro">A few details help us understand where you might fit. Your resume must be 10 MB or smaller.</p>
    <form class="application-form"><div class="form-grid">
      <div class="field"><label for="apply-name">Full name</label><input id="apply-name" name="name" required autocomplete="name"></div>
      <div class="field"><label for="apply-email">Email address</label><input id="apply-email" name="email" type="email" required autocomplete="email"></div>
      <div class="field"><label for="apply-phone">Phone number</label><input id="apply-phone" name="phone" type="tel" autocomplete="tel"></div>
      <div class="field"><label for="apply-location">Where are you based?</label><input id="apply-location" name="location" required></div>
      <div class="field full"><label for="apply-role">Role</label><select id="apply-role" name="role" required><option value="">Choose a role</option><option>Senior Brand Designer</option><option>Product Strategist</option></select></div>
      <div class="field full"><label for="apply-portfolio">Portfolio or LinkedIn URL</label><input id="apply-portfolio" name="portfolio" type="url" placeholder="https://"></div>
      <div class="field full"><label for="apply-note">What would you bring to Kinetrexa?</label><textarea id="apply-note" name="note" required minlength="30" placeholder="Tell us a little about your practice and what you want to make next."></textarea></div>
      <div class="field full"><label for="apply-resume">Resume</label><input id="apply-resume" name="resume" type="file" accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required><small class="file-hint">PDF, DOC or DOCX · maximum 10 MB</small></div>
    </div><button class="btn btn-dark" type="submit">Submit application</button><p class="form-status" aria-live="polite"></p></form>`;
  document.body.appendChild(applicationModal);
  const applicationForm = applicationModal.querySelector('form');
  const resumeInput = applicationModal.querySelector('#apply-resume');
  const formStatus = applicationModal.querySelector('.form-status');
  const maxResumeSize = 10 * 1024 * 1024;
  const closeApplication = () => applicationModal.close();
  applicationModal.querySelector('.modal-close').addEventListener('click', closeApplication);
  applicationModal.addEventListener('click', event => { if (event.target === applicationModal) closeApplication(); });
  resumeInput.addEventListener('change', () => {
    const file = resumeInput.files[0];
    if (file && file.size > maxResumeSize) {
      resumeInput.value = '';
      formStatus.textContent = 'That file is larger than 10 MB. Please choose a smaller resume.';
      formStatus.className = 'form-status error';
    } else { formStatus.textContent = ''; formStatus.className = 'form-status'; }
  });
  applicationForm.addEventListener('submit', event => {
    event.preventDefault();
    const file = resumeInput.files[0];
    if (!file || file.size > maxResumeSize) {
      formStatus.textContent = 'Please attach a resume under 10 MB.';
      formStatus.className = 'form-status error';
      return;
    }
    formStatus.textContent = 'Application received. We will be in touch soon.';
    formStatus.className = 'form-status success';
    applicationForm.reset();
  });
  applyLinks.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    const selectedRole = link.closest('.job-card').querySelector('h3').textContent.trim();
    applicationModal.querySelector('#apply-role').value = selectedRole;
    applicationModal.showModal();
  }));
}

if (menuToggle) menuToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
if (nav) window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 8));

const storedTheme = localStorage.getItem('kinetrexa-theme');
if (storedTheme === 'dark') document.documentElement.classList.add('dark');
if (themeToggle) themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('kinetrexa-theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');
});

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) entry.target.classList.add('visible');
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

document.querySelectorAll('form[data-contact]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  const status = form.querySelector('.form-status');
  if (status) { status.textContent = 'Thanks. We will be in touch within two business days.'; status.style.color = '#d45c4b'; }
  form.reset();
}));

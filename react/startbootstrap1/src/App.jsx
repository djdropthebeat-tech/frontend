import { useEffect, useMemo, useState } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#contact', label: 'Contact' },
];

const services = [
  {
    icon: 'fa-shopping-cart',
    title: 'E-Commerce',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni.',
  },
  {
    icon: 'fa-laptop',
    title: 'Responsive Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni.',
  },
  {
    icon: 'fa-lock',
    title: 'Web Security',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni.',
  },
];

const portfolioItems = [
  {
    id: 1,
    title: 'Threads',
    subtitle: 'Illustration',
    image: '/assets/img/portfolio/1.jpg',
    description:
      'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    client: 'Threads',
    category: 'Illustration',
  },
  {
    id: 2,
    title: 'Explore',
    subtitle: 'Graphic Design',
    image: '/assets/img/portfolio/2.jpg',
    description:
      'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    client: 'Explore',
    category: 'Graphic Design',
  },
  {
    id: 3,
    title: 'Finish',
    subtitle: 'Identity',
    image: '/assets/img/portfolio/3.jpg',
    description:
      'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    client: 'Finish',
    category: 'Identity',
  },
  {
    id: 4,
    title: 'Lines',
    subtitle: 'Branding',
    image: '/assets/img/portfolio/4.jpg',
    description:
      'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    client: 'Lines',
    category: 'Branding',
  },
  {
    id: 5,
    title: 'Southwest',
    subtitle: 'Website Design',
    image: '/assets/img/portfolio/5.jpg',
    description:
      'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    client: 'Southwest',
    category: 'Website Design',
  },
  {
    id: 6,
    title: 'Window',
    subtitle: 'Photography',
    image: '/assets/img/portfolio/6.jpg',
    description:
      'Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    client: 'Window',
    category: 'Photography',
  },
];

const timeline = [
  {
    year: '2009-2011',
    title: 'Our Humble Beginnings',
    image: '/assets/img/about/1.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente.',
  },
  {
    year: 'March 2011',
    title: 'An Agency is Born',
    image: '/assets/img/about/2.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente.',
    inverted: true,
  },
  {
    year: 'December 2015',
    title: 'Transition to Full Service',
    image: '/assets/img/about/3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente.',
  },
  {
    year: 'July 2020',
    title: 'Phase Two Expansion',
    image: '/assets/img/about/4.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente.',
    inverted: true,
  },
];

const teamMembers = [
  {
    name: 'Parveen Anand',
    role: 'Lead Designer',
    image: '/assets/img/team/1.jpg',
  },
  {
    name: 'Diana Petersen',
    role: 'Lead Marketer',
    image: '/assets/img/team/2.jpg',
  },
  {
    name: 'Larry Parker',
    role: 'Lead Developer',
    image: '/assets/img/team/3.jpg',
  },
];

const clients = [
  { name: 'Microsoft', logo: '/assets/img/logos/microsoft.svg' },
  { name: 'Google', logo: '/assets/img/logos/google.svg' },
  { name: 'Facebook', logo: '/assets/img/logos/facebook.svg' },
  { name: 'IBM', logo: '/assets/img/logos/ibm.svg' },
];

const socialIcons = [
  { icon: 'fab fa-twitter', label: 'Twitter' },
  { icon: 'fab fa-facebook-f', label: 'Facebook' },
  { icon: 'fab fa-linkedin-in', label: 'LinkedIn' },
];

const PortfolioModal = ({ item, onClose }) => {
  if (!item) {
    return null;
  }

  return (
    <>
      <div className="portfolio-modal modal fade show d-block" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <button className="close-modal" type="button" onClick={onClose} aria-label="Close modal">
              <img src="/assets/img/close-icon.svg" alt="Close modal" />
            </button>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <div className="modal-body">
                    <h2 className="text-uppercase">{item.title}</h2>
                    <p className="item-intro text-muted">{item.subtitle}</p>
                    <img className="img-fluid d-block mx-auto" src={item.image} alt={item.title} />
                    <p>{item.description}</p>
                    <ul className="list-inline">
                      <li>
                        <strong>Client:</strong> {item.client}
                      </li>
                      <li>
                        <strong>Category:</strong> {item.category}
                      </li>
                    </ul>
                    <button className="btn btn-primary btn-xl text-uppercase" onClick={onClose}>
                      <i className="fas fa-xmark me-1"></i>
                      Close Project
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose} />
    </>
  );
};

const App = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [navShrink, setNavShrink] = useState(false);
  const [activeModalId, setActiveModalId] = useState(null);

  const activeItem = useMemo(
    () => portfolioItems.find((item) => item.id === activeModalId),
    [activeModalId],
  );

  useEffect(() => {
    const handleScroll = () => {
      setNavShrink(window.scrollY > 0);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (activeModalId) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => document.body.classList.remove('modal-open');
  }, [activeModalId]);

  const toggleNav = () => setNavOpen((prev) => !prev);
  const closeNav = () => setNavOpen(false);

  const openModal = (id) => setActiveModalId(id);
  const closeModal = () => setActiveModalId(null);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${navShrink ? 'navbar-shrink' : ''}`}
        id="mainNav"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img src="/assets/img/navbar-logo.svg" alt="Agency logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-controls="navbarResponsive"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            onClick={toggleNav}
          >
            Menu
            <i className="fas fa-bars ms-1"></i>
          </button>
          <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
              {navLinks.map((link) => (
                <li className="nav-item" key={link.href}>
                  <a className="nav-link" href={link.href} onClick={closeNav}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <header className="masthead" id="page-top">
        <div className="container">
          <div className="masthead-subheading">Welcome To Our Studio!</div>
          <div className="masthead-heading text-uppercase">It&apos;s Nice To Meet You</div>
          <a className="btn btn-primary btn-xl text-uppercase" href="#services">
            Tell Me More
          </a>
        </div>
      </header>

      <section className="page-section" id="services">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Services</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row text-center">
            {services.map((service) => (
              <div className="col-md-4" key={service.title}>
                <span className="fa-stack fa-4x">
                  <i className="fas fa-circle fa-stack-2x text-primary"></i>
                  <i className={`fas ${service.icon} fa-stack-1x fa-inverse`}></i>
                </span>
                <h4 className="my-3">{service.title}</h4>
                <p className="text-muted">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Portfolio</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            {portfolioItems.map((item) => (
              <div className="col-lg-4 col-sm-6 mb-4" key={item.id}>
                <div className="portfolio-item">
                  <button
                    className="portfolio-link"
                    type="button"
                    onClick={() => openModal(item.id)}
                    aria-label={`${item.title} details`}
                  >
                    <div className="portfolio-hover">
                      <div className="portfolio-hover-content">
                        <i className="fas fa-plus fa-3x"></i>
                      </div>
                    </div>
                    <img className="img-fluid" src={item.image} alt={item.title} />
                  </button>
                  <div className="portfolio-caption">
                    <div className="portfolio-caption-heading">{item.title}</div>
                    <div className="portfolio-caption-subheading text-muted">{item.subtitle}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">About</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <ul className="timeline">
            {timeline.map((event) => (
              <li key={event.year} className={event.inverted ? 'timeline-inverted' : undefined}>
                <div className="timeline-image">
                  <img className="rounded-circle img-fluid" src={event.image} alt={event.title} />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                    <h4>{event.year}</h4>
                    <h4 className="subheading">{event.title}</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">{event.description}</p>
                  </div>
                </div>
              </li>
            ))}
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Be Part
                  <br />
                  Of Our
                  <br />
                  Story!
                </h4>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="page-section bg-light" id="team">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-lg-4" key={member.name}>
                <div className="team-member">
                  <img className="mx-auto rounded-circle" src={member.image} alt={member.name} />
                  <h4>{member.name}</h4>
                  <p className="text-muted">{member.role}</p>
                  {socialIcons.map((icon) => (
                    <a
                      key={icon.label}
                      className="btn btn-dark btn-social mx-2"
                      href="#!"
                      aria-label={`${member.name} ${icon.label} Profile`}
                    >
                      <i className={icon.icon}></i>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <p className="large text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis,
                quos non quis ad perspiciatis, totam corporis ea, alias ut unde.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="py-5">
        <div className="container">
          <div className="row align-items-center">
            {clients.map((client) => (
              <div className="col-md-3 col-sm-6 my-3" key={client.name}>
                <a href="#!">
                  <img
                    className="img-fluid img-brand d-block mx-auto"
                    src={client.logo}
                    alt={client.name}
                    aria-label={`${client.name} Logo`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="page-section" id="contact">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Contact Us</h2>
            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
          </div>
          <form
            id="contactForm"
            onSubmit={(event) => {
              event.preventDefault();
              alert('SB Forms is disabled in this demo.');
            }}
          >
            <div className="row align-items-stretch mb-5">
              <div className="col-md-6">
                <div className="form-group">
                  <input className="form-control" id="name" type="text" placeholder="Your Name *" required />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    id="email"
                    type="email"
                    placeholder="Your Email *"
                    required
                  />
                </div>
                <div className="form-group mb-md-0">
                  <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group form-group-textarea mb-md-0">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message *"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="btn btn-primary btn-xl text-uppercase" type="submit">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer className="footer py-4">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4 text-lg-start">Copyright &copy; Your Website 2023</div>
            <div className="col-lg-4 my-3 my-lg-0">
              {socialIcons.map((icon) => (
                <a key={icon.label} className="btn btn-dark btn-social mx-2" href="#!" aria-label={icon.label}>
                  <i className={icon.icon}></i>
                </a>
              ))}
            </div>
            <div className="col-lg-4 text-lg-end">
              <a className="link-dark text-decoration-none me-3" href="#!">
                Privacy Policy
              </a>
              <a className="link-dark text-decoration-none" href="#!">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
      </footer>

      <PortfolioModal item={activeItem} onClose={closeModal} />
    </>
  );
};

export default App;


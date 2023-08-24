import {
  Logo,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedInIcon,
} from '../../assets'

import Link from '../Link'
import PageSection from '../PageSection'


const Footer = () => {
  return (
    <PageSection
      containerTag="footer"
      containerClassName="bg-gray-10 absolute bottom-0 text-sm"
      className="grid grid-cols-1 md:grid-cols-[44%_29%_21%] gap-y-10 md:gap-y-0 justify-between"
    >
      <LogoAndSocials/>
      <QuickLinks />
      <Contact />
    </PageSection>
  )
}

const LogoAndSocials = () => {
  return (
    <Section>
      <Logo className="w-40 md:w-44 lg:w-auto mb-4 md:mb-6 lg:mb-10" />
      <p className="md:mb-1 lg:mb-2">Copyright &copy; 2023 The Reboot Camp.</p>
      <p className="mb-4 md:mb-6 lg:mb-10">All rights reserved.</p>
      <div className="grid grid-flow-col auto-cols-min gap-x-3">
        <InstagramIcon />
        <TwitterIcon />
        <LinkedInIcon />
        <FacebookIcon />
      </div>
    </Section>
  )
}

const QuickLinks = () => {
  const links = [ // TODO: Add appropriate links when React Router is set up.
    {
      displayText: 'About',
      link: '#',
    },
    {
      displayText: 'Help',
      link: '#',
    },
    {
      displayText: 'Register',
      link: '#',
    },
    {
      displayText: 'Give',
      link: '#',
    },
    {
      displayText: 'Store',
      link: '#',
    },
    {
      displayText: 'Live',
      link: '#',
    },
  ]

  return (
    <Section title="Quick Links">
      <div className="grid grid-cols-2 gap-x-7.5 gap-y-3">
        {links.map(({ displayText, link }) => (
          <Link key={displayText} to={link}>{displayText}</Link>
        ))}
      </div>
    </Section>
  )
}

const Contact = () => {
  return (
    <Section title="Contact">
      <div className="inline-grid gap-y-3">
        <Link to="mailto:trc@cci.com.ng">trc@cci.com.ng</Link>
        <Link to="tel:+2348183581817">+234 818 358 1817</Link>
      </div>
    </Section>
  )
}

const Section = ({ title, children }) => {
  return (
    <div>
      {title && <p className="font-bold mb-2 md:mb-6 text-base lg:text-xl">{title}</p>}
      <>{children}</>
    </div>
  )
}

export default Footer;

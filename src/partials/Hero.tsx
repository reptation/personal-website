import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={<>Welcome to my personal webpage</>}
      description={
        <>
          The purpose of this site is to discuss current projects and to try out
          current web frameworks. It is built with{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://astro.build/"
          >
            AstroJS
          </a>
          {'. '}
        </>
      }
      avatar={
        <img
          className="h-96 w-96"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };

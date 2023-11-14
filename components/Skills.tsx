import Skill from './Skill';

type Props = {};

const skills = [
  {
    name: 'React',
    logo: '/react-logo.svg',
  },
  {
    name: 'CSS3',
    logo: '/css3-logo.svg',
    imageClass: 'scale-[0.7] translate-y-1',
  },
  {
    name: 'AWS',
    logo: '/aws-logo.svg',
    imageClass: 'scale-[1.2] translate-y-1',
  },
  {
    name: 'Firebase',
    logo: '/firebase-logo.png',
    imageClass: 'scale-[0.8]',
  },
  {
    name: 'Git',
    logo: '/git-logo.svg',
    imageClass: 'scale-[0.8] translate-y-0.5',
  },
  {
    name: 'GraphQL',
    logo: '/GraphQL_Logo.svg',
  },
  {
    name: 'Html',
    logo: '/html-logo.svg',
    imageClass: 'scale-[0.7] translate-y-1',
  },
  {
    name: 'Java',
    logo: '/java-4-logo.svg',
  },
  {
    name: 'JavaScript',
    logo: '/js-logo.svg',
  },
  {
    name: 'Mysql',
    logo: '/mysql-logo.svg',
  },
  {
    name: 'NextJs',
    logo: '/nextjs-logo.svg',
  },
  {
    name: 'Python',
    logo: '/python-logo.png',
  },
  {
    name: 'Tailwind CSS',
    logo: '/tailwind-logo.svg',
  },
  {
    name: 'TypeScript',
    logo: '/typescript-logo.png',
    imageClass: 'scale-[0.7]',
  },
  {
    name: 'VScode',
    logo: '/vscode-logo.webp',
    imageClass: 'scale-[0.7]',
  },
  {
    name: 'Vue',
    logo: '/vue-logo.png',
    imageClass: 'scale-[0.75] translate-y-1.5',
  },
];
const totalRows = Math.ceil(skills.length / 4);

export default function Skills({}: Props) {
  return (
    <section className="section" id="skills">
      <h3 className="section-header">Skills</h3>
      <div className="flex-1 flex items-center">
        <div className="grid grid-cols-4 gap-3">
          {skills.map(({ name, logo, ...otherProps }, i) => (
            <Skill
              key={name}
              name={name}
              logo={logo}
              animateFromLeft={i / 2 < totalRows}
              {...otherProps}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

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
    imageClass: 'py-2',
  },
  {
    name: 'AWS',
    logo: '/aws-logo.svg',
    imageClass: 'scale-[1.2]',
  },
  {
    name: 'Firebase',
    logo: '/firebase-logo.png',
    imageClass: 'scale-[0.9]',
  },
  {
    name: 'Git',
    logo: '/git-logo.svg',
    imageClass: 'py-2',
  },
  {
    name: 'GraphQL',
    logo: '/GraphQL_Logo.svg',
  },
  {
    name: 'Html',
    logo: '/html-logo.svg',
    imageClass: 'py-2',
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
    imageClass: 'px-2',
  },
  {
    name: 'Python',
    logo: '/python-logo.png',
    imageClass: 'py-2',
  },
  {
    name: 'Tailwind CSS',
    logo: '/tailwind-logo.svg',
    imageClass: 'scale-[0.8]',
  },
  {
    name: 'TypeScript',
    logo: '/typescript-logo.png',
    imageClass: 'py-2',
  },
  {
    name: 'VScode',
    logo: '/vscode-logo.webp',
  },
  {
    name: 'Vue',
    logo: '/vue-logo.png',
    imageClass: 'py-2',
  },
];
const totalRows = Math.ceil(skills.length / 4);

export default function Skills({}: Props) {
  return (
    <section className="section" id="skills">
      <h3 className="section-header">Skills</h3>
      <div className="flex-1 w-full flex items-center justify-center">
        <div className="grid grid-cols-4 grid-flow-row gap-5 lg:gap-6  w-full max-w-[900px] px-6 lg:pb-4 h-full max-h-[600px]">
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

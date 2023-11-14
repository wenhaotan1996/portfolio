import ExperienceCard from './Card';

type Props = {};

const cards = [
  {
    title: 'Computer Engineering, Bachelor of Science',
    image: '/sjsu_campus.jpg',
    imageClass: 'h-32 w-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]',
    location: 'San Jose State University',
    time: 'September 2015 - December 2019',
    info: ['Graduated with Cum Laude honor (GPA 3.6)'],
  },
  {
    title: 'Software Engineering, Master of Science',
    image: '/sjsu_campus.jpg',
    imageClass: 'h-32 w-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]',
    location: 'San Jose State University',
    time: 'January 2020 - December 2021',
    info: ['Graduated with 3.7 GPA'],
  },
  {
    title: 'Software Engineer',
    image: '/EHTH_BIG.svg',
    imageClass: 'w-32 mb-4 xl:w-[200px] xl:mt-10 pt-4',
    location: 'eHealth, Santa Clara, CA',
    time: 'February 2022 - December 2022',
    info: [
      'Design, implement, and test UI components using Vue.js, Tailwind CSS, and GraphQL',
      'CI/CD development under regular release cycles',
      'Maintain existing features including fixing defects and extending features',
      'Utilize tools like Adobe Target to perform A/B test and monitor performance of new features',
    ],
  },
  {
    title: 'Math Tutor',
    image:
      'https://media.licdn.com/dms/image/D4D03AQFKvyon3z1ibQ/profile-displayphoto-shrink_800_800/0/1672163975185?e=2147483647&v=beta&t=ENzUC0ioO2Pa17ngIHkkIJ-REYQjibNIq3NxokLKrXs',
    imageClass: 'h-32 w-32 rounded-full object-cover xl:w-[200px] xl:h-[200px]',
    location: '',
    time: 'March 2023 - Present',
    info: [
      'Tutor high school students with Math courses',
      'Evaluate students learning styles and provide appropriate techniques for maximum understanding',
    ],
  },
];

export default function EducationAndExperience({}: Props) {
  return (
    <section
      className="section mx-3 sm:mx-8 lg:mx-20"
      id="education-and-experience">
      <h3 className="section-header text-center">Experience</h3>
      <div className="flex overflow-x-scroll w-full snap-x snap-mandatory flex-1">
        {cards.map(({ title, image, location, time, info, imageClass }) => (
          <ExperienceCard
            key={title}
            title={title}
            image={image}
            location={location}
            time={time}
            info={info}
            imageClass={imageClass}
          />
        ))}
      </div>
    </section>
  );
}

// ...existing code...
import Section from './Section'

type Feature = {
  title: string
  text: string
  icon?: 'strategy' | 'execution' | 'team' | 'outcome'
}

const features: Feature[] = [
  {
    title: "Design Process",
    text:
      "By creating structured workflows, clear rituals, and collaborative environments, I design systems that enable teams to do their best work, removing friction while maintaining flexibility for innovation.",
    icon: "strategy",
  },
  {
    title: "Bridging Worlds",
    text:
      "I thrive in the intersection of diferent areas, translating complex concepts and goals into actionable plans. I move fluidly between strategy and execution, getting into the details when it matters.",
    icon: "execution",
  },
  {
    title: "Empowering People and Teams",
    text:
      "I cultivate collaborative, high-trust environments that enable teams to grow, innovate, and achieve shared objectives. I lead with empathy, listening deeply and providing practical support when people need it.",
    icon: "team",
  },
  {
    title: "Impact through iteration",
    text:
      "I focus on outcomes, not outputs. By applying agile principles and continuous feedback loops, I ensure every project delivers measurable value, and that we learn something even when we fail.",
    icon: "outcome",
  },
]

const Icon = ({ name }: { name?: Feature['icon'] }) => {
  switch (name) {
    case 'execution':
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className="arrows-expand w-6 h-6">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd"></path>
        </svg>
      )
    case 'team':
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
        </svg>
      )
    case 'outcome':
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6">
          <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z"></path>
        </svg>
      )
    case 'strategy':
    default:
      return (
        <svg viewBox="0 0 20 20" fill="currentColor" className="map w-6 h-6">
          <path fillRule="evenodd" d="M12 1.586l-4 4v12.828l4-4V1.586zM3.707 3.293A1 1 0 002 4v10a1 1 0 00.293.707L6 18.414V5.586L3.707 3.293zM17.707 5.293L14 1.586v12.828l2.293 2.293A1 1 0 0018 16V6a1 1 0 00-.293-.707z" clipRule="evenodd"></path>
        </svg>
      )
  }
}

const Features = () => (
  <Section className="bg-gray-100" >
    <div className="pb-32 pt-8 xs:pt-16">
      <div className="max-w-screen-xl mx-auto sm:px-6">
        <div className="lg:text-center">
          <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            How I work: where strategy meets creativity
          </h3>
          <p className="mt-4 max-w-2xl text-lg leading-7 text-gray-400 lg:mx-auto">
            {/* My diverse background brings together a unique set of competencies that combine strategy, delivery, and collaboration. */}
            I solve problems at the intersection of disciplines - blending design thinking, technical execution, and human-centered collaboration to drive meaningful impact.
          </p>
        </div>

        <div className="mt-10">
          <ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((f, i) => (
              <li key={i} className={i > 1 ? 'mt-10 md:mt-0' : undefined}>
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <Icon name={f.icon} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg leading-6 font-medium text-gray-900">{f.title}</h4>
                    <p className="mt-2 text-base leading-6 text-gray-500">{f.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </Section>
)

export default Features

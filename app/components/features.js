import { AiFillHeart, AiFillCheckCircle, AiFillControl } from 'react-icons/ai'

const features = [
  {
    name: 'Unlimited inboxes',
    description:
      'Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.',
    href: '#',
    icon: AiFillHeart,
  },
  {
    name: 'Manage team members',
    description:
      'Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.',
    href: '#',
    icon: AiFillCheckCircle,
  },
  {
    name: 'Spam report',
    description:
      'Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.',
    href: '#',
    icon: AiFillControl,
  },
]

export default function Features() {
  return (
    
    <div className= "w-full bg-stone-700 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:mx-0 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-amber-400 sm:text-4xl">
            Die Wohntraum Andalusia SI
          </h2>
          <p className="mt-6 text-lg leading-8 text-stone-200">
            Die Wohntraum Andalusia SI ist eine im spanischen Handelsregister eingetagene SI (vergleichbar der GmbH in Deutschland und der Schweiz). Wir sind seit vielen Jahren im lokalen Immobilienmarkt Andalusiens tätig und sind in der Aquisition von Immobilien seit über 10 Jahren erfolgreich..
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-stone-400">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-stone-200">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-amber-500">
                      weitere Info <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
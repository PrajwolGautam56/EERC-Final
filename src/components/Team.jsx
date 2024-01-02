const people = [
    {
      name: 'Ajay Shrestha',
      role: '',
      imageUrl:
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fnp.linkedin.com%2Fin%2Fprajwol-gautam-4b72651a7&psig=AOvVaw1IUzqxL6Sy2UXlYmdEh0pl&ust=1694621484774000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCOiK75C7pYEDFQAAAAAdAAAAABAD'
    },
    {
        name: 'Purranjan Sapkota',
        role: '',
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FPrajwolgautam0&psig=AOvVaw2HvDv-TwUHK7y-EJPAK6XW&ust=1694620293027000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCIi6kti2pYEDFQAAAAAdAAAAABAD',
      },
      {
        name: 'Hello World',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FPrajwolgautam0&psig=AOvVaw2HvDv-TwUHK7y-EJPAK6XW&ust=1694620293027000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCIi6kti2pYEDFQAAAAAdAAAAABAD',
      },
      {
        name: 'Hello World',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FPrajwolgautam0&psig=AOvVaw2HvDv-TwUHK7y-EJPAK6XW&ust=1694620293027000&source=images&cd=vfe&opi=89978449&ved=0CA4QjRxqFwoTCIi6kti2pYEDFQAAAAAdAAAAABAD',
      },
      
    // More people...
  ]
  
  export default function Team() {
    return (
      <div className="bg-F8F8F8 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our Team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet Our Team
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>


                


      </div>

    )
  }
  
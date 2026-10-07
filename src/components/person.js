// Who this site is about, as https://blog.marcnuri.com describes the same person (its src/authors):
// keep both in sync. The @id is shared, so search engines read the two sites as one person.
export const person = {
  id: 'https://www.marcnuri.com/#person',
  name: 'Marc Nuri',
  alternateName: ['Marc Nuri San Felix'],
  givenName: 'Marc',
  familyName: 'Nuri',
  url: 'https://www.marcnuri.com',
  jobTitle: 'Senior Principal Software Engineer',
  description: {
    en: 'Marc Nuri is a Senior Principal Software Engineer at Red Hat working on AI and open source security. Creator of Kubernetes MCP Server; leads Fabric8 and JKube.',
    es: 'Marc Nuri es Senior Principal Software Engineer en Red Hat y trabaja en IA y seguridad del código abierto. Creó Kubernetes MCP Server y lidera Fabric8 y JKube.'
  },
  worksFor: {
    '@type': 'Organization',
    name: 'Red Hat',
    url: 'https://www.redhat.com',
    sameAs: ['https://www.wikidata.org/wiki/Q485593', 'https://en.wikipedia.org/wiki/Red_Hat']
  },
  homeLocation: {
    '@type': 'Place',
    name: 'Valencia, Spain',
    sameAs: 'https://www.wikidata.org/wiki/Q8818',
    address: {'@type': 'PostalAddress', addressLocality: 'Valencia', addressCountry: 'ES'}
  },
  // The author page of the blog, the profile with the full bio
  profilePage: {
    en: 'https://blog.marcnuri.com/author/marcnuri',
    es: 'https://blog.marcnuri.com/es/author/marcnuri'
  },
  // The profiles the person owns: linked with rel="me" and listed in the JSON-LD sameAs
  profiles: [
    'https://www.linkedin.com/in/marcnuri',
    'https://github.com/manusa',
    'https://bsky.app/profile/marcnuri.com',
    'https://x.com/MarcNuri',
    'https://hachyderm.io/@MarcNuri',
    'https://www.youtube.com/@MarcNuri'
  ],
  // Other pages that describe the person, listed in the JSON-LD sameAs only
  sameAs: [
    'https://sessionize.com/marc-nuri',
    'https://www.instagram.com/marcnuri',
    'https://developers.redhat.com/author/marc-nuri',
    'https://www.redhat.com/en/authors/marc-nuri',
    'https://accounts.eclipse.org/users/mnuri',
    'https://scholar.google.com/citations?user=JL7-bbYAAAAJ'
  ]
};

/** The JSON-LD node of the person, described in `lang` (`en`, `es`); `image` is an absolute URL. */
export const personSchema = ({lang, image}) => ({
  '@type': 'Person',
  '@id': person.id,
  name: person.name,
  alternateName: person.alternateName,
  givenName: person.givenName,
  familyName: person.familyName,
  url: person.url,
  description: person.description[lang] ?? person.description.en,
  jobTitle: person.jobTitle,
  worksFor: person.worksFor,
  homeLocation: person.homeLocation,
  sameAs: [...person.profiles, ...person.sameAs],
  ...(image ? {image} : {})
});

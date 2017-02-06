import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let heroes = [
      {
        id: 11,
        urlFriendlyId: 'habitat-for-humanity',
        name: 'Habitat for Humanity',
        lead: 'Habitat homes offer more than a roof and walls — they offer hope. We want everyone to have a decent place to live.',
        description: 'Habitat Young Professionals of Washington, D.C. (HYPDC) is a network of DC area professionals committed to the vision of a world where everyone has a decent place to live, and to making a difference in the community of Washington, D.C. By joining HYPDC, you\'ll have the opportunity to connect with a diverse group of dedicated, like-minded individuals in the DC area. Each year, HYPDC members make a positive impact in the work of DC Habitat, through fundraising efforts, volunteer days, happy hours, and more.',
        bulletPoints: [
          'By becoming a member of HYPDC, you\'ll become part of a network of dedicated, service-oriented young professionals in the Washington, D.C. area.',
          'HYPDC members enjoy the benefits of membership, including social events, exclusive leadership and volunteer opportunities, and member recognition.',
          '100% of HYPDC membership dues and fundraising profits are used to fund the construction of DC Habitat homes.'
        ],
        url: 'http://www.dchabitat.org/volunteer/young-professionals/join-now/',
        teaserImage: 'habitat-for-humanity-logo',
        photoImage: 'habitat-for-humanity-photo',
      },
      {
        id: 12,
        urlFriendlyId: 'humane-rescue-alliance',
        name: 'Humane Rescue Alliance',
        lead: 'Tenaciously protecting and advocating for the animals in our community and celebrating people\'s love and compassion for them.',
        description: 'The Humane Rescue Alliance operates the District\'s open-access animal adoption center offering an array of dynamic programs and services. Join the team striving to ensure a loving home for every unwanted animal, affordable medical care for every sick or injured animal, an end to animal abuse and cruelty, and stronger bonds between animals and people through education and training.',
        bulletPoints: [
          'The Humane Rescue Alliance was established by the historic merger of two iconic animal welfare organizations: the Washington Humane Society (WHS) and the Washington Animal Rescue League (WARL).',
          'The Humane Rescue Alliance now provides area residents with a single destination for animal-related needs, whether it is a search for a new companion to join their family, financial assistance with veterinary care or pet food, assistance with behavioral problems, vaccination or spay/neuter services, or help from officers for a lost, injured, or abused animal.',
          'We hope to serve as a model for other animal welfare organizations and to create a community where there is a loving home for every unwanted animal, affordable medical care for every sick and injured animal, an end to animal abuse and cruelty, and stronger bonds between animals and people through education and training.'
        ],
        url: 'http://www.humanerescuealliance.org/',
        teaserImage: 'humane-rescue-alliance',
        photoImage: 'humane-rescue-alliance-photo',
      },
      {
        id: 13,
        urlFriendlyId: 'national-park-service',
        name: 'National Park Service',
        lead: 'Taking care of the national parks and helping Americans take care of their communities is a job we love.',
        description: 'The National Park Service has been entrusted with the care of our national parks. With the help of volunteers, it safeguards these special places and shares their stories with more than 275 million visitors annually.',
        bulletPoints: [
          'The National Park Service preserves unimpaired the natural and cultural resources and values of the National Park System for the enjoyment, education, and inspiration of this and future generations.',
          'Looking for a meaningful internship or someone with some extra time who\'d like to volunteer? You can find volunteer and internship opportunities to suit your needs and interests.',
          'Make a difference by bringing your unique experience, background, and perspective to our work.'
        ],
        url: 'https://www.volunteer.gov/results.cfm?states=DC',
        teaserImage: 'national-park-service',
        photoImage: 'national-park-service-photo',
      },
      {
        id: 14,
        urlFriendlyId: 'dc-central-kitchen',
        name: 'D.C. Central Kitchen',
        lead: 'Every day, dedicated volunteers help us transform wasted food into balanced meals for our community.',
        description: 'DC Central Kitchen was founded in 1989 by young nightclub manager named Robert Egger. Frustrated and challenged by his volunteer experiences with traditional charitable responses to hunger and homelessness, Robert pioneered a new model aimed at liberating people from the conditions of poverty. Robert\'s idea for a ‘central kitchen\' involved picking up wasted food (which people said was unwise), turning it into balanced meals for shelters and nonprofits (which people said was unsustainable), and using that process to train jobless adults in the culinary arts (which people said was impossible).',
        bulletPoints: [
          'We believe we will never feed our way out of hunger, because hunger is a symptom of the deeper problem of poverty.',
          'We believe in the transformative power of a job, and that everyone deserves the chance to share in the dignity of work while contributing to our community.',
          'We believe in building a more equitable food system that ensures access to healthy, dignified food and economic opportunity for all.'
        ],
        url: 'https://dccentralkitchen.org/',
        teaserImage: 'dcck',
        photoImage: 'dcck-photo',
      },
      {
        id: 15,
        urlFriendlyId: 'capital-area-food-bank',
        name: 'Capital Area Food Bank',
        lead: 'Working to solve hunger and its companion problems: chronic undernutrition, heart disease, and obesity.',
        description: 'The Capital Area Food Bank is the largest organization in the Washington metro area working to solve hunger and its companion problems: chronic undernutrition, heart disease, and obesity. We provide meals to 12 percent of the Washington metro area population – that\'s 540,000 of our region\'s mothers, fathers, daughters, sons, sisters, brothers, and grandparents. We work with our network of 444 food assistance partners to provide food and nutrition education to our neighbors in need.',
        bulletPoints: [
          'Hunger: It\'s here, right where we live. It affects every single neighborhood in our region. It impacts people of every age, race, religion, and ethnicity.',
          'Hunger robs children of a chance to learn, undermines health, and makes getting and holding good jobs hard.',
          'By partnering with 444 community organizations in DC, MD, and VA, as well as delivering food directly into hard to reach areas, the Capital Area Food Bank is helping 540,000 people each year get access to good, healthy food.'
        ],
        url: 'https://www.capitalareafoodbank.org/',
        teaserImage: 'capitalfood',
        photoImage: 'capitalfood-photo',
      },
      {
        id: 16,
        urlFriendlyId: 'coderdojo-nova',
        name: 'CoderDojo NOVA',
        lead: 'CoderDojo is a movement oriented around running free, not-for-profit coding clubs and regular sessions for young people.',
        description: 'At CoderDojo NOVA (“CoderNova”), young people learn how to code, develop websites, apps, programs, games and more. CoderNova is set up, run by and taught at by volunteers. We organize tours of technology companies, bring in guest speakers to talk about their career and what they do, and organize events. CoderNova makes development and learning to code a fun, sociable, and cool experience. CoderNova also puts a strong emphasis on open source and free software, and has a strong network of members and volunteers globally.',
        bulletPoints: [
          'Thomas Debass (@debass) and Gelila Teshome (@GelilaAmare) co-founded CoderDojo Nova in 2013, driven by their desire to expose their three daughters the universal language of the future: coding.',
          'We are a program of the 501(c)3 non-profit NVCC Educational Foundation; and we are an independent chapter, unaffiliated with any other organizations such as CoderDojo DC or CoderDojo USA.',
          'Our coding sessions will work proactively to eliminate gender and socioeconomic barriers to computer science by providing a no-cost way for young people to experience programming early—and have fun doing it! Most sessions require no prior knowledge!'
        ],
        url: 'http://www.coderdojonova.co/',
        teaserImage: 'coderdojo',
        photoImage: 'coderdojo-photo',
      }
    ];
    return { heroes };
  }
}

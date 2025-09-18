import { Article } from '../types';

export const articles: Article[] = [
  {
    id: '1',
    title: "AI Revolution Transforms Healthcare Industry Worldwide",
    description: "Artificial intelligence continues to make significant strides in medical diagnosis and treatment, promising better outcomes for patients worldwide with breakthrough technologies.",
    content: `
      <p>The healthcare industry is experiencing an unprecedented transformation as artificial intelligence technologies revolutionize patient care, diagnosis, and treatment protocols across the globe.</p>
      
      <p>Leading medical institutions have reported remarkable improvements in diagnostic accuracy, with AI-powered systems now capable of detecting diseases at earlier stages than traditional methods. Dr. Sarah Chen, Chief of Digital Health at Stanford Medical Center, notes that "AI has become an invaluable partner in our mission to provide precise, personalized care."</p>
      
      <p>Recent studies show that AI-assisted diagnosis has improved accuracy rates by up to 40% in certain cancer screenings, while reducing the time required for analysis from hours to minutes. This breakthrough is particularly significant in regions with limited access to specialist physicians.</p>
      
      <p>The integration of machine learning algorithms in treatment planning has also shown promising results, with personalized therapy recommendations based on patient genetics, medical history, and real-time health data leading to better outcomes and reduced side effects.</p>
      
      <p>However, experts emphasize the importance of maintaining human oversight and addressing ethical considerations as these technologies continue to evolve. The future of healthcare lies in the seamless collaboration between artificial intelligence and human expertise.</p>
    `,
    image: "https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    category: "Technology",
    categoryColor: "bg-blue-600",
    timeAgo: "3 hours ago",
    author: "Dr. Michael Rodriguez",
    readTime: "5 min read",
    views: 12547,
    likes: 234,
    tags: ["AI", "Healthcare", "Technology", "Medicine", "Innovation"],
    relatedArticles: ['2', '4', '6'],
    comments: [
      {
        id: '1',
        userId: '1',
        userName: 'Sarah Johnson',
        userAvatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        content: 'This is incredibly exciting! As a nurse, I can already see how AI is helping us provide better patient care.',
        timestamp: new Date('2024-01-15T10:30:00'),
        likes: 12
      },
      {
        id: '2',
        userId: '2',
        userName: 'Dr. James Wilson',
        userAvatar: 'https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop&crop=face',
        content: 'The ethical considerations mentioned are crucial. We need to ensure AI enhances rather than replaces human judgment.',
        timestamp: new Date('2024-01-15T11:15:00'),
        likes: 8
      }
    ]
  },
  {
    id: '2',
    title: "Renewable Energy Breaks New Global Records in 2024",
    description: "Solar and wind power generation reaches unprecedented levels, marking a significant milestone in the global transition to sustainable energy sources.",
    content: `
      <p>The renewable energy sector has achieved remarkable milestones in 2024, with solar and wind power generation reaching record-breaking levels worldwide, signaling a decisive shift toward sustainable energy solutions.</p>
      
      <p>According to the International Energy Agency's latest report, renewable energy sources now account for over 35% of global electricity generation, surpassing coal for the first time in modern history. This achievement represents a 15% increase from the previous year.</p>
      
      <p>Solar energy led the charge with a 28% increase in capacity, driven by technological improvements that have reduced costs by 60% over the past five years. Wind power followed closely, with offshore wind farms contributing significantly to the growth.</p>
      
      <p>Countries like Denmark, Costa Rica, and Iceland have demonstrated that 100% renewable energy is not just possible but economically viable. Denmark now generates 140% of its electricity needs from wind power, exporting the surplus to neighboring countries.</p>
      
      <p>The transition has created millions of jobs globally, with the renewable energy sector now employing over 13 million people worldwide. Investment in clean energy technologies reached $1.8 trillion in 2024, double the amount invested in fossil fuels.</p>
    `,
    image: "https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    category: "Environment",
    categoryColor: "bg-green-600",
    timeAgo: "5 hours ago",
    author: "Emma Thompson",
    readTime: "4 min read",
    views: 9876,
    likes: 189,
    tags: ["Renewable Energy", "Solar", "Wind", "Climate", "Sustainability"],
    relatedArticles: ['3', '5', '1'],
    comments: []
  },
  {
    id: '3',
    title: "Global Economic Forum Addresses Rising Inflation Concerns",
    description: "World leaders and economists gather to discuss comprehensive strategies for managing inflation and ensuring economic stability across nations.",
    content: `
      <p>The World Economic Forum's annual summit brought together leading economists, policymakers, and business leaders to address the growing concerns about global inflation and its impact on economic stability.</p>
      
      <p>Central bank governors from major economies presented coordinated strategies to combat inflation while maintaining economic growth. Federal Reserve Chair Janet Morrison emphasized the delicate balance required: "We must act decisively against inflation without triggering a severe economic downturn."</p>
      
      <p>The forum highlighted several key factors contributing to current inflationary pressures, including supply chain disruptions, energy price volatility, and labor market dynamics. Experts predict that inflation rates may remain elevated through the first half of 2024 before stabilizing.</p>
      
      <p>Emerging markets face particular challenges, with some countries experiencing inflation rates exceeding 20%. The International Monetary Fund announced a $50 billion support package to help developing nations manage economic pressures.</p>
      
      <p>Technology and innovation were identified as crucial tools for long-term economic stability, with digital currencies and blockchain technology offering new possibilities for monetary policy implementation.</p>
    `,
    image: "https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    category: "Business",
    categoryColor: "bg-yellow-600",
    timeAgo: "7 hours ago",
    author: "Robert Chen",
    readTime: "6 min read",
    views: 7654,
    likes: 156,
    tags: ["Economics", "Inflation", "Policy", "Global Markets", "Finance"],
    relatedArticles: ['1', '4', '2'],
    comments: []
  },
  {
    id: '4',
    title: "Space Mission Discovers Potentially Habitable Exoplanet System",
    description: "NASA's latest deep space exploration reveals a fascinating planetary system that could provide insights into the formation of our universe and possibility of life.",
    content: `
      <p>NASA's James Webb Space Telescope has made a groundbreaking discovery, identifying a planetary system located 120 light-years away that shows remarkable similarities to our own solar system and potential signs of habitability.</p>
      
      <p>The system, designated TRAPPIST-2, contains seven Earth-sized planets, three of which orbit within the habitable zone where liquid water could exist. Advanced spectroscopic analysis has revealed atmospheric compositions that suggest the presence of water vapor and oxygen.</p>
      
      <p>Dr. Maria Gonzalez, lead astronomer on the project, described the discovery as "a watershed moment in our search for life beyond Earth. The atmospheric signatures we're detecting are consistent with biological processes."</p>
      
      <p>The discovery has implications beyond the search for extraterrestrial life. The planetary system's formation and evolution provide valuable insights into how solar systems develop and the conditions necessary for supporting life.</p>
      
      <p>Future missions are already being planned to study the system in greater detail, with the possibility of launching advanced space telescopes specifically designed to analyze the atmospheric composition and search for biosignatures.</p>
    `,
    image: "https://images.pexels.com/photos/73873/star-clusters-rosette-nebula-star-galaxies-73873.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    category: "Science",
    categoryColor: "bg-purple-600",
    timeAgo: "9 hours ago",
    author: "Dr. Lisa Park",
    readTime: "7 min read",
    views: 15432,
    likes: 298,
    tags: ["Space", "NASA", "Exoplanets", "Astronomy", "Discovery"],
    relatedArticles: ['2', '6', '1'],
    comments: []
  },
  {
    id: '5',
    title: "Championship Finals Draw Record-Breaking Global Viewership",
    description: "The season's most anticipated match breaks streaming records as fans worldwide tune in to witness sporting history in the making.",
    content: `
      <p>The World Championship Finals shattered all previous viewership records, with over 2.3 billion people tuning in globally to witness what many are calling the greatest sporting event of the decade.</p>
      
      <p>Streaming platforms reported unprecedented traffic, with some services experiencing temporary outages due to the massive influx of viewers. The final match peaked at 2.8 billion concurrent viewers during the decisive moments.</p>
      
      <p>The championship featured breakthrough performances from emerging athletes, with 19-year-old sensation Alex Rivera becoming the youngest champion in the sport's history. Rivera's victory speech, delivered in three languages, has already garnered over 100 million views on social media.</p>
      
      <p>The economic impact of the championship extends far beyond viewership numbers. Host cities reported tourism revenue increases of up to 300%, while merchandise sales broke all previous records with over $500 million in sales during the championship week.</p>
      
      <p>The event also showcased innovative broadcasting technology, including 360-degree cameras, real-time performance analytics, and interactive viewing experiences that allowed fans to choose their camera angles and access exclusive content.</p>
    `,
    image: "https://images.pexels.com/photos/114296/pexels-photo-114296.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    category: "Sports",
    categoryColor: "bg-red-600",
    timeAgo: "12 hours ago",
    author: "Marcus Johnson",
    readTime: "4 min read",
    views: 23456,
    likes: 445,
    tags: ["Sports", "Championship", "Records", "Broadcasting", "Entertainment"],
    relatedArticles: ['3', '1', '4'],
    comments: []
  },
  {
    id: '6',
    title: "Mental Health Awareness Reaches New Heights Globally",
    description: "Global initiatives focus on mental health support, breaking stigmas and providing accessible resources for communities worldwide.",
    content: `
      <p>Mental health awareness has reached unprecedented levels globally, with governments, organizations, and communities coming together to address what the World Health Organization calls "the defining health challenge of our time."</p>
      
      <p>New research reveals that 1 in 4 people worldwide will experience mental health challenges at some point in their lives, prompting a coordinated international response to improve access to care and reduce stigma.</p>
      
      <p>The Global Mental Health Initiative, launched by 50 countries, commits $10 billion over five years to expand mental health services, train healthcare workers, and develop innovative treatment approaches including digital therapy platforms and AI-assisted counseling.</p>
      
      <p>Technology is playing a crucial role in making mental health support more accessible. Mobile apps providing cognitive behavioral therapy, meditation guidance, and peer support networks have seen usage increase by 400% in the past year.</p>
      
      <p>Educational institutions are implementing comprehensive mental health programs, with over 10,000 schools worldwide now offering on-site counseling services and mental health education as part of their core curriculum.</p>
    `,
    image: "https://images.pexels.com/photos/3759659/pexels-photo-3759659.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    category: "Health",
    categoryColor: "bg-teal-600",
    timeAgo: "14 hours ago",
    author: "Dr. Amanda Foster",
    readTime: "5 min read",
    views: 11234,
    likes: 267,
    tags: ["Mental Health", "Healthcare", "Wellness", "Global Initiative", "Technology"],
    relatedArticles: ['1', '2', '5'],
    comments: []
  }
];
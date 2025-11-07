/**
 * Centralized configuration object for website content.
 * Modifying values here will update the content across the site,
 * making it easy to adapt the template for different realtors.
 */

// Define agent details separately to avoid initialization errors
const agentDetails = {
  /** @type {string} Agent's full name (e.g., "Mike Henry"). Used widely. */
  name: "Jonathan York",
  /** @type {string} Agent's first name (e.g., "Mike"). Used in informal contexts. */
  firstName: "Jonathan",
  /** @type {string} Agent's professional title (e.g., "Brampton Realtor"). Used in copyright, potentially titles. */
  title: "Toronto Realtor",
  /** @type {string} Agent's professional designation (e.g., "Real Estate Sales Representative", "Broker", "Realtor"). */
  designation: "Real Estate Sales Representative",
  /** @type {string} Primary city/town served (e.g., "Brampton"). Used in descriptions, titles. */
  location: "Toronto",
  /** @type {string} Broader region served (if applicable, e.g., "Peel Region"). Used in FAQ. */
  region: "Greater Toronto Area",
  /** @type {number} Agent's years of experience. Used in About section, potentially counters. */
  experienceYears: 10,
  /** @type {string} Agent's primary contact phone number. Used in Footer, Contact forms/sidebars. */
  phone: "647-545-5638",
  /** @type {string} Agent's primary contact email address. Used in Footer, Contact forms/sidebars. */
  email: "jonathan@jyork.ca",
  /** @type {string} Agent's primary office address. */
  address: "96 Spadina Ave. #301, Toronto, ON M5V 2J6",
  /** @type {string} Name of the brokerage the agent is affiliated with. */
  brokerageName: "Wahi Realty Inc.",
  /** @type {string} URL for the standard agent headshot from AWS. */
  headshotImageSrc: "/images/agent/jonathan-york-normal-1.png",
  /** @type {string} URL for the agent headshot with no background (constructed from AWS URL). */
  headshotNoBgImageSrc: "/images/agent/headshot_bg.png",
  /**
   * @description List of social media profiles for the footer.
   * @type {Array<{name: string, url: string, iconClass: string}>}
   */
  socialLinks: [
    // Provide actual URLs for the agent's profiles
    { name: "Facebook", url: "#", iconClass: "icon-fb" },
    { name: "Twitter", url: "#", iconClass: "icon-X" },
    { name: "LinkedIn", url: "#", iconClass: "icon-linked" },
    { name: "Instagram", url: "#", iconClass: "icon-ins" }
  ]
};

export const siteContent = {
  /**
   * @description Core information about the individual real estate agent.
   * Used across various components like headers, footers, contact sections, etc.
   */
  agent: agentDetails,

  /**
   * @description Base templates for SEO metadata (page titles, descriptions).
   * Used in the metadata export of each page layout.
   */
  metadata: {
    /** @type {string} Text appended to page-specific titles (e.g., "| Mike Henry - Brampton Realtor"). */
    baseTitleSuffix: `| ${agentDetails.name} - ${agentDetails.title}`,
    /** @type {string} Default site description for SEO. Concise summary of agent/service/location (~15-25 words). */
    baseDescription: `${agentDetails.name}, your trusted realtor for buying and selling homes in ${agentDetails.location}. ${agentDetails.experienceYears} years of local experience.`,
  },

  /**
   * @description Content for the main hero section on the home page (`Hero6.jsx`).
   */
  hero: {
    slides: [
      {
        title: "Hero Section Headline",
        description: "Mission: To put you in the home of your dreams as quickly as possible!",
        buttonText: "Learn How I Can Help",
        smallImage: { src: "/images/page-title/gallery-1.jpg", alt: "Realtor Image" }
      }
    ],
    mainImages: [
      { src: agentDetails.headshotImageSrc, alt: `${agentDetails.name} - ${agentDetails.title}` },
      { src: "/images/page-title/thumbs-main-1.jpg", alt: "Stylish Living Room Interior" },
      { src: "/images/page-title/thumbs-main-2.jpg", alt: `${agentDetails.location} Community Park` }
    ],
    paginationImages: [
       { src: "/images/page-title/pagi-thumbs-1.jpg", alt: "Keys Exchange" },
       { src: "/images/page-title/pagi-thumbs-2.jpg", alt: `${agentDetails.location} Real Estate Icon` },
       { src: "/images/page-title/pagi-thumbs-3.jpg", alt: "Abstract Texture" }
    ],
    counter1Label: "Happy Clients",
    counter2Label: `Years in ${agentDetails.location}`,
    searchPlaceholder: `Interested in ${agentDetails.location} Real Estate?`,
    searchButtonText: "Get Started Today"
  },

  /**
   * @description Content for the main "About" section on the home page (`About6.jsx`).
   */
  about: {
    sectionTitle: `Experience and Dedication in ${agentDetails.location} Real Estate`,
    mainParagraph: `With ${agentDetails.experienceYears} years of dedicated experience in the ${agentDetails.location} market, I offer unparalleled local knowledge and a commitment to achieving your real estate goals. My client-first approach ensures clear communication and a seamless process whether you're buying or selling.`,
    callLabel: "Call Agent",
    helpLabel: "Need Help?",
    moreButtonText: "Learn More About Agent",
    expertiseTitle: "My Expertise:",
    expertiseIntro: `I offer specialized real estate services tailored to the ${agentDetails.location} market:`,
    expertiseItems: [
      "Residential Sales and Leasing",
      "Commercial Real Estate",
      "Property Management",
      "Investment Advisory"
    ],
    image1Src: "/images/section/section-find-home-2.jpg",
    image2Src: "/images/section/section-find-home.jpg",
  },

  /**
   * @description Content for the "Services" section on the home page (`Services6.jsx`).
   */
  services: {
    sectionTitle: "Client-Focused Real Estate Services",
    introParagraph: `My focus is on providing exceptional, personalized service to every client. I leverage my ${agentDetails.experienceYears} years of ${agentDetails.location} market knowledge to ensure you make informed decisions and achieve the best possible outcome.`,
    buttonText: "Explore My Services",
    items: [
      { id: 1, icon: "icon-house-2", title: "Residential Sales and Leasing", description: "Assisting clients in buying, selling, and leasing residential properties such as houses, apartments, and condominiums", imageSrc: "/images/section/service-1.jpg", delay: "0.1s" },
      { id: 2, icon: "icon-house-3", title: "Commercial Real Estate Services", description: "Facilitating transactions related to commercial properties such as office buildings, retail spaces, industrial warehouses, land for development", imageSrc: "/images/section/service-2.jpg", delay: "0.2s" },
      { id: 3, icon: "icon-house-4", title: "Property Management", description: "Managing properties on behalf of owners, including tenant screening, rent collection, maintenance, and financial reporting", imageSrc: "/images/section/service-3.jpg", delay: "0.3s" }
    ]
  },

  /**
   * @description Content for the section featuring the agent (formerly "Team" section) (`Team6.jsx`).
   */
  aboutMike: {
    sectionTitle: "About The Agent",
    description: `Your trusted guide for buying and selling in ${agentDetails.location}.`,
    agentDescription: `Your ${agentDetails.location} Realtor - ${agentDetails.experienceYears} Years Experience`,
    buttonText: "Learn About My Approach"
  },

  /**
   * @description Content for the "Success Stories" section (formerly "Projects") (`Projects6.jsx`).
   */
  projects: {
    sectionTitle: `${agentDetails.firstName}'s Client Success Stories`,
    introParagraph: `See examples of how I've helped clients achieve their real estate goals in ${agentDetails.location}, delivering exceptional results with personalized service.`,
    storyTitles: [
      `Successful ${agentDetails.location} Home Purchase`, "Investment Property Secured", "Achieving Top Market Value", "Expert Negotiation Skills", "Client Success Story #5",
      `Seamless Property Sale in ${agentDetails.location}`, "Navigating a Complex Transaction", "Relocation Made Easy", "Client Success Story #9", "Client Success Story #10",
      "First-Time Buyer Guidance", "Client Success Story #12"
    ],
    emptyBoxText: "Let me help you write your own success story.",
    buttonText: "View Success Stories",
    linkTarget: "/contact"
  },

  /**
   * @description Content for the "Testimonials" section (`Testimonials6.jsx`).
   */
  testimonials: {
    sectionTitle: "What My Clients Say",
    introParagraph: `Building trust and achieving results for my clients in ${agentDetails.location} is my top priority. Hear directly from those I've had the pleasure of working with.`,
    items: [
      { id: 1, description: `${agentDetails.name} made buying our first home in ${agentDetails.location} so easy! His knowledge and patience were invaluable. Highly recommended!`, avatar: "/images/avatar/testimonials-3.jpg", name: "Sarah & Tom P.", role: `First-Time Homebuyers, ${agentDetails.location}` },
      { id: 2, description: `Selling our house with ${agentDetails.firstName} was a great experience. He got us a fantastic price and handled everything professionally. Thanks, ${agentDetails.firstName}!`, avatar: "/images/avatar/testimonials-2.jpg", name: "David R.", role: `Home Seller, ${agentDetails.location}` },
      { id: 3, description: `As an investor, I rely on ${agentDetails.firstName}'s expertise of the ${agentDetails.location} market. He consistently finds great opportunities. A true professional.`, avatar: "/images/avatar/testimonials-4.jpg", name: "Priya K.", role: "Real Estate Investor" }
    ]
  },

  /**
   * @description Content related to blog sections and components.
   */
  blog: {
    sectionTitle: `${agentDetails.firstName}'s ${agentDetails.location} Market Insights`,
    introParagraph: `Stay informed with the latest news, tips, and trends relevant to the ${agentDetails.location} real estate market.`,
    gridTitle: `${agentDetails.name}'s Blog`,
    detailAuthor: agentDetails.name,
    relatedTitle: `More Articles by ${agentDetails.firstName}`,
    newsletterTitle: "Join My Newsletter",
    newsletterDescription: `Sign up to receive ${agentDetails.location} market insights and tips directly from ${agentDetails.name}.`,
    posts: [
      { id: 4, imageSrc: "/images/blog/blog-grid-1.jpg", alt: `${agentDetails.location} neighbourhood`, tag: "Buying Tips", date: "November 1, 2025", title: `5 Tips for First-Time Homebuyers in ${agentDetails.location}`, description: `Navigate ${agentDetails.location}'s buyer-friendly market with insider strategies on government programs, neighborhood selection, and building your expert team for homeownership success` },
      { id: 5, imageSrc: "/images/blog/blog-grid-2.jpg", alt: "Condo building", tag: "Market Update", date: "November 3, 2025", title: `Understanding ${agentDetails.location}'s Condo Market Trends`, description: `Discover why ${agentDetails.location} condos offer $90,000+ savings compared to downtown Toronto, plus essential insights on maintenance fees, neighborhoods, and investment potential in today's market.` },
      { id: 6, imageSrc: "/images/blog/blog-grid-3.jpg", alt: "House exterior", tag: "Selling Tips", date: "November 6, 2025", title: `How to Prepare Your ${agentDetails.location} Home for a Quick Sale`, description: `Transform your property into a buyer magnet with proven staging techniques, strategic pricing, and professional presentation strategies that sell homes in 28-36 days.` }
    ],
    postDetails: [
      {
        id: 4,
        paragraph1: `Ready to make ${agentDetails.location} your home? This vibrant community offers the perfect blend of lakefront living and urban convenience, making it an ideal launching pad for your homeownership journey.`,
        paragraph2: `With home prices averaging $1.04-$1.24 million compared to Toronto's $1.16 million average, ${agentDetails.location} delivers exceptional value while keeping you connected to everything the GTA has to offer.\n\nThe current market strongly favors buyers like you, with 42% more inventory available and homes selling closer to asking price than in recent years.`,
        quote: `Let's dive into five essential strategies that'll help you navigate ${agentDetails.location}'s market with confidence.`,
        quoteAuthor: `${agentDetails.name}`,
        paragraph3: `Maximize your down payment power with smart government programs. Your government wants to help you succeed, and 2024 brought game-changing improvements to first-time buyer programs.`,
        paragraph4: `In Toronto, you'll also benefit from generous land transfer tax rebates totaling up to $8,475 when you combine provincial and municipal rebates. For a typical ${agentDetails.location} condo around $550,000, this rebate covers your entire land transfer tax burden.`,
        quote2: `Choose your ${agentDetails.location} neighborhood strategically.`,
        quoteAuthor2: `${agentDetails.name}`,
        paragraph5: `${agentDetails.location} isn't just one market – it's a collection of distinct communities, each offering different lifestyles and price points. Understanding these differences helps you find the perfect match for your budget and priorities.`
      },
      {
        id: 5,
        paragraph1: `${agentDetails.location}'s condo market is experiencing a fascinating transformation that creates both challenges and opportunities for savvy buyers.`,
        paragraph2: `Current data reveals ${agentDetails.location} condos averaging $535,000-$683,000 compared to Toronto's $726,000-$770,000 range, representing exceptional value for lakefront and transit-connected living.`,
        quote: `Let's explore what these trends mean for your condo buying journey and how to capitalize on current conditions.`,
        quoteAuthor: `${agentDetails.name}`,
        paragraph3: `Market fundamentals show clear buyer advantages. The numbers tell a compelling story of opportunity.`,
        paragraph4: `This shift reflects broader market dynamics including higher inventory levels – up 71% compared to 2023 – and changing buyer behavior.`,
        quote2: `Understanding maintenance fees and long-term costs.`,
        quoteAuthor2: `${agentDetails.name}`,
        paragraph5: `One of the biggest condo considerations involves ongoing monthly fees, which in ${agentDetails.location} typically range from $420-$900 for a 700-square-foot unit.`
      },
      {
        id: 6,
        paragraph1: `Selling your ${agentDetails.location} home in today's market requires a completely different approach than the frenzied bidding wars of recent years.`,
        paragraph2: `The good news? Properly prepared homes still sell quickly and for strong prices, even in this more balanced market.`,
        quote: `Here's your complete guide to positioning your ${agentDetails.location} property for maximum appeal and fastest sale in 2024-2025 market conditions.`,
        quoteAuthor: `${agentDetails.name}`,
        paragraph3: `Master the art of strategic pricing. In today's market, pricing accuracy determines everything.`,
        paragraph4: `Consider the absorption rate in your specific neighborhood and property type. If similar homes are taking 35+ days to sell, price aggressively to generate immediate interest.`,
        quote2: `Create irresistible visual appeal through professional staging.`,
        quoteAuthor2: `${agentDetails.name}`,
        paragraph5: `91% of professionally staged homes sell within one month, making staging investment rather than expense in today's competitive inventory environment.`
      }
    ],
    sidebarAdTitle: `Ready to Buy or Sell in ${agentDetails.location}?`,
    sidebarAdText: `Connect with ${agentDetails.name} - I know the market inside out and can help you achieve your goals.`,
    sidebarAdButton: "Contact Agent"
  },

  /**
   * @description Content for the FAQ page (`Faqs.jsx`).
   */
  faq: {
    pageTitle: "Frequently Asked Questions",
    contactBoxQuestion: "Still have questions?",
    contactBoxText: "Can't find the answer you're looking for? Please get in touch.",
    sidebarContactTitle: "Contact Agent",
    categories: [
      {
        title: "About The Agent & Services",
        idPrefix: "faq-serv",
        questions: [
          { id: "faq-q1", question: "What areas do you specialize in?", answer: `I specialize in residential real estate throughout ${agentDetails.location} and the surrounding ${agentDetails.region}. With ${agentDetails.experienceYears} years focused specifically on this area, I have deep knowledge of its diverse neighbourhoods and market dynamics.` },
          { id: "faq-q2", question: "What services do you offer for buyers?", answer: "I provide comprehensive support for buyers, including personalized property searches based on your needs, market analysis, expert negotiation, guidance through inspections and financing, and ensuring a smooth closing process." },
          { id: "faq-q3", question: "How do you help home sellers?", answer: "For sellers, I offer strategic pricing analysis, professional home staging advice, targeted marketing campaigns across multiple platforms, skilled negotiation to get you the best price, and management of the entire selling process from listing to closing." },
          { id: "faq-q4", question: "What makes you different from other realtors?", answer: `My ${agentDetails.experienceYears} years of dedicated experience in ${agentDetails.location}, combined with a client-first approach built on communication and trust, sets me apart.` }
        ]
      },
      {
        title: "The Process & Fees",
        idPrefix: "faq-proc",
        questions: [
          { id: "faq-q5", question: "What are your commission fees?", answer: "Real estate commissions are typically paid by the seller and can vary depending on the specifics of the transaction. I believe in full transparency and will discuss all fees and services clearly during our initial consultation." },
          { id: "faq-q6", question: "What should I expect during the closing process?", answer: "The closing process involves the final transfer of ownership. Key steps include a final walkthrough of the property, signing legal documents (often with a lawyer), transferring funds, and receiving the keys." }
        ]
      },
      {
        title: "Getting Started",
        idPrefix: "faq-start",
        questions: [
          { id: "faq-q7", question: "How do I get started working with you?", answer: `The best way to start is by scheduling a free, no-obligation consultation. We can discuss your specific needs, goals, and how I can best assist you in the ${agentDetails.location} real estate market.` }
        ]
      }
    ]
  },

  /**
   * @description Content specific to the main Contact page.
   */
  contactPage: {
    formTitle: "I Would Love to Hear From You",
    formDescription: "Tell me about your goals, and I'll explain how I can help you achieve them.",
    formButtonText: "Send Agent a Message",
    aboutTitle: `Providing the most suitable and quality real estate guidance in ${agentDetails.location}.`,
    aboutDescription: "Ready to take the next step? Contact me today for a personalized consultation."
  },

  /**
   * @description Content specific to the Home Loan Process page.
   */
  loanProcess: {
    factsTitle: "I Am Here to Help",
    factsDescription1: "The home loan process can feel overwhelming, but I will help you stay informed throughout, from pre-approval to closing.",
    factsDescription2: `I stand ready to serve you as your dedicated ${agentDetails.location} real estate agent.`,
    factsButtonText: "About The Agent",
    factsCounter1Label: "Clients Served",
    factsCounter2Label: "Years Experience",
    factsCounter3Label: "Properties Sold",
    processTitle: `Selling Your Home With ${agentDetails.name}`,
    processDescription: "I'll get to know you to understand your selling goals, and explain the selling process so you know what to expect.",
    processStepDescription: "Your responses will help connect you with the right resources.",
    calculatorTitle: "Calculate Mortgage Payments",
    calculatorDescription: "Estimate your payment with this easy-to-use loan calculator."
  },

  /**
   * @description Content for the 404 Not Found page.
   */
  notFound: {
    message: "I searched everywhere but couldn't find what you're looking for. Let's find <br />a better place for you to go."
  },

  /**
   * @description Content for common components used across multiple pages.
   */
  common: {
    ctaTitle: `Looking for a ${agentDetails.location} Real Estate Expert?`,
    ctaDescription: "Whether you're buying or selling, I'll help you achieve the best possible outcome.",
    ctaButtonText: "Contact Agent Today",
    brandsTitle: "Let's Work Together",
    brandsDescription: "Let's discuss how my expertise can help you achieve your real estate goals."
  }
};
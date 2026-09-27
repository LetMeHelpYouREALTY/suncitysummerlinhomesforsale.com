import { CATEGORY_ORDER_55PLUS } from "./categories";
import type { CommunityAmenityConfig } from "./types";

/**
 * Center: Sun City Summerlin HOA / community address (9855 Del Webb Blvd).
 * Coordinates verified via OpenStreetMap Nominatim (Sep 2026).
 */
export const SUN_CITY_SUMMERLIN_AMENITY_CONFIG: CommunityAmenityConfig = {
  communityName: "Sun City Summerlin",
  city: "Las Vegas",
  state: "NV",
  center: { lat: 36.2063684, lng: -115.2996896 },
  centerAddress: "9855 Del Webb Boulevard, Las Vegas, NV 89134",
  centerSourceNote:
    "Community center coordinates from 9855 Del Webb Blvd (Sun City Summerlin), OpenStreetMap Nominatim, September 2026.",
  pageType: "55plus",
  categoryOrder: CATEGORY_ORDER_55PLUS,
  includeSchoolsOnMap: false,
  curatedPlaces: [
    {
      name: "Sun City Summerlin",
      category: "community",
      address: "9855 Del Webb Boulevard, Las Vegas, NV 89134",
      schemaType: "Residence",
      lat: 36.2063684,
      lng: -115.2996896,
      note: "Nevada's largest 55+ active adult community",
    },
    {
      name: "Highland Falls Golf Club",
      category: "golf",
      address: "Sun City Summerlin, Las Vegas, NV 89134",
      schemaType: "GolfCourse",
    },
    {
      name: "Palm Valley Golf Club",
      category: "golf",
      address: "Sun City Summerlin, Las Vegas, NV 89134",
      schemaType: "GolfCourse",
    },
    {
      name: "Eagle Crest Golf Club",
      category: "golf",
      address: "Sun City Summerlin, Las Vegas, NV 89134",
      schemaType: "GolfCourse",
    },
    {
      name: "Summerlin Hospital",
      category: "healthcare",
      address: "657 North Town Center Drive, Las Vegas, NV 89144",
      schemaType: "Hospital",
      lat: 36.1811913,
      lng: -115.3169384,
    },
    {
      name: "Smith's Food and Drug",
      category: "grocery",
      address: "2211 North Rampart Boulevard, Las Vegas, NV 89128",
      schemaType: "GroceryStore",
      lat: 36.2016277,
      lng: -115.2836482,
    },
    {
      name: "Downtown Summerlin",
      category: "shopping",
      address: "1980 Festival Plaza Drive, Las Vegas, NV 89135",
      schemaType: "ShoppingCenter",
      lat: 36.1500092,
      lng: -115.3331717,
    },
    {
      name: "Red Rock Canyon National Conservation Area",
      category: "parks",
      address: "1000 Scenic Loop Drive, Las Vegas, NV 89161",
      schemaType: "Park",
    },
  ],
  categoryCopy: {
    healthcare: {
      title: "Healthcare near Sun City Summerlin",
      paragraphs: [
        "Sun City Summerlin sits in northwest Las Vegas with quick access to full-service hospitals in the Summerlin area. Summerlin Hospital on North Town Center Drive is a major medical campus a short drive from the community gates.",
        "Residents also use specialty clinics, urgent care, and pharmacies along Rampart Boulevard and throughout the Summerlin medical corridor. Dr. Jan Duffy helps buyers compare commute times to preferred providers when healthcare access is a priority.",
      ],
    },
    golf: {
      title: "Golf in Sun City Summerlin",
      paragraphs: [
        "Three resident golf courses—Highland Falls, Palm Valley, and Eagle Crest—are inside Sun City Summerlin. Highland Falls is known as an executive layout; Palm Valley and Eagle Crest offer championship-style play with mountain views.",
        "Tee times and resident rates are managed through the community's golf program, one reason active adults choose Sun City over newer 55+ developments.",
      ],
    },
    parks: {
      title: "Parks and outdoor recreation",
      paragraphs: [
        "Inside the gates, landscaped common areas, walking paths, and recreation centers anchor daily life. Just west of Summerlin, Red Rock Canyon National Conservation Area offers hiking and scenic drives along the Spring Mountains.",
        "Neighborhood parks throughout Summerlin and trail systems along the western edge of the valley are easy day trips from Sun City Summerlin.",
      ],
    },
    community: {
      title: "Recreation centers and clubs",
      paragraphs: [
        "Four recreation centers—Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista—offer pools, fitness rooms, courts, and club meeting space. More than 100 resident clubs cover golf, pickleball, arts, travel, and social activities.",
        "The community association at 9855 Del Webb Boulevard is the hub for HOA services, events, and resident resources.",
      ],
    },
    grocery: {
      title: "Grocery and everyday errands",
      paragraphs: [
        "Smith's Food and Drug on North Rampart Boulevard is one of the closest full-service supermarkets to Sun City Summerlin's northern sections. Additional grocers and big-box retailers line Rampart and Charleston west of the 215 Beltway.",
        "Downtown Summerlin adds specialty food shops, dining, and services about 10–15 minutes south of the community, depending on traffic and your village.",
      ],
    },
    restaurants: {
      title: "Dining options",
      paragraphs: [
        "Casual and chain restaurants cluster along Rampart Boulevard and Charleston Boulevard near the 215. For date-night dining, Downtown Summerlin and Boca Park Fashion Village offer sit-down restaurants, cafes, and patios.",
        "Many Sun City residents also enjoy clubhouse dining and social events inside the community before heading to Summerlin's restaurant row.",
      ],
    },
    shopping: {
      title: "Shopping and services",
      paragraphs: [
        "Downtown Summerlin is the primary regional shopping district—department stores, boutiques, and services in an open-air center off the 215 and Town Center Drive.",
        "Closer to home, strip centers along Rampart provide pharmacies, banks, dry cleaners, and everyday retail without crossing the valley.",
      ],
    },
  },
  commuteNotes: [
    {
      destination: "Las Vegas Strip (mid-Strip)",
      note:
        "Approximately 20–30 minutes by car in typical off-peak traffic via the 215 Beltway and I-15; allow extra time for events and weekends.",
    },
    {
      destination: "Harry Reid International Airport",
      note:
        "Approximately 25–35 minutes via the 215 Beltway and I-15 south, depending on terminal and traffic.",
    },
    {
      destination: "Downtown Summerlin",
      note:
        "Approximately 10–15 minutes south through Summerlin parkways and the 215 corridor.",
    },
    {
      destination: "Summerlin Hospital",
      note:
        "Approximately 10–15 minutes to the Town Center Drive medical campus south of Sun City Summerlin.",
    },
  ],
  faqs: [
    {
      question: "What grocery stores are near Sun City Summerlin?",
      answer:
        "Smith's Food and Drug on North Rampart Boulevard is one of the closest major supermarkets; additional grocers and retailers line Rampart and Charleston near the 215 Beltway.",
    },
    {
      question: "How far is Sun City Summerlin from the Las Vegas Strip?",
      answer:
        "The Strip is roughly 20–30 minutes by car in typical off-peak traffic via the 215 and I-15, though major events can add time.",
    },
    {
      question: "Are there hospitals near Sun City Summerlin?",
      answer:
        "Yes—Summerlin Hospital on North Town Center Drive is a full-service hospital a short drive south, with additional clinics and urgent care throughout Summerlin.",
    },
    {
      question: "Does Sun City Summerlin have golf courses on site?",
      answer:
        "Yes—residents enjoy three courses inside the community: Highland Falls, Palm Valley, and Eagle Crest, with resident tee-time programs.",
    },
    {
      question: "What recreation centers are in Sun City Summerlin?",
      answer:
        "Four centers—Mountain Shadows, Sun Shadows, Pinnacle, and Desert Vista—offer pools, fitness, courts, and club space for the community's 100+ resident groups.",
    },
    {
      question: "Is Sun City Summerlin close to Red Rock Canyon?",
      answer:
        "Red Rock Canyon is west of Summerlin; many residents reach the scenic loop in roughly 20–30 minutes depending on the entrance and traffic.",
    },
    {
      question: "Where do residents shop besides grocery stores?",
      answer:
        "Downtown Summerlin is the main regional shopping district; closer strip centers on Rampart cover pharmacies, banking, and daily errands.",
    },
    {
      question: "Who can help me buy a home in Sun City Summerlin?",
      answer:
        "Dr. Jan Duffy, REALTOR® with Berkshire Hathaway HomeServices Nevada Properties (License S.0197614.LLC), specializes in Sun City Summerlin and tours communities with buyers every week.",
    },
  ],
};

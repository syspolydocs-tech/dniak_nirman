// Book data interface
export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  category: string;
  description: string;
  isNew?: boolean;
  isSale?: boolean;
  salePercentage?: number;
  pages?: number;
  publisher?: string;
  publishedDate?: string;
  isbn?: string;
}

// Mock book data
export const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Art of Fiction Writing",
    author: "Sarah Mitchell",
    price: 24.99,
    originalPrice: 34.99,
    rating: 4.8,
    reviewCount: 342,
    image: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Fiction",
    description: "A comprehensive guide to mastering the art of fiction writing, covering plot development, character creation, and narrative techniques.",
    isSale: true,
    salePercentage: 29,
    pages: 456,
    publisher: "Literary Press",
    publishedDate: "2024",
    isbn: "978-1234567890"
  },
  {
    id: "2",
    title: "Quantum Physics Fundamentals",
    author: "Dr. Robert Chen",
    price: 45.00,
    rating: 4.6,
    reviewCount: 189,
    image: "https://images.unsplash.com/photo-1725870475677-7dc91efe9f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Science",
    description: "An accessible introduction to quantum physics, explaining complex concepts with clear examples and illustrations.",
    isNew: true,
    pages: 612,
    publisher: "Academic Publications",
    publishedDate: "2025",
    isbn: "978-2345678901"
  },
  {
    id: "3",
    title: "Historical Legends",
    author: "Maria Rodriguez",
    price: 29.99,
    rating: 4.7,
    reviewCount: 276,
    image: "https://images.unsplash.com/photo-1769963121626-7f1885db412c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Biography",
    description: "Compelling biographies of influential historical figures who shaped our world through their extraordinary achievements.",
    pages: 389,
    publisher: "History House",
    publishedDate: "2024",
    isbn: "978-3456789012"
  },
  {
    id: "4",
    title: "Mystery in the Shadows",
    author: "James Patterson",
    price: 19.99,
    originalPrice: 24.99,
    rating: 4.5,
    reviewCount: 512,
    image: "https://images.unsplash.com/photo-1760696473709-a7da66ee87a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Mystery",
    description: "A gripping thriller that will keep you on the edge of your seat until the very last page.",
    isSale: true,
    salePercentage: 20,
    pages: 324,
    publisher: "Thriller Books Inc",
    publishedDate: "2025",
    isbn: "978-4567890123"
  },
  {
    id: "5",
    title: "Poems of the Heart",
    author: "Emily Wordsworth",
    price: 16.99,
    rating: 4.9,
    reviewCount: 428,
    image: "https://images.unsplash.com/photo-1773257618933-998bf303ccbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Poetry",
    description: "A beautiful collection of contemporary poetry exploring themes of love, loss, and self-discovery.",
    isNew: true,
    pages: 198,
    publisher: "Verse Publishing",
    publishedDate: "2025",
    isbn: "978-5678901234"
  },
  {
    id: "6",
    title: "Business Leadership Excellence",
    author: "Michael Thompson",
    price: 39.99,
    rating: 4.4,
    reviewCount: 167,
    image: "https://images.unsplash.com/photo-1652301173329-31271a0be5c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Business",
    description: "Essential strategies and insights for modern business leaders to drive organizational success.",
    pages: 445,
    publisher: "Business Press",
    publishedDate: "2024",
    isbn: "978-6789012345"
  },
  {
    id: "7",
    title: "The Great Novel",
    author: "Jane Austen Modern",
    price: 22.99,
    rating: 4.7,
    reviewCount: 892,
    image: "https://images.unsplash.com/photo-1661936901394-a993c79303c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Fiction",
    description: "A modern classic that explores the complexities of human relationships with wit and wisdom.",
    pages: 387,
    publisher: "Classic Books",
    publishedDate: "2024",
    isbn: "978-7890123456"
  },
  {
    id: "8",
    title: "Advanced Mathematics",
    author: "Prof. David Kumar",
    price: 52.00,
    originalPrice: 65.00,
    rating: 4.3,
    reviewCount: 124,
    image: "https://images.unsplash.com/photo-1725870475677-7dc91efe9f93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=400",
    category: "Science",
    description: "Comprehensive coverage of advanced mathematical concepts for university-level students.",
    isSale: true,
    salePercentage: 20,
    pages: 728,
    publisher: "Academic Press",
    publishedDate: "2024",
    isbn: "978-8901234567"
  },
];

// Contest data interface
export interface Contest {
  id: string;
  title: string;
  description: string;
  category: string;
  prize: string;
  deadline: string;
  participants: number;
  image: string;
  rules: string[];
  status: "open" | "closed" | "upcoming";
  entryFee?: number;
}

// Mock contest data
export const mockContests: Contest[] = [
  {
    id: "1",
    title: "Short Story Challenge 2026",
    description: "Write a compelling short story in under 3,000 words. Any genre welcome!",
    category: "Fiction",
    prize: "$5,000 + Publication",
    deadline: "April 30, 2026",
    participants: 234,
    image: "https://images.unsplash.com/photo-1768811838777-0507859b5ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    status: "open",
    rules: [
      "Maximum 3,000 words",
      "Original unpublished work only",
      "One entry per participant",
      "Must be written in English"
    ]
  },
  {
    id: "2",
    title: "Poetry Spring Festival",
    description: "Submit your best poem celebrating the beauty of spring and renewal.",
    category: "Poetry",
    prize: "$2,500 + Feature Publication",
    deadline: "March 31, 2026",
    participants: 189,
    image: "https://images.unsplash.com/photo-1768811838777-0507859b5ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    status: "open",
    rules: [
      "Maximum 50 lines",
      "Any poetic form accepted",
      "Original work only",
      "Theme must relate to spring"
    ]
  },
  {
    id: "3",
    title: "Young Writers Award",
    description: "For writers aged 18-25. Share your unique voice and perspective.",
    category: "General",
    prize: "$3,000 + Mentorship Program",
    deadline: "May 15, 2026",
    participants: 412,
    image: "https://images.unsplash.com/photo-1768811838777-0507859b5ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    status: "open",
    entryFee: 10,
    rules: [
      "Age 18-25 only",
      "Maximum 5,000 words",
      "Fiction or creative non-fiction",
      "Valid ID required"
    ]
  },
  {
    id: "4",
    title: "Mystery Writing Competition",
    description: "Craft the perfect mystery that keeps readers guessing until the end.",
    category: "Mystery",
    prize: "$4,000",
    deadline: "June 1, 2026",
    participants: 167,
    image: "https://images.unsplash.com/photo-1768811838777-0507859b5ab9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    status: "upcoming",
    rules: [
      "Mystery/thriller genre only",
      "2,000-5,000 words",
      "Plot twist required",
      "Original work"
    ]
  }
];

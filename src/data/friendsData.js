// Mock social friends data for Beli-style fragrance shelf ranking & social feed

export const MOCK_FRIENDS = [
  {
    id: "user-1",
    name: "Sophia Martinez",
    handle: "@sophiascent",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    bio: "Obsessed with green figs & cozy date night gourmands 🌿☕",
    topSignature: "Philosykos EDP",
    location: "New York, NY",
    rankedShelf: [
      { name: "Philosykos EDP", brand: "Diptyque", rating: 9.8, rank: 1, review: "My #1 holy grail forever. Smells like a wild fig grove in Greece." },
      { name: "REPLICA Jazz Club", brand: "Maison Margiela", rating: 9.3, rank: 2, review: "Warm rum and sweet tobacco smoke. Insane date night magnet." },
      { name: "Gypsy Water", brand: "Byredo", rating: 8.9, rank: 3, review: "Soft pine needles and vanilla skin scent. Needs reapplication though." },
      { name: "You Eau de Parfum", brand: "Glossier", rating: 8.4, rank: 4, review: "Easy everyday cozy musk." }
    ],
    wishlist: ["Baccarat Rouge 540", "Angels' Share"]
  },
  {
    id: "user-2",
    name: "Alex Rivera",
    handle: "@alex_fragrance",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    bio: "Collector of dark woods, oud, and nuclear blue scents 🪵⚡",
    topSignature: "Bleu de Chanel EDP",
    location: "Miami, FL",
    rankedShelf: [
      { name: "Bleu de Chanel EDP", brand: "Chanel", rating: 9.6, rank: 1, review: "Flawless signature. Works year-round even in Miami heat." },
      { name: "Oud Wood", brand: "Tom Ford", rating: 9.4, rank: 2, review: "Ultra sophisticated dark sandalwood and cardamom." },
      { name: "Sauvage Elixir", brand: "Dior", rating: 9.0, rank: 3, review: "Only 1 spray! Lasts literally 2 days on jackets." },
      { name: "Aventus", brand: "Creed", rating: 8.7, rank: 4, review: "Smoky pineapple icon." }
    ],
    wishlist: ["Layton", "Le Male Elixir"]
  },
  {
    id: "user-3",
    name: "Elena Rostova",
    handle: "@elena_perfumes",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    bio: "Haute floral aldehydes & sweet caramel vanilla addict 🍨🌹",
    topSignature: "Baccarat Rouge 540",
    location: "London, UK",
    rankedShelf: [
      { name: "Baccarat Rouge 540", brand: "MFK", rating: 9.9, rank: 1, review: "Luminous saffron and amberwood perfection. Get compliments daily." },
      { name: "Angels' Share", brand: "Kilian Paris", rating: 9.5, rank: 2, review: "Cognac apple pie in a bottle. Winter dream." },
      { name: "No. 5 L'Eau", brand: "Chanel", rating: 8.8, rank: 3, review: "Fresh citrus aldehydes for crisp spring mornings." }
    ],
    wishlist: ["Philosykos EDP", "Wood Sage & Sea Salt"]
  }
];

export const MOCK_ACTIVITY_FEED = [
  {
    id: "act-1",
    friendName: "Sophia Martinez",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    action: "ranked a new fragrance",
    fragranceName: "Philosykos EDP",
    brand: "Diptyque",
    rating: 9.8,
    review: "Moved to #1 on my shelf! Unbelievable green fig and fresh cedar.",
    timeAgo: "2h ago"
  },
  {
    id: "act-2",
    friendName: "Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    action: "added to wishlist",
    fragranceName: "Layton",
    brand: "Parfums de Marly",
    rating: null,
    review: "Tasted this at Nordstrom today, vanilla apple spice is insane!",
    timeAgo: "5h ago"
  },
  {
    id: "act-3",
    friendName: "Elena Rostova",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80",
    action: "reviewed",
    fragranceName: "Angels' Share",
    brand: "Kilian Paris",
    rating: 9.5,
    review: "Wore to dinner last night. Everyone asked what I was wearing.",
    timeAgo: "1d ago"
  }
];

export const MOCK_CHAT_THREADS = {
  "user-1": [
    { id: "m1", sender: "Sophia Martinez", text: "Hey! Have you tried Philosykos EDP yet? The fig leaf and coconut accord is insane 🌿", timestamp: "10:14 AM" },
    { 
      id: "m2", 
      sender: "Sophia Martinez", 
      text: "You have to check out this bottle!", 
      timestamp: "10:15 AM",
      attachedFragrance: {
        id: "diptyque-philosykos",
        name: "Philosykos EDP",
        brand: "Diptyque",
        estimatedPrice: "$230",
        notes: { top: ["Fig Leaf", "Fig"], base: ["Cedarwood", "Tree"] }
      }
    },
    { id: "m3", sender: "You", text: "That sounds right up my alley! I need to balance out my heavy winter gourmands.", timestamp: "10:18 AM" }
  ],
  "user-2": [
    { id: "m1", sender: "Alex Rivera", text: "Yo, I just tried Sauvage Elixir at the boutique. 1 spray lasted 48 hours on my jacket ⚡", timestamp: "Yesterday" },
    { 
      id: "m2", 
      sender: "Alex Rivera", 
      text: "Check out this nuclear projection bottle:", 
      timestamp: "Yesterday",
      attachedFragrance: {
        id: "sauvage-elixir",
        name: "Sauvage Elixir",
        brand: "Dior",
        estimatedPrice: "$250",
        notes: { top: ["Cinnamon", "Nutmeg", "Cardamom"], base: ["Licorice", "Sandalwood", "Amber"] }
      }
    }
  ],
  "user-3": [
    { id: "m1", sender: "Elena Rostova", text: "Francis Kurkdjian is truly a master. BR540 is unmatched for evening galas ✨", timestamp: "Mon" }
  ]
};

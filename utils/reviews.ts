export const reviews = [
  // Existing reviews (first 10)...
  {
    id: 1,
    productId: 1,
    comment: "Absolutely loved the earrings! The blue sapphire shines beautifully. Worth every rupee.",
    stars: 4,
    userId: 23,
    date: "2025-06-02",
  },
  {
    id: 2,
    productId: 2,
    comment: "The ruby in this pendant is breathtaking. It was a gift and she adored it!",
    stars: 5,
    userId: 12,
    date: "2025-06-01",
  },
  {
    id: 3,
    productId: 3,
    comment: "A very solid ring. Comfortable to wear and looks great with formal wear.",
    stars: 4,
    userId: 45,
    date: "2025-05-30",
  },
  {
    id: 4,
    productId: 4,
    comment: "I love the delicate look of this necklace. It’s simple yet elegant.",
    stars: 5,
    userId: 34,
    date: "2025-06-01",
  },
  {
    id: 5,
    productId: 5,
    comment: "Perfect cufflinks for business meetings. Looks premium and sharp.",
    stars: 4,
    userId: 17,
    date: "2025-05-29",
  },
  {
    id: 6,
    productId: 6,
    comment: "Pearls are genuine and the gold accents are subtle and beautiful. Highly recommend!",
    stars: 5,
    userId: 28,
    date: "2025-05-31",
  },
  {
    id: 7,
    productId: 7,
    comment: "Tough chain with a bold design. Feels great to wear every day.",
    stars: 4,
    userId: 51,
    date: "2025-05-28",
  },
  {
    id: 8,
    productId: 8,
    comment: "These diamond studs are stunning! Small but very sparkly and elegant.",
    stars: 5,
    userId: 39,
    date: "2025-06-01",
  },
  {
    id: 9,
    productId: 9,
    comment: "Love the meaning behind each bead. Also stylish enough to wear out.",
    stars: 4,
    userId: 16,
    date: "2025-05-30",
  },
  {
    id: 10,
    productId: 10,
    comment: "The emerald is vibrant and the diamonds add a nice touch. She said yes!",
    stars: 5,
    userId: 5,
    date: "2025-05-27",
  },

  // Additional reviews (next 10)...
  {
    id: 11,
    productId: 1,
    comment: "Nice quality, but the clasp was a bit loose. Still beautiful though.",
    stars: 3,
    userId: 31,
    date: "2025-06-02",
  },
  {
    id: 12,
    productId: 2,
    comment: "The chain was shorter than I expected, but the ruby is gorgeous.",
    stars: 4,
    userId: 44,
    date: "2025-06-02",
  },
  {
    id: 13,
    productId: 3,
    comment: "I’ve worn it every day for a month and it still looks new. Excellent quality.",
    stars: 5,
    userId: 59,
    date: "2025-06-01",
  },
  {
    id: 14,
    productId: 4,
    comment: "Very light and comfortable. Great for layering with other necklaces.",
    stars: 4,
    userId: 61,
    date: "2025-06-01",
  },
  {
    id: 15,
    productId: 5,
    comment: "Nice detail and solid feel. Got compliments at my last event.",
    stars: 5,
    userId: 22,
    date: "2025-06-02",
  },
  {
    id: 16,
    productId: 6,
    comment: "Elegant design, though one pearl seemed slightly discolored.",
    stars: 3,
    userId: 43,
    date: "2025-06-01",
  },
  {
    id: 17,
    productId: 7,
    comment: "Strong clasp and good weight. My favorite chain so far.",
    stars: 5,
    userId: 14,
    date: "2025-06-01",
  },
  {
    id: 18,
    productId: 8,
    comment: "Came in a beautiful box. Looks much more expensive than it is.",
    stars: 5,
    userId: 60,
    date: "2025-05-31",
  },
  {
    id: 19,
    productId: 9,
    comment: "Good for daily wear. Helps me stay mindful during work.",
    stars: 4,
    userId: 37,
    date: "2025-06-01",
  },
  {
    id: 20,
    productId: 10,
    comment: "She was speechless! The ring is absolutely stunning in person.",
    stars: 5,
    userId: 8,
    date: "2025-06-02",
  }
];

export const averageStars = (id:number) => {
    const filteredReviews = reviews.filter((r) => r.productId === id);

    const averageStars = filteredReviews.reduce((sum, review) => sum + review.stars, 0) / filteredReviews.length;
    return averageStars;
}

export const reviewsByProductId = (id:number) => {
    return reviews.filter((r) => r.productId === Number(id));
}
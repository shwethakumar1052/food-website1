
// Home.js
import React from "react";

// Sample data for featured items with image URLs
const featuredItems = [
  { 
    id: 1, 
    name: "Spaghetti Carbonara", 
    description: "Classic Italian pasta with creamy sauce.", 
    price: "$12.99", 
    image: "https://example.com/images/spaghetti.jpg" 
  },
  { 
    id: 2, 
    name: "Margherita Pizza", 
    description: "Fresh mozzarella, tomatoes, and basil.", 
    price: "$10.99", 
    image: "https://example.com/images/pizza.jpg" 
  },
  { 
    id: 3, 
    name: "Caesar Salad", 
    description: "Crisp romaine, croutons, and parmesan.", 
    price: "$8.99", 
    image: "https://example.com/images/salad.jpg" 
  }
];

const promotions = [
  { id: 1, title: "Holiday Feast Special", description: "Celebrate with our festive holiday menu!", validUntil: "Dec 31" },
  { id: 2, title: "Autumn Harvest Menu", description: "Warm and cozy dishes for autumn.", validUntil: "Nov 30" }
];

// Main Home component
function Home() {
  return (
    <div>
      {/* Header */}
      <header style={{ backgroundColor: "#ff6347", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>[Restaurant Name]</h1>
      </header>

      {/* Featured Menu Section */}
      <section style={{ padding: "20px" }}>
        <h2>Featured Menu Items</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {featuredItems.map((item) => (
            <div key={item.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px", textAlign: "center", width: "200px" }}>
              <img 
                src={item.image} 
                alt={item.name} 
                style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }} 
              />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Message Section */}
      <section style={{ padding: "20px", textAlign: "center" }}>
        <h2>Welcome to [Restaurant Name]!</h2>
        <p>Enjoy our carefully crafted dishes, blending tradition and creativity for a memorable dining experience.</p>
      </section>

      {/* Promotions Section */}
      <section style={{ padding: "20px" }}>
        <h2>Current Promotions</h2>
        <div style={{ display: "flex", gap: "20px" }}>
          {promotions.map((promo) => (
            <div key={promo.id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
              <h3>{promo.title}</h3>
              <p>{promo.description}</p>
              <p><em>Valid Until: {promo.validUntil}</em></p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#333", color: "white", textAlign: "center", padding: "10px" }}>
        <p>Follow us on social media:</p>
        <p>[Social Media Links]</p>
        <p>Address: 123 Main St, City, Country</p>
        <p>Contact: (123) 456-7890</p>
        <p>Operating Hours: Mon-Sun, 10 AM - 9 PM</p>
      </footer>
    </div>
  );
}

export default Home;

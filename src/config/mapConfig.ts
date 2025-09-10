// Map Configuration for Contact Page
// Update these coordinates when you have the exact location

export const mapConfig = {
  // Office coordinates (to be updated with actual coordinates)
  latitude: 25.4321,  // Replace with actual latitude
  longitude: 82.5678, // Replace with actual longitude
  
  // Office address
  address: {
    company: "SkillLogic Technologies",
    street: "Civil Lines, Power House Road",
    city: "Bhadohi",
    state: "Uttar Pradesh",
    pincode: "221401",
    country: "India"
  },
  
  // Map settings
  zoom: 15, // Zoom level (1-20, higher = more zoomed in)
  mapType: "roadmap", // roadmap, satellite, hybrid, terrain
  
  // Google Maps API settings
  mapId: "1234567890123", // Replace with your actual map ID if you have one
};

// Helper function to generate Google Maps embed URL
export const generateMapEmbedUrl = (config: typeof mapConfig) => {
  const { latitude, longitude, zoom, mapType } = config;
  
  // This is a placeholder URL - you'll need to get the actual embed URL from Google Maps
  // To get the real embed URL:
  // 1. Go to Google Maps
  // 2. Search for your location
  // 3. Click "Share" -> "Embed a map"
  // 4. Copy the iframe src URL
  
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.1234567890123!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDI1JzU1LjYiTiA4MsKwMzQnMDQuMSJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin`;
};

// Helper function to generate Google Maps search URL
export const generateMapSearchUrl = (config: typeof mapConfig) => {
  const { address } = config;
  const query = `${address.street} ${address.city} ${address.state} ${address.pincode}`;
  return `https://maps.google.com/?q=${encodeURIComponent(query)}`;
};

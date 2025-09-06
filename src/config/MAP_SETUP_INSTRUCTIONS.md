# Google Maps Setup Instructions

## How to Update Map Coordinates

### Step 1: Get Your Exact Coordinates

1. Go to [Google Maps](https://maps.google.com)
2. Search for your office address: "Civil Lines, Power House Road, Bhadohi, Uttar Pradesh 221401"
3. Right-click on the exact location and select "What's here?"
4. Copy the coordinates that appear (latitude, longitude)

### Step 2: Get the Embed URL

1. In Google Maps, click the "Share" button
2. Select "Embed a map"
3. Choose your preferred map size and settings
4. Copy the iframe `src` URL

### Step 3: Update the Configuration

Open `src/config/mapConfig.ts` and update:

```typescript
export const mapConfig = {
  // Replace with your actual coordinates
  latitude: 25.4321,  // Your actual latitude
  longitude: 82.5678, // Your actual longitude
  
  // Update address if needed
  address: {
    company: "SkillLogic Technologies",
    street: "Civil Lines, Power House Road",
    city: "Bhadohi",
    state: "Uttar Pradesh",
    pincode: "221401",
    country: "India"
  },
  
  // Adjust zoom level (1-20)
  zoom: 15,
  
  // Map type: "roadmap", "satellite", "hybrid", "terrain"
  mapType: "roadmap",
};
```

### Step 4: Update the Embed URL

Replace the placeholder URL in the `generateMapEmbedUrl` function with your actual Google Maps embed URL.

### Current Map Features

✅ **Interactive Google Maps embed**
✅ **Responsive design** - works on all devices
✅ **Address overlay** - shows location info on the map
✅ **Direct link to Google Maps** - opens in new tab
✅ **Easy configuration** - update coordinates in one place
✅ **Consistent styling** - matches your design system

### Map Styling

The map includes:
- **Full-width responsive iframe**
- **Minimum height of 300px**
- **Rounded corners** to match your design
- **Address overlay** with semi-transparent background
- **"Open in Google Maps" button** for full functionality

### Troubleshooting

If the map doesn't load:
1. Check that the embed URL is correct
2. Ensure the coordinates are accurate
3. Verify the address format in the configuration
4. Check browser console for any errors

The map will automatically update when you change the configuration file.

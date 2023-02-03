const filePath = path.join(__dirname, "data", "restaurants.json");

function getStoredRestaurants() {
  const fileData = fs.readFileSync(filePath);
  const storedRestaurants = JSON.parse(fileData);

  return storedRestaurants;
}

function storeRestaurants(storedRestaurants) {
  fs.writeFileSync(filePath, JSON.stringify(storedRestaurants));
}

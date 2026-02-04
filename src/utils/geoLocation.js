// Geo-based language restriction
// Ukraine -> hide Russian
// Russia -> hide Ukrainian

const GEO_CACHE_KEY = "ak_user_country";
const GEO_CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 days

export const detectCountry = async () => {
  // Check cache first
  const cached = localStorage.getItem(GEO_CACHE_KEY);
  if (cached) {
    try {
      const { country, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < GEO_CACHE_DURATION) {
        return country;
      }
    } catch (e) {
        console.log(e)
      // Invalid cache, continue to fetch
    }
  }

  // Fetch from free GeoIP service
  try {
    const response = await fetch("https://ip-api.com/json/?fields=countryCode");
    const data = await response.json();
    const country = data.countryCode || null;

    // Cache the result
    if (country) {
      localStorage.setItem(
        GEO_CACHE_KEY,
        JSON.stringify({ country, timestamp: Date.now() })
      );
    }

    return country;
  } catch (error) {
    console.warn("Could not detect country:", error);
    return null;
  }
};

export const filterLanguagesByCountry = (languages, countryCode) => {
  if (!countryCode) return languages;

  // User from Ukraine -> hide Russian
  if (countryCode === "UA") {
    return languages.filter((lang) => lang.code !== "ru");
  }

  // User from Russia -> hide Ukrainian
  if (countryCode === "RU") {
    return languages.filter((lang) => lang.code !== "ua");
  }

  // All other countries -> show all languages
  return languages;
};
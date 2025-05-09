/**
 * Formats a date string into ISO format for sitemap
 * @param dateString Date string in any format
 * @returns ISO formatted date string
 */
export function formatDateForSitemap(dateString: string): string {
  try {
    const date = new Date(dateString)
    return date.toISOString()
  } catch (error) {
    // If date parsing fails, return current date
    return new Date().toISOString()
  }
}

/**
 * Extracts year from a date string
 * @param dateString Date string in any format
 * @returns Year as a number
 */
export function getYearFromDate(dateString: string): number {
  try {
    const date = new Date(dateString)
    return date.getFullYear()
  } catch (error) {
    // If date parsing fails, return current year
    return new Date().getFullYear()
  }
}

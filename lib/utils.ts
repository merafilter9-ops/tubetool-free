import { ExtendedUser } from "@/types/user";
import { clsx, type ClassValue } from "clsx"
import { toast } from "sonner";
import { twMerge } from "tailwind-merge";
import numeral from 'numeral';
import { GERMAN_TO_ENGLISH_UNIT_MAP } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Copies the provided text to the clipboard and shows a success toast message.
 * If an error occurs during the copy operation, it logs the error to the console.
 *
 * @param {string} textToCopy - The text to be copied to the clipboard.
 * @returns {void}
 */
export function copyToClipboard(textToCopy: string): void {
  navigator.clipboard.writeText(textToCopy)
    .then(() => {
      toast.success('Copied')
    })
    .catch((err) => {
      console.error('Error copying text: ', err);
    });
}

/**
 * Copies a comma-separated string of text to the clipboard, with each string prefixed by a '#'.
 *
 * @param {string[]} textArray - An array of strings to be copied to the clipboard.
 * @returns {void}
 *
 * @example
 * const textArray = ['apple', 'banana', 'cherry'];
 * copyByCommaSeparated(textArray);
 * // Clipboard content: "#apple, #banana, #cherry"
 *
 * @throws Will log an error to the console if the clipboard operation fails.
 */
export function copyByCommaSeparated(textArray: string[], prefix: string = "#"): void {
  // add prefix to each string before
  const updatedTextArray = textArray.map((text) => `${prefix}${text}`);
  navigator.clipboard.writeText(updatedTextArray.join(', '))
    .then(() => {
      toast.success('Copied')
    })
    .catch((err) => {
      console.error('Error copying text: ', err);
    });
}

/**
 * Converts a numeric string to a more readable format with appropriate suffixes.
 * 
 * - Numbers in the billions are formatted with a 'B' suffix.
 * - Numbers in the millions are formatted with an 'M' suffix.
 * - Numbers in the thousands are formatted with a 'k' suffix.
 * - Numbers less than 1000 are returned as is.
 *
 * @param {string} num - The numeric string to be converted.
 * @returns {string} The formatted number with the appropriate suffix.
 */
export function convertToReadableFormat(num: string): string {
  const absNum = Math.abs(Number(num)); // Handle negative numbers
  let formattedNumber = '';

  if (absNum >= 1.0e9) {
    // Number is in billions
    formattedNumber = (Number(num) / 1.0e9).toFixed(2) + 'B';
  } else if (absNum >= 1.0e6) {
    // Number is in millions
    formattedNumber = (Number(num) / 1.0e6).toFixed(2) + 'M';
  } else if (absNum >= 1.0e3) {
    // Number is in thousands
    formattedNumber = (Number(num) / 1.0e3).toFixed(2) + 'k';
  } else {
    // Number is less than 1000
    formattedNumber = num;
  }

  return formattedNumber;
}

/**
 * Converts an ISO date string to a human-readable date format.
 *
 * @param isoDateString - The ISO date string to be converted.
 * @returns The formatted date string in the format 'day month year'.
 *
 * @example
 * ```typescript
 * const formattedDate = convertDateFormat('2023-10-05T14:48:00.000Z');
 * console.log(formattedDate); // Outputs: '5 October 2023'
 * ```
 */
export function convertDateFormat(isoDateString: string) {
  const date = new Date(isoDateString);

  // Array of month names
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  // Extract the day, month, and year
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  // Format the date as 'day month year'
  const formattedDate = `${day} ${month} ${year}`;
  return formattedDate;
}

/**
 * Returns a greeting message based on the current time of day.
 *
 * - 4:00 AM to 8:00 AM: Good early morning
 * - 8:00 AM to 12:00 PM: Good morning
 * - 12:00 PM to 2:00 PM: Good midday
 * - 2:00 PM to 5:00 PM: Good afternoon
 * - 5:00 PM to 8:00 PM: Good evening
 * - 8:00 PM to 10:00 PM: Good late evening
 * - 10:00 PM to 4:00 AM: Good night
 *
 * @returns {string} A greeting message based on the current time.
 */
export function getGreeting(): string {
  const currentHour = new Date().getHours(); // Get the current hour (0-23)
  let greeting;

  if (currentHour >= 4 && currentHour < 8) {
    greeting = "Good early morning";
  } else if (currentHour >= 8 && currentHour < 12) {
    greeting = "Good morning";
  } else if (currentHour >= 12 && currentHour < 14) {
    greeting = "Good midday";
  } else if (currentHour >= 14 && currentHour < 17) {
    greeting = "Good afternoon";
  } else if (currentHour >= 17 && currentHour < 20) {
    greeting = "Good evening";
  } else if (currentHour >= 20 && currentHour < 22) {
    greeting = "Good late evening";
  } else {
    greeting = "Good night";
  }

  return greeting;
}

/**
 * Generates a random string of 12 characters that includes at least one uppercase letter, one lowercase letter, one number, and one symbol.
 * @returns a random string of 12 characters 
 */
export function generateStrongPassword() {
  // Define character sets
  const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numericChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

  // Combine all character sets
  const allChars = uppercaseChars + lowercaseChars + numericChars + symbolChars;

  // Generate password
  let password = '';
  const passwordLength = 12;

  // Ensure at least one uppercase letter, one lowercase letter, one number, and one symbol
  password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
  password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
  password += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
  password += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));

  // Generate remaining characters randomly
  for (let i = 4; i < passwordLength; i++) {
    password += allChars.charAt(Math.floor(Math.random() * allChars.length));
  }

  // Shuffle the password
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}

/**
 * Checks the subscription status of a user and determines if they need to be redirected to the plans page.
 *
 * @param {ExtendedUser} user - The user object containing subscription details.
 * @returns {string | null} - Returns the URL to the plans page if the subscription is expired or in trial, otherwise returns null.
 */
export function checkSubscriptionStatus(user: ExtendedUser): string | null {
  if (!user) {
    return "/auth/signin";
  }

  const { subscription } = user;

  if (!subscription.isRecurring && subscription?.planType !== "free" && subscription?.endedAt) {
    const endDate = new Date(subscription?.endedAt);
    if (endDate < new Date()) {
      return "/plans"
    }
  }

  if (subscription.isRecurring && subscription?.planType !== "free" && subscription?.endedAt) {
    const endDate = new Date(subscription.endedAt);
    if (endDate < new Date()) {
      return "/plans";
    }
  }

  return null;
}

/**
 * Retrieves the name of a month from the last three months based on the given index.
 * 
 * @param {number} num - The index of the month to retrieve (0 for the current month, 1 for the previous month, 2 for two months ago).
 * @returns {string} The name of the month corresponding to the index.
 * 
 * @example
 * // Assuming the current month is November:
 * getLastThreeMonths(0); // "November"
 * getLastThreeMonths(1); // "October"
 * getLastThreeMonths(2); // "September"
 * 
 * @throws {RangeError} Throws an error if the index is not between 0 and 2.
 */
export const getLastThreeMonths = (num: number): string => {
  if (num < 0 || num > 2) {
    throw new RangeError("Index must be between 0 and 2.");
  }

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const currentMonth = new Date().getMonth(); // Get the current month index (0-11)

  // Calculate the index for the requested month in the last three months
  const monthIndex = (currentMonth - num + 12) % 12;

  return months[monthIndex];
};

/**
 * Converts the first letter of a given string to uppercase.
 *
 * @param {string} str - The string to be converted.
 * @returns {string} The string with the first letter in uppercase. If the input string is empty, it returns the original string.
 */
export const firstLetterUppercase = (str: string): string => {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Formats a number or string using the specified rounding type.
 *
 * @param {number | string} num - The number or string to format.
 * @param {string} [roundingType="0.00"] - The rounding type to use for formatting.
 * @returns {number | string} - The formatted number or string.
 */
export const customFormat = (num: number | string, roundingType: string = "0.00"): number | string => {
  const newNumber = numeral(num);
  return newNumber.format(roundingType);
}

/**
 * Formats a large number with commas as thousand separators.
 *
 * @param {number | string} num - The number to format. Can be a number or a string representation of a number.
 * @returns {number | string} - The formatted number as a string with commas as thousand separators.
 */
export const formatLargeNumber = (num: number | string): number | string => {
  const newNumber = numeral(num);
  return newNumber.format('0,0');
}

/**
 * Formats a large number to a more readable string with 'K' for thousands.
 *
 * @param {number | string} num - The number to format. Can be a number or a string representation of a number.
 * @returns {number | string} - The formatted number as a string with 'K' for thousands.
 */
export const formatLargeNumberToK = (num: number | string, format: string = '0.00a'): number | string => {
  const newNumber = numeral(num);
  return newNumber.format(format);
}

/**
 * Formats a number or string as a currency string.
 *
 * @param {number | string} num - The number or string to format as currency.
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (num: number | string): string => {
  const newNumber = numeral(num);
  return newNumber.format('$0,0.00');
}

/**
 * Returns a label describing the churn rate based on the given percentage.
 *
 * @param percentage - The churn rate percentage.
 * @returns A string label describing the churn rate:
 * - 'High Churn' for percentages between 10 and 20 (inclusive).
 * - 'Moderate Churn' for percentages between 5 and 10 (exclusive).
 * - 'Low Churn' for percentages between 2 and 5 (exclusive).
 * - 'Excellent' for percentages between 0 and 2 (exclusive).
 * - An empty string for percentages outside the range of 0 to 20.
 */
export const churnRateLabel = (percentage: number): string => {
  if (percentage >= 10 && percentage <= 20) {
    return 'High Churn';
  } else if (percentage >= 5 && percentage < 10) {
    return 'Moderate Churn';
  } else if (percentage >= 2 && percentage < 5) {
    return 'Low Churn';
  } else if (percentage >= 0 && percentage < 2) {
    return 'Excellent';
  } else {
    return '';
  }
};

/**
 * Returns a label describing the video churn rate based on the given percentage.
 *
 * @param {number} percentage - The video churn rate percentage.
 * @returns {string} A string label describing the video churn rate:
 * - 'High Churn' for percentages between 15 and 100 (inclusive).
 * - 'Moderate Churn' for percentages between 10 and 15 (exclusive).
 * - 'Low Churn' for percentages between 5 and 10 (exclusive).
 * - 'Excellent' for percentages between 0 and 5 (exclusive).
 * - An empty string for percentages outside the range of 0 to 100.
 */
export const videoChurnRateLabel = (percentage: number): string => {
  if (percentage >= 15 && percentage <= 100) {
    return 'High Churn';
  } else if (percentage >= 10 && percentage < 15) {
    return 'Moderate Churn';
  } else if (percentage >= 5 && percentage < 10) {
    return 'Low Churn';
  } else if (percentage >= 0 && percentage < 5) {
    return 'Excellent';
  } else {
    return '';
  }
};

/**
 * Calculates the retention rate category based on the given percentage.
 *
 * @param {number} percentage - The retention percentage.
 * @returns {string} - The retention rate category:
 *   - 'Low Retention' for percentages between 0 and 70 (inclusive).
 *   - 'Average Retention' for percentages between 70 and 80 (exclusive).
 *   - 'High Retention' for percentages between 80 and 90 (exclusive).
 *   - 'Excellent Retention' for percentages 90 and above.
 *   - An empty string for invalid percentages.
 */
export const retentionRateLabel = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 70) {
    return 'Low Rentention';
  } else if (percentage >= 70 && percentage < 80) {
    return 'Average Rentention';
  } else if (percentage >= 80 && percentage < 90) {
    return 'High Rentention';
  } else if (percentage >= 90) {
    return 'Excellent Rentention';
  } else {
    return '';
  }
};

/**
 * Returns a label describing the sharing rate based on the given percentage.
 *
 * @param {number} percentage - The percentage of sharing rate.
 * @returns {string} A string label that describes the sharing rate:
 * - 'Low Sharing' for percentage between 0 and 2 (inclusive)
 * - 'Moderate Sharing' for percentage between 2 (inclusive) and 5
 * - 'Good Sharing' for percentage between 5 (inclusive) and 10
 * - 'Excellent Sharing' for percentage 10 and above
 * - An empty string for any other percentage values
 */
export const sharingRateLabel = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 2) {
    return 'Low Sharing';
  } else if (percentage >= 2 && percentage < 5) {
    return 'Moderate Sharing';
  } else if (percentage >= 5 && percentage < 10) {
    return 'Good Sharing';
  } else if (percentage >= 10) {
    return 'Excellent Sharing';
  } else {
    return '';
  }
}

/**
 * Returns a label describing the average view percentage based on the given percentage.
 *
 * @param {number} percentage - The percentage of views.
 * @returns {string} A label describing the average view percentage:
 * - 'Low View Percentage' for 0 <= percentage <= 50
 * - 'Average View Percentage' for 50 < percentage < 70
 * - 'Good View Percentage' for 70 <= percentage < 80
 * - 'Excellent View Percentage' for percentage >= 80
 * - An empty string for any other value
 */
export const averageViewPercentageLabel = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 50) {
    return 'Low View Percentage';
  } else if (percentage >= 50 && percentage < 70) {
    return 'Average View Percentage';
  } else if (percentage >= 70 && percentage < 80) {
    return 'Good View Percentage';
  } else if (percentage >= 80) {
    return 'Excellent View Percentage';
  } else {
    return '';
  }
};

/**
 * Returns a label based on the given percentage representing the like and dislike rate.
 *
 * @param {number} percentage - The percentage of likes.
 * @returns {string} The label corresponding to the given percentage.
 * 
 * - 'Excellent' for percentages between 0 and 50 (inclusive).
 * - 'Positive' for percentages between 51 and 69 (inclusive).
 * - 'Balanced' for percentages between 70 and 79 (inclusive).
 * - 'Needs Improvement' for percentages 80 and above.
 * - An empty string for any other percentage values.
 */
export const likeAndDislikeRateLabel = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 50) {
    return 'Excellent';
  } else if (percentage >= 50 && percentage < 70) {
    return 'Positive';
  } else if (percentage >= 70 && percentage < 80) {
    return 'Balanced';
  } else if (percentage >= 80) {
    return 'Needs Improvement';
  } else {
    return '';
  }
}

/**
 * Returns a label describing the daily subscriber growth rate based on the given percentage.
 *
 * @param percentage - The daily subscriber growth rate as a percentage.
 * @returns A string label describing the growth rate:
 * - 'Slow Growth Rate' for 0 <= percentage <= 0.2
 * - 'Steady Growth Rate' for 0.2 < percentage < 0.5
 * - 'Good Growth Rate' for 0.5 <= percentage < 1
 * - 'Rapid Growth Rate' for percentage >= 1
 * - An empty string for any other values
 */
export const dailySubscriberGrowthRateLabel = (percentage: number): string => {
  if (percentage >= 0 && percentage <= 0.2) {
    return 'Slow Growth Rate';
  } else if (percentage >= 0.2 && percentage < 0.5) {
    return 'Steady Growth Rate';
  } else if (percentage >= 0.5 && percentage < 1) {
    return 'Good Growth Rate';
  } else if (percentage >= 1) {
    return 'Rapid Growth Rate';
  } else {
    return '';
  }
}

/**
 * Converts a German date string (e.g., "2 Tage") into an English relative time string (e.g., "2 days ago").
 *
 * @param germanDate - The German date string to be converted. It should include a numerical value followed by a unit (e.g., "2 Tage").
 * @returns The converted English relative time string (e.g., "2 days ago") if the input matches the expected format and unit mapping.
 *          If the input cannot be converted, the original German date string is returned.
 */
export function convertGermanToEnglishDate(germanDate: string): string {
  // Regular expressions to extract numerical values and units
  const regex = /(\d+)\s+(\w+)/;
  const match = germanDate.match(regex);

  if (match) {
    const value: number = parseInt(match[1]);
    const unit: string = match[2];

    // Check if the unit is present in the mapping
    if (GERMAN_TO_ENGLISH_UNIT_MAP.hasOwnProperty(unit)) {
      // Use singular or plural form based on the numerical value
      const englishUnit = GERMAN_TO_ENGLISH_UNIT_MAP[unit as keyof typeof GERMAN_TO_ENGLISH_UNIT_MAP];

      return `${value} ${englishUnit} ago`;
    }
  }

  // Return the original string if no conversion is possible
  return germanDate;
}

/**
 * Formats a price amount with the given currency symbol and code.
 *
 * - For INR (Indian Rupees), the amount is rounded to the nearest integer and no decimal places are shown.
 * - For other currencies, the amount is formatted with two decimal places.
 *
 * @param amount - The numeric value of the price to format.
 * @param symbol - The currency symbol to prepend (e.g., '$', '₹').
 * @param currency - The currency code (e.g., 'INR', 'USD').
 * @returns The formatted price string.
 */
export function formatPrice(amount: number, symbol: string, currency: string): string {
  if (currency === "INR") {
    // Format Indian Rupees
    return `${symbol}${amount.toFixed(2)}`; // No decimal places for INR
  } else {
    // Format USD and other currencies
    return `${symbol}${amount.toFixed(2)}`
  }
}

/**
 * Calculates the discounted price based on a base price and a discount percentage.
 *
 * @param basePrice - The original price before discount.
 * @param discountPercentage - The percentage of discount to apply (0-100).
 * @returns The price after applying the discount.
 */
export function calculateDiscountedPrice(basePrice: number, discountPercentage: number): number {
  return basePrice * (1 - discountPercentage / 100)
}

/**
 * Calculates the total price based on a monthly price and the number of months.
 *
 * @param monthlyPrice - The price per month.
 * @param months - The number of months.
 * @returns The total price for the given number of months.
 */
export function calculateTotalPrice(monthlyPrice: number, months: number): number {
  return monthlyPrice * months
}

/**
 * Calculates the total savings over a given number of months when comparing a base price to a discounted price.
 *
 * @param basePrice - The original price per month.
 * @param discountedPrice - The discounted price per month.
 * @param months - The number of months for which the savings are calculated.
 * @returns The total amount saved over the specified number of months.
 */
export function calculateSavings(basePrice: number, discountedPrice: number, months: number): number {
  const regularTotal = basePrice * months
  const discountedTotal = discountedPrice * months
  return regularTotal - discountedTotal
}
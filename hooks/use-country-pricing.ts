"use client"

import { useState, useEffect } from "react"

interface CountryPricing {
    country: string
    currency: string
    symbol: string
    basePrice: number
    planId: string
    loading: boolean
}

export function useCountryPricing() {
    const [pricing, setPricing] = useState<CountryPricing>({
        country: "US",
        currency: "USD",
        symbol: "$",
        basePrice: 5,
        planId: process.env.PLAN_ID_STANDARD_MONTHLY_USD || "",
        loading: true,
    })

    useEffect(() => {
        const detectCountry = async () => {
            try {
                // Using ipapi.co for country detection (free tier available)
                const response = await fetch("https://ipapi.co/json/")
                const data = await response.json()

                const countryCode = data.country_code || "US"

                // Set pricing based on country
                if (countryCode === "IN") {
                    setPricing({
                        country: "IN",
                        currency: "INR",
                        symbol: "₹",
                        basePrice: 199,
                        planId: process.env.PLAN_ID_STANDARD_MONTHLY_INR || "",
                        loading: false,
                    })
                } else {
                    setPricing({
                        country: countryCode,
                        currency: "USD",
                        symbol: "$",
                        basePrice: 5,
                        planId: process.env.PLAN_ID_STANDARD_MONTHLY_USD || "",
                        loading: false,
                    })
                }
            } catch (error) {
                console.error("Failed to detect country:", error)
                // Fallback to USD pricing
                setPricing({
                    country: "US",
                    currency: "USD",
                    symbol: "$",
                    basePrice: 5,
                    planId: process.env.PLAN_ID_STANDARD_MONTHLY_USD || "",
                    loading: false,
                })
            }
        }

        detectCountry()
    }, [])

    return pricing
}

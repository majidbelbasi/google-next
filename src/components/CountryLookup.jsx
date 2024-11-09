"use client";

import { useEffect, useState } from "react";

export default function CountryLookup() {
  const [country, setCountry] = useState("iran");

  useEffect(() => {
    const getCoutry = async () => {
      try {
        const res = await fetch(
          `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
        );
        if (!res.ok) return;
        const data = await res.json();

        setCountry(data.country);
      } catch (error) {
        throw new Error(
          error.message || "An error occured while fetching country"
        );
      }
    };
    getCoutry();
  }, []);
  return <div>{country}</div>;
}

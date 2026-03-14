import { useState, useEffect } from "react";

const API_URL =
  "https://ajvqwe6fc3.execute-api.us-east-1.amazonaws.com/addvisit";

export function useVisitorCount(): number | null {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch(API_URL, { method: "POST" })
      .then((r) => r.json())
      .then((data) => setCount(data.visits))
      .catch(() => {}); // silently fail – non-critical UI
  }, []);

  return count;
}

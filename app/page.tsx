"use client";

import { useEffect, useState } from "react";

type LoadStatus = "idle" | "loading" | "error";

async function loadOptions(url: string) {
  const response = await fetch(url);
  const payload = await response.json();

  if (!response.ok) {
    throw new Error(payload.error ?? "Unable to load options");
  }

  return Array.isArray(payload.options) ? (payload.options as string[]) : [];
}

export default function Home() {
  const [countries, setCountries] = useState<string[]>([]);
  const [states, setStates] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]);

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [status, setStatus] = useState<LoadStatus>("idle");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let active = true;

    setStatus("loading");
    setMessage("Loading countries...");

    loadOptions("/api/countries")
      .then((options) => {
        if (!active) {
          return;
        }

        setCountries(options);
        setStatus("idle");
        setMessage("");
      })
      .catch((error: Error) => {
        if (!active) {
          return;
        }

        setStatus("error");
        setMessage(error.message);
      });

    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    let active = true;

    setState("");
    setCity("");
    setStates([]);
    setCities([]);

    if (!country) {
      return () => {
        active = false;
      };
    }

    setStatus("loading");
    setMessage("Loading states...");

    loadOptions(`/api/states?country=${encodeURIComponent(country)}`)
      .then((options) => {
        if (!active) {
          return;
        }

        setStates(options);
        setStatus("idle");
        setMessage("");
      })
      .catch((error: Error) => {
        if (!active) {
          return;
        }

        setStatus("error");
        setMessage(error.message);
      });

    return () => {
      active = false;
    };
  }, [country]);

  useEffect(() => {
    let active = true;

    setCity("");
    setCities([]);

    if (!state) {
      return () => {
        active = false;
      };
    }

    setStatus("loading");
    setMessage("Loading cities...");

    loadOptions(`/api/cities?state=${encodeURIComponent(state)}`)
      .then((options) => {
        if (!active) {
          return;
        }

        setCities(options);
        setStatus("idle");
        setMessage("");
      })
      .catch((error: Error) => {
        if (!active) {
          return;
        }

        setStatus("error");
        setMessage(error.message);
      });

    return () => {
      active = false;
    };
  }, [state]);

  return (
    <main className="page">
      <section className="selector-panel" aria-labelledby="page-title">
        <h1 id="page-title" className="brand">
          setMySpace
        </h1>
        <p className="subtitle">Select a country, then choose the matching state and city.</p>

        <div className="form-grid">
          <div className="field">
            <label htmlFor="country">Country</label>
            <select id="country" value={country} onChange={(event) => setCountry(event.target.value)}>
              <option value="">Select country</option>
              {countries.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="state">State</label>
            <select
              id="state"
              value={state}
              onChange={(event) => setState(event.target.value)}
              disabled={!country || states.length === 0}
            >
              <option value="">Select state</option>
              {states.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="city">City</label>
            <select
              id="city"
              value={city}
              onChange={(event) => setCity(event.target.value)}
              disabled={!state || cities.length === 0}
            >
              <option value="">Select city</option>
              {cities.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <p className={`status ${status === "error" ? "error" : ""}`} aria-live="polite">
          {message}
        </p>

        {(country || state || city) && (
          <div className="summary">
            <h2>Selected Location</h2>
            <p>Country: {country || "-"}</p>
            <p>State: {state || "-"}</p>
            <p>City: {city || "-"}</p>
          </div>
        )}
      </section>
    </main>
  );
}

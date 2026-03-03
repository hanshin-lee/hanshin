"use client";

import { useState } from "react";

interface Spot {
  id: string;
  name: string;
  type: string;
  neighborhood: string;
  description: string;
  rating: number;
}

interface SeoulAdminProps {
  initialSpots: Spot[];
  initialAuth: boolean;
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-yellow-400">
      {"★".repeat(rating)}
      {"☆".repeat(3 - rating)}
    </span>
  );
}

function SpotForm({
  spot,
  onSave,
  onCancel,
}: {
  spot?: Spot;
  onSave: (data: Omit<Spot, "id">) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState(spot?.name ?? "");
  const [type, setType] = useState(spot?.type ?? "");
  const [neighborhood, setNeighborhood] = useState(spot?.neighborhood ?? "");
  const [description, setDescription] = useState(spot?.description ?? "");
  const [rating, setRating] = useState(spot?.rating ?? 2);

  const inputClass =
    "w-full rounded-lg border border-card-border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none";

  return (
    <div className="space-y-3 rounded-xl border border-accent/40 bg-card-bg p-5">
      <input
        className={inputClass}
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className={inputClass}
        placeholder="Type (e.g. Korean BBQ)"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <input
        className={inputClass}
        placeholder="Neighborhood"
        value={neighborhood}
        onChange={(e) => setNeighborhood(e.target.value)}
      />
      <textarea
        className={inputClass + " min-h-[60px] resize-none"}
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <div className="flex items-center gap-2">
        <label className="text-sm text-muted">Rating:</label>
        {[1, 2, 3].map((r) => (
          <button
            key={r}
            onClick={() => setRating(r)}
            className={`text-lg ${r <= rating ? "text-yellow-400" : "text-muted/30"}`}
          >
            ★
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onSave({ name, type, neighborhood, description, rating })}
          disabled={!name || !type || !neighborhood || !description}
          className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover disabled:opacity-40"
        >
          Save
        </button>
        <button
          onClick={onCancel}
          className="rounded-lg border border-card-border px-4 py-2 text-sm text-muted transition-colors hover:border-accent"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default function SeoulAdmin({ initialSpots, initialAuth }: SeoulAdminProps) {
  const [spots, setSpots] = useState<Spot[]>(initialSpots);
  const [isAuth, setIsAuth] = useState(initialAuth);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);

  async function handleLogin() {
    setLoginError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsAuth(true);
      setPassword("");
    } else {
      setLoginError("Invalid password");
    }
  }

  async function handleLogout() {
    await fetch("/api/auth", { method: "DELETE" });
    setIsAuth(false);
    setEditingId(null);
    setIsAdding(false);
  }

  async function handleAdd(data: Omit<Spot, "id">) {
    const res = await fetch("/api/seoul", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const newSpot = await res.json();
      setSpots([...spots, newSpot]);
      setIsAdding(false);
    }
  }

  async function handleUpdate(id: string, data: Omit<Spot, "id">) {
    const res = await fetch(`/api/seoul/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const updated = await res.json();
      setSpots(spots.map((s) => (s.id === id ? updated : s)));
      setEditingId(null);
    }
  }

  async function handleDelete(id: string) {
    const res = await fetch(`/api/seoul/${id}`, { method: "DELETE" });
    if (res.ok) {
      setSpots(spots.filter((s) => s.id !== id));
    }
  }

  return (
    <div className="space-y-16 py-8">
      {/* Header */}
      <div>
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight">
              Seoul Guide<span className="text-accent">.</span>
            </h1>
            <p className="mt-3 text-lg text-muted">
              A food-first guide to one of the best eating cities in the world.
              These are personal picks — not tourist traps.
            </p>
          </div>

          {/* Auth controls */}
          <div className="shrink-0">
            {isAuth ? (
              <button
                onClick={handleLogout}
                className="rounded-lg border border-card-border px-3 py-1.5 text-xs text-muted transition-colors hover:border-red-500 hover:text-red-400"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <input
                  type="password"
                  placeholder="Admin password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                  className="w-36 rounded-lg border border-card-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted focus:border-accent focus:outline-none"
                />
                <button
                  onClick={handleLogin}
                  className="rounded-lg bg-accent px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-accent-hover"
                >
                  Login
                </button>
                {loginError && (
                  <span className="text-xs text-red-400">{loginError}</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Spot list */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Restaurants</h2>
          {isAuth && !isAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              + Add New
            </button>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {spots.map((spot) =>
            editingId === spot.id ? (
              <SpotForm
                key={spot.id}
                spot={spot}
                onSave={(data) => handleUpdate(spot.id, data)}
                onCancel={() => setEditingId(null)}
              />
            ) : (
              <div
                key={spot.id}
                className="group rounded-xl border border-card-border bg-card-bg p-5 transition-colors hover:border-accent/40"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium text-accent">
                    {spot.type}
                  </span>
                  <span className="text-xs text-muted">
                    {spot.neighborhood}
                  </span>
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{spot.name}</h3>
                  <Stars rating={spot.rating} />
                </div>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {spot.description}
                </p>
                {isAuth && (
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => setEditingId(spot.id)}
                      className="rounded-md border border-card-border px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(spot.id)}
                      className="rounded-md border border-card-border px-3 py-1 text-xs text-muted transition-colors hover:border-red-500 hover:text-red-400"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            )
          )}

          {/* Add new form */}
          {isAdding && (
            <SpotForm
              onSave={handleAdd}
              onCancel={() => setIsAdding(false)}
            />
          )}
        </div>
      </section>

      {/* Tips */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">
          Local Tips<span className="text-accent">.</span>
        </h2>
        <div className="rounded-xl border border-card-border bg-card-bg p-6">
          <ul className="space-y-3">
            {[
              "Order naengmyeon (cold buckwheat noodles) in summer — it's a revelation",
              "Convenience store kimbap at 2 AM is an essential Seoul experience",
              "Learn to say '이모, 여기요!' (Imo, yeogyo!) to get your server's attention",
              "Soju + beer = somaek. Ask a local to show you the perfect ratio",
              "Don't skip the banchan — it's free refills and half the meal",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-muted">
                <span className="mt-0.5 text-accent font-mono text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}

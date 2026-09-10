import { NextResponse } from "next/server";

export const runtime = "nodejs";

const MAX_LENGTHS = { from: 180, to: 180, date: 20, time: 20, passengers: 2, vehicle: 60, name: 100, phone: 40, email: 160, details: 500, locale: 5 };

function clean(value, max) {
  return String(value ?? "").replace(/[\u0000-\u001F\u007F]/g, "").trim().slice(0, max);
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (clean(body.company, 80)) return NextResponse.json({ ok: true });

    const data = Object.fromEntries(Object.entries(MAX_LENGTHS).map(([key, max]) => [key, clean(body[key], max)]));
    if (!data.from || !data.to || !data.date || !data.time || !data.name || !data.phone) {
      return NextResponse.json({ ok: false, error: "missing_fields" }, { status: 422 });
    }
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 422 });
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(data.date) || !/^\d{2}:\d{2}$/.test(data.time)) {
      return NextResponse.json({ ok: false, error: "invalid_schedule" }, { status: 422 });
    }

    const payload = new URLSearchParams({
      company: "",
      from: data.from,
      to: data.to,
      date: data.date,
      time: data.time,
      passengers: data.passengers || "1",
      vehicle: data.vehicle || "Non précisé",
      name: data.name,
      phone: data.phone,
      email: data.email,
      details: `[BlackCab Shuttle] ${data.details || "Aucun détail supplémentaire"}`,
      locale: data.locale || "fr",
    });

    const response = await fetch("https://taxibruxellesaeroport.be/booking.php", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded", Accept: "application/json" },
      body: payload.toString(),
      cache: "no-store",
    });

    if (!response.ok) return NextResponse.json({ ok: false, error: "mail_unavailable" }, { status: 503 });
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_request" }, { status: 400 });
  }
}

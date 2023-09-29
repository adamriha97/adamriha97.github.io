"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export const revalidate = 10;
export const dynamic = 'force-dynamic';

export default function AdminPage() {
    return <NextStudio config={config} />;
}
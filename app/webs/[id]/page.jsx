"use client";
import { useParams } from "next/navigation";

export default function Web() {
  const { id } = useParams();

  return <div>{id}</div>;
}

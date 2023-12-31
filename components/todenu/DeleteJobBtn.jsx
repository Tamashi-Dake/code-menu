"use client";

import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id }) {
  const router = useRouter();
  const removeTopic = async () => {
    const confirmed = confirm("Are you sure?");

    if (confirmed) {
      const res = await fetch(`/api/jobs?id=${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        router.refresh();
      }
    }
  };

  return (
    <button
      title="Delete this todenu"
      onClick={removeTopic}
      className="text-red-400"
    >
      <Trash size={24} />
    </button>
  );
}

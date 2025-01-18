"use client";
import { useUser, useSignIn } from "@clerk/nextjs";
import { Bookmark } from "lucide-react";
import { saveTranslation } from "@/app/actions/save-translation";

export default function SaveBtn({ sourceLan, targetLan, sourceText, targetText, isSaved, onHandleSave }) {
  const btnClasses = isSaved ? "fill-yellow-500" : "";
  return (
    <button
      className={`${!targetText ? "cursor-not-allowed opacity-40" : "cursor-pointer"}`}
      disabled={!targetText}
      type="button"
      onClick={async () => {
        await saveTranslation(sourceLan, targetLan, sourceText, targetText);
        onHandleSave();
      }}>
      <Bookmark className={btnClasses} />
    </button>
  );
}

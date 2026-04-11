"use client";
import { useActionState, useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import Button from "../ui/Button";
import { useTranslations } from "next-intl";
import { ContactFormState, sendContactEmail } from "../lib/sendContactMail";
import toast from "react-hot-toast";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export default function ContactForm() {
  const t = useTranslations("contact.form");

  const [state, formAction, isPending] = useActionState(
    sendContactEmail,
    initialState,
  );

  useEffect(() => {
    if (!state.message) return;

    if (state.success) {
      toast.success(state.message);
    } else {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      autoComplete="off"
      className="w-full flex flex-col gap-5 md:gap-7"
    >
      <div>
        <label
          htmlFor="name"
          className="block mb-1 font-medium text-foreground/80"
        >
          {t("nameLabel")}
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-secondary/70 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
          placeholder={t("namePlaceholder")}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block mb-1 font-medium text-foreground/80"
        >
          {t("emailLabel")}
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-secondary/70 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent transition"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-1 font-medium text-foreground/80"
        >
          {t("messageLabel")}
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={6}
          className="w-full px-5 py-3 rounded-lg border border-secondary/50 focus:ring-secondary/70 shadow-sm focus:outline-none focus:ring-2 focus:border-transparent resize-none transition"
          placeholder={t("messagePlaceholder")}
        ></textarea>
      </div>

      <Button
        isOutline={false}
        isLarge={true}
        type="submit"
        label={isPending ? t("sending") : t("sendButton")}
        className="w-full py-5"
        onClick={() => {}}
        leftIcon={
          isPending ? (
            <span className="animate-spin rounded-full h-5 w-5 border-t-2 border-white border-opacity-70" />
          ) : (
            <FaPaperPlane />
          )
        }
      />
    </form>
  );
}

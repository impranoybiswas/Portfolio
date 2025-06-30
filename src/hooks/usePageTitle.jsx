import { useEffect } from "react";

export default function usePageTitle(title) {
  useEffect(() => {
    const siteName = "Website Title";
    document.title = title ? `${title} | ${siteName}` : siteName;
  }, [title]);
}

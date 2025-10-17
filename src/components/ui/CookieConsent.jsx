import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "./Button";

function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("cookieConsent");
      if (!stored) setVisible(true);
    } catch {
      console.warn("CookieConsent: localStorage inacessível para leitura");
    }
  }, []);

  const setConsent = (value) => {
    try {
      localStorage.setItem("cookieConsent", value);
    } catch {
      console.warn("CookieConsent: localStorage inacessível para escrita");
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50">
      <div className="rounded-xl border border-primary/30 bg-[#1b1b29] p-4 shadow-lg">
        <p className="text-sm text-neutral-300">
          Usamos cookies para melhorar sua experiência e entender o uso da plataforma. Você pode
          gerenciar preferências em
          {" "}
          <Link href="/cookies" className="text-neutral-300 hover:text-action transition-base underline">
            Cookies
          </Link>
          .
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => setConsent("rejected")}>
            Rejeitar
          </Button>
          <Button variant="primary" onClick={() => setConsent("accepted")}>
            Aceitar
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CookieConsent;
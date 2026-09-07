import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Design Booth Graphics | Print & Design Studio Zimbabwe" },
      {
        name: "description",
        content:
          "Corporate gifts Zimbabwe, branded t-shirts Harare, large format printing and signage. Zimbabwean owned design, print & branding studio at Pax House, Harare.",
      },
      {
        name: "keywords",
        content:
          "Design Booth Graphics, printing Harare, corporate gifts Zimbabwe, branded t-shirts Zimbabwe, signage Harare, vehicle branding Zimbabwe, embroidery Harare, screen printing Zimbabwe, graphic design Harare",
      },
      { name: "author", content: "Design Booth Graphics (Pvt) Ltd" },
      { name: "publisher", content: "Design Booth Graphics (Pvt) Ltd" },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:site_name", content: "Design Booth Graphics" },
      { property: "og:title", content: "Design Booth Graphics | Print & Design Studio Zimbabwe" },
      {
        property: "og:description",
        content:
          "Corporate gifts Zimbabwe, branded t-shirts Harare, large format printing and signage. Zimbabwean owned design, print & branding studio at Pax House, Harare.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://design-booth-zw.vercel.app/" },
      { property: "og:image", content: "https://design-booth-zw.vercel.app/og-image.jpg" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Design Booth Graphics Logo and Branding Studio Harare" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Design Booth Graphics | Print & Design Studio Zimbabwe" },
      {
        name: "twitter:description",
        content:
          "Corporate gifts Zimbabwe, branded t-shirts Harare, large format printing and signage. Zimbabwean owned design, print & branding studio at Pax House, Harare.",
      },
      { name: "twitter:image", content: "https://design-booth-zw.vercel.app/og-image.jpg" },
      { name: "theme-color", content: "#09090b" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@200;300;400;500&family=JetBrains+Mono:wght@400;500&display=swap",
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "apple-touch-icon", href: "/og-image.jpg" },
      { rel: "canonical", href: "https://design-booth-zw.vercel.app/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "Design Booth Graphics (Pvt) Ltd",
          alternateName: "Design Booth Graphics",
          url: "https://design-booth-zw.vercel.app",
          logo: "https://design-booth-zw.vercel.app/og-image.jpg",
          image: "https://design-booth-zw.vercel.app/og-image.jpg",
          description:
            "Design Booth Graphics is a premier Zimbabwean design, print and branding company. Corporate uniforms, high-precision embroidery, laser engraving, and large format printing.",
          telephone: "+263772659601",
          email: "sales@thedesignbooth.co.zw",
          address: {
            "@type": "PostalAddress",
            streetAddress: "89 Kwame Nkrumah Ave, 4th Floor, Pax House",
            addressLocality: "Harare",
            addressRegion: "Harare Province",
            addressCountry: "ZW",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: -17.8285,
            longitude: 31.0526,
          },
          openingHoursSpecification: {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "17:00",
          },
          priceRange: "$$",
          sameAs: ["https://wa.me/263772659601"],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}

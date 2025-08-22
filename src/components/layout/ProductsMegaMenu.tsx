// import React from "react";
// import {
//   NavigationMenu,
//   NavigationMenuList,
//   NavigationMenuItem,
//   NavigationMenuTrigger,
//   NavigationMenuContent,
// } from "@/components/ui/navigation-menu";
// import { ExternalLink } from "lucide-react";

// const products = [
//   {
//     key: "skill-wallet",
//     label: "Skill Wallet",
//     href: "https://myskillwallet.ai/",
//     img: "/lovable-uploads/e9d1567c-84fe-4292-8ce7-8c7d4aca0e90.png",
//     desc: "Verified skill passport to showcase competencies.",
//   },
//   {
//     key: "troven",
//     label: "Troven",
//     href: "https://troven.ai/",
//     img: "/lovable-uploads/719a975d-9642-45a6-ad25-460c2326fbf5.png",
//     desc: "AI-assisted assessments and hiring with real project evidence.",
//   },
//   {
//     key: "smartinternz",
//     label: "SmartInternz",
//     href: "https://smartinternz.com/",
//     img: "/lovable-uploads/da55e47b-065d-4c01-b125-33f39b2efe7b.png",
//     desc: "Experiential learning and virtual internships platform.",
//   },
//   {
//     key: "impact369",
//     label: "Impact369",
//     href: "https://impact369.com/",
//     img: "/placeholder.svg",
//     desc: "Program impact tracking and outcome analytics.",
//   },
// ] as const;

// export function ProductsMegaMenu() {
//   return (
//     <NavigationMenu>
//       <NavigationMenuList>
//         <NavigationMenuItem>
//           <NavigationMenuTrigger className="story-link">
//             Products
//           </NavigationMenuTrigger>
//           <NavigationMenuContent className="z-50">
//             <div
//               className="w-[min(88vw,600px)]   bg-popover text-popover-foreground shadow-xl border rounded-md overflow-hidden"
//               role="group"
//               aria-label="Products mega menu"
//             >
//               <section
//                 className="p-3 md:p-4"
//                 role="tabpanel"
//                 aria-label="Products"
//               >
//                 <h3 className="sr-only">SmartBridge Products</h3>
//                 <ul className="grid grid-cols-1 gap-3">
//                   {products.map((p) => (
//                     <li key={p.key}>
//                       <a
//                         href={p.href}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
//                         aria-label={`${p.label} — View product`}
//                       >
//                         <img
//                           src={p.img}
//                           alt={`${p.label} logo`}
//                           className="h-8 w-auto object-contain"
//                           loading="lazy"
//                           decoding="async"
//                         />
//                         <div className="min-w-0">
//                           <span className="block text-sm font-medium truncate">
//                             {p.label}
//                           </span>
//                           <span className="block text-xs text-muted-foreground truncate">
//                             {p.desc}
//                           </span>
//                         </div>
//                         <ExternalLink
//                           className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
//                           aria-hidden="true"
//                         />
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </section>
//             </div>
//           </NavigationMenuContent>
//         </NavigationMenuItem>
//       </NavigationMenuList>
//     </NavigationMenu>
//   );
// }

import React from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { ExternalLink } from "lucide-react";

export function ProductsMegaMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="story-link">
            Products
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <div
              className="w-[min(88vw,600px)] bg-popover text-popover-foreground shadow-xl border rounded-md overflow-hidden"
              role="group"
              aria-label="Products mega menu"
            >
              <section
                className="p-3 md:p-4"
                role="tabpanel"
                aria-label="Products"
              >
                <h3 className="sr-only">SmartBridge Products</h3>
                <ul className="grid grid-cols-1 gap-3">
                  {/* Skill Wallet */}
                  <li>
                    <a
                      href="https://myskillwallet.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label="Skill Wallet — View product"
                    >
                      <img
                        src="/lovable-uploads/e9d1567c-84fe-4292-8ce7-8c7d4aca0e90.png"
                        alt="Skill Wallet logo"
                        className="h-9 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="min-w-0">
                        <span className="block text-sm font-medium truncate">
                          Skill Wallet
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          Verified skill passport to showcase competencies.
                        </span>
                      </div>
                      <ExternalLink
                        className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                        aria-hidden="true"
                      />
                    </a>
                  </li>

                  {/* Troven */}
                  <li>
                    <a
                      href="https://troven.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label="Troven — View product"
                    >
                      <img
                        src="/lovable-uploads/719a975d-9642-45a6-ad25-460c2326fbf5.png"
                        alt="Troven logo"
                        className="h-8 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="min-w-0">
                        <span className="block text-sm font-medium truncate">
                          Troven
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          AI-assisted assessments and hiring with real project
                          evidence.
                        </span>
                      </div>
                      <ExternalLink
                        className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                        aria-hidden="true"
                      />
                    </a>
                  </li>

                  {/* SmartInternz */}
                  <li>
                    <a
                      href="https://smartinternz.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label="SmartInternz — View product"
                    >
                      <img
                        src="/lovable-uploads/da55e47b-065d-4c01-b125-33f39b2efe7b.png"
                        alt="SmartInternz logo"
                        className="h-6 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="min-w-0">
                        <span className="block text-sm font-medium truncate">
                          SmartInternz
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          Experiential learning and virtual internships
                          platform.
                        </span>
                      </div>
                      <ExternalLink
                        className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                        aria-hidden="true"
                      />
                    </a>
                  </li>

                  {/* Impact369 */}
                  <li>
                    <a
                      href="https://impact369.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                      aria-label="Impact369 — View product"
                    >
                      <img
                        src="/lovable-uploads/impact.png"
                        alt="Impact369 logo"
                        className="h-10 w-auto object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="min-w-0">
                        <span className="block text-sm font-medium truncate">
                          Impact369
                        </span>
                        <span className="block text-xs text-muted-foreground truncate">
                          Program impact tracking and outcome analytics.
                        </span>
                      </div>
                      <ExternalLink
                        className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                </ul>
              </section>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

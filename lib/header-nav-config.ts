/** Static nav tree: labels resolved at runtime from `nav` + `navMenu` messages. */

export type ResolvedNavLink = {
  kind: "link";
  href: string;
  label: string;
};

export type ResolvedNavDropdown = {
  kind: "dropdown";
  id: string;
  label: string;
  indexHref: string;
  indexLabel: string;
  items: { href: string; label: string }[];
};

export type ResolvedNavSection = ResolvedNavLink | ResolvedNavDropdown;

export type HeaderNavChild = {
  href: string;
  /** `navMenu.{group}.{key}` */
  group: string;
  key: string;
};

export type HeaderNavDropdown = {
  kind: "dropdown";
  /** Trigger label from `nav.{navKey}` */
  navKey: string;
  /** Section index link (shown in panel header) */
  indexHref: string;
  children: HeaderNavChild[];
};

export type HeaderNavLink = {
  kind: "link";
  href: string;
  navKey: string;
};

export type HeaderNavEntry = HeaderNavLink | HeaderNavDropdown;

export const HEADER_NAV_ENTRIES: HeaderNavEntry[] = [
  { kind: "link", href: "/", navKey: "home" },
  { kind: "link", href: "/about-us", navKey: "aboutUs" },
  {
    kind: "dropdown",
    navKey: "services",
    indexHref: "/services",
    children: [
      { href: "/services/heavy-transport", group: "services", key: "heavyTransport" },
      { href: "/services/heavy-machinery-rental", group: "services", key: "heavyMachineryRental" },
      { href: "/services/hiab-boom-truck", group: "services", key: "hiabBoomTruck" },
      { href: "/services/project-logistics", group: "services", key: "projectLogistics" },
    ],
  },
  {
    kind: "dropdown",
    navKey: "resources",
    indexHref: "/blog",
    children: [
      { href: "/blog", group: "resources", key: "blog" },
      { href: "/fleet-equipment", group: "resources", key: "fleet" },
      { href: "/industries", group: "resources", key: "industries" },
      { href: "/projects", group: "resources", key: "projects" },
      { href: "/careers", group: "resources", key: "careers" },
    ],
  },
  { kind: "link", href: "/contact-us", navKey: "contactUs" },
];

import { ScrollArea } from '@/components/ui/scroll-area';
import CareerCard from '../_components/CareerCard';
import Opensource from '../_components/OpenSource';
import { Metadata } from 'next';
import Image from 'next/image';

const contributions = [
  // antiwork / gumroad
  {
    title: 'fix: seller default subscribe section',
    url: 'https://github.com/antiwork/gumroad/pull/1329',
    company: 'antiwork',
  },
  {
    title: 'fix: tooltip screen overflow at product share',
    url: 'https://github.com/antiwork/gumroad/pull/1336',
    company: 'antiwork',
  },
  {
    title: 'fix: hide search icon when no discount available',
    url: 'https://github.com/antiwork/gumroad/pull/1187',
    company: 'antiwork',
  },
  {
    title: 'fix: hide search icon when no products available',
    url: 'https://github.com/antiwork/gumroad/pull/1186',
    company: 'antiwork',
  },
  {
    title: 'fix: loading spinner on followers page',
    url: 'https://github.com/antiwork/gumroad/pull/1142',
    company: 'antiwork',
  },
  {
    title: 'fix: remove extra dot at checkout page',
    url: 'https://github.com/antiwork/gumroad/pull/1115',
    company: 'antiwork',
  },
  {
    title: 'fix: pricing page section',
    url: 'https://github.com/antiwork/gumroad/pull/1340',
    company: 'antiwork',
  },
  {
    title: 'fix: removed redundant back button',
    url: 'https://github.com/antiwork/gumroad/pull/1339',
    company: 'antiwork',
  },

  // antiwork / gumboard
  {
    title: 'fix: right margin for profile dropdown',
    url: 'https://github.com/antiwork/gumboard/pull/790',
    company: 'antiwork',
  },
  {
    title: 'fix: navbar layout on boards (small screens)',
    url: 'https://github.com/antiwork/gumboard/pull/782',
    company: 'antiwork',
  },
  {
    title: 'fix: replace input with textarea',
    url: 'https://github.com/antiwork/gumboard/pull/771',
    company: 'antiwork',
  },
  {
    title: 'fix: hide previous days in calendar on invite links',
    url: 'https://github.com/antiwork/gumboard/pull/769',
    company: 'antiwork',
  },
  {
    title: 'fix: textarea for new board description',
    url: 'https://github.com/antiwork/gumboard/pull/744',
    company: 'antiwork',
  },
  {
    title: 'fix: switch dimensions and color',
    url: 'https://github.com/antiwork/gumboard/pull/743',
    company: 'antiwork',
  },
  {
    title: 'fix: replace board description input with textarea',
    url: 'https://github.com/antiwork/gumboard/pull/742',
    company: 'antiwork',
  },
  {
    title: 'fix: move close button to dialog header',
    url: 'https://github.com/antiwork/gumboard/pull/741',
    company: 'antiwork',
  },
  {
    title: 'feat: optimistic update for archive and unarchive',
    url: 'https://github.com/antiwork/gumboard/pull/705',
    company: 'antiwork',
  },
  {
    title: 'fix(e2e): note filter failing for future dates',
    url: 'https://github.com/antiwork/gumboard/pull/823',
    company: 'antiwork',
  },

  // antiwork / flexile
  {
    title: 'fix: tabs section padding on people page',
    url: 'https://github.com/antiwork/flexile/pull/1114',
    company: 'antiwork',
  },
  {
    title: 'fix: dialog close button on small screens',
    url: 'https://github.com/antiwork/flexile/pull/1103',
    company: 'antiwork',
  },
  {
    title: 'fix: settings page layout on small screens',
    url: 'https://github.com/antiwork/flexile/pull/1101',
    company: 'antiwork',
  },
  {
    title: 'fix: improve invoice page responsiveness',
    url: 'https://github.com/antiwork/flexile/pull/1095',
    company: 'antiwork',
  },
  {
    title: 'fix: invoice page footer',
    url: 'https://github.com/antiwork/flexile/pull/1340',
    company: 'antiwork',
  },
  {
    title: 'fix: rejection flow',
    url: 'https://github.com/antiwork/flexile/pull/1311',
    company: 'antiwork',
  },
  {
    title: 'fix: selected toolbar highlight',
    url: 'https://github.com/antiwork/flexile/pull/1304',
    company: 'antiwork',
  },
  {
    title: 'fix: restrict EIN number length',
    url: 'https://github.com/antiwork/flexile/pull/1282',
    company: 'antiwork',
  },
  {
    title: 'fix: rich text editor issues',
    url: 'https://github.com/antiwork/flexile/pull/1281',
    company: 'antiwork',
  },

  // antiwork / gumroad refactors
  {
    title: 'refactor: migrate ShareSection inline css to tailwind',
    url: 'https://github.com/antiwork/gumroad/pull/1496',
    company: 'antiwork',
  },
  {
    title: 'refactor: migrate search discover page styles to tailwind',
    url: 'https://github.com/antiwork/gumroad/pull/1480',
    company: 'antiwork',
  },
  {
    title: 'refactor: migrate bundle edit share tab styles',
    url: 'https://github.com/antiwork/gumroad/pull/1479',
    company: 'antiwork',
  },
  {
    title: 'refactor: migrate upsell select modal styles',
    url: 'https://github.com/antiwork/gumroad/pull/1477',
    company: 'antiwork',
  },
  {
    title: 'refactor: review component inline css to tailwind',
    url: 'https://github.com/antiwork/gumroad/pull/1475',
    company: 'antiwork',
  },
  {
    title: 'fix: loader alignment on blog post page',
    url: 'https://github.com/antiwork/gumroad/pull/1468',
    company: 'antiwork',
  },
  {
    title: 'chore: migrate rating scss to tailwind',
    url: 'https://github.com/antiwork/gumroad/pull/1421',
    company: 'antiwork',
  },

  // cal.com
  {
    title: 'fix: code persists on dialog outside click',
    url: 'https://github.com/calcom/cal.com/pull/25870',
    company: 'calcom',
  },
  {
    title: 'fix: popover iOS issue',
    url: 'https://github.com/calcom/cal.com/pull/25696',
    company: 'calcom',
  },
  {
    title: 'fix: data table toolbar styling',
    url: 'https://github.com/calcom/cal.com/pull/25632',
    company: 'calcom',
  },
  {
    title: 'fix: vertical tab spacing',
    url: 'https://github.com/calcom/cal.com/pull/25612',
    company: 'calcom',
  },
  {
    title: 'fix: date picker content render issue',
    url: 'https://github.com/calcom/cal.com/pull/25584',
    company: 'calcom',
  },
  {
    title: 'fix(ui): api keys code alignment',
    url: 'https://github.com/calcom/cal.com/pull/25570',
    company: 'calcom',
  },
  {
    title: 'fix: availability settings styling override',
    url: 'https://github.com/calcom/cal.com/pull/25521',
    company: 'calcom',
  },
  {
    title: 'fix: availability CTA hover state',
    url: 'https://github.com/calcom/cal.com/pull/25504',
    company: 'calcom',
  },
  {
    title: 'fix(ui): missing checked state for event type checkbox',
    url: 'https://github.com/calcom/cal.com/pull/25478',
    company: 'calcom',
  },
  {
    title: 'fix(validation): disallow whitespace-only team names',
    url: 'https://github.com/calcom/cal.com/pull/25467',
    company: 'calcom',
  },
  {
    title: 'fix: regex and id extraction for giphy media urls ',
    url: 'https://github.com/calcom/cal.com/pull/22276',
    company: 'calcom',
  },
  {
    title: 'fix: month label overlapping',
    url: 'https://github.com/ossdotnow/ossdotnow/pull/216',
    company: 'ossdotnow',
  },
  {
    title: 'add attachments support to drafts',
    url: 'https://github.com/Mail-0/Zero/pull/1536',
    company: 'Mail-0',
  },
  {
    title: 'feat: add rich text formatting toolbar',
    url: 'https://github.com/Mail-0/Zero/pull/1563',
    company: 'Mail-0',
  },
  {
    title: 'Add opacity to icons and fix separator colors in mail context menu',
    url: 'https://github.com/Mail-0/Zero/pull/1296',
    company: 'Mail-0',
  },
  {
    title: 'fix(ui): chat section',
    url: 'https://github.com/morphik-org/morphik-core/pull/199',
    company: 'morphik-org',
  },
  {
    title: 'fix(ui): the navigation sheet theme',
    url: 'https://github.com/Mail-0/Zero/pull/1310',
    company: 'Mail-0',
  },
  {
    title:
      'fix(email): ensure sender display name is correctly shown in outgoing emails',
    url: 'https://github.com/Mail-0/Zero/pull/1312',
    company: 'Mail-0',
  },
  {
    title: 'add scrollbar and fix theme inconsistencies',
    url: 'https://github.com/morphik-org/morphik-core/pull/204',
    company: 'morphik-org',
  },
  {
    title:
      'feat: show sender details with copy email option in mail sender popover',
    url: 'https://github.com/Mail-0/Zero/pull/1326',
    company: 'Mail-0',
  },
  {
    title: 'add missing label translations',
    url: 'https://github.com/Mail-0/Zero/pull/1385',
    company: 'Mail-0',
  },
  {
    title: 'chore: set default mail category to default Value instead of null',
    url: 'https://github.com/Mail-0/Zero/pull/1402',
    company: 'Mail-0',
  },
  {
    title: 'fix the details popover overflow',
    url: 'https://github.com/Mail-0/Zero/pull/1436',
    company: 'Mail-0',
  },
  {
    title: 'resolve inconsistencies in translation usage',
    url: 'https://github.com/Mail-0/Zero/pull/1499',
    company: 'Mail-0',
  },

  {
    title: 'fix thread popover opacity',
    url: 'https://github.com/Mail-0/Zero/pull/1537',
    company: 'Mail-0',
  },

  {
    title: 'fix: no header in case of zero pdf',
    url: 'http://github.com/morphik-org/morphik-core/pull/225',
    company: 'morphik-org',
  },
  {
    title:
      'fix: prevent location input from losing focus after each key stroke',
    url: 'https://github.com/calcom/cal.com/pull/22167',
    company: 'calcom',
  },
  {
    title: 'fix: the custom icon at out of office empty view',
    url: 'https://github.com/calcom/cal.com/pull/22208',
    company: 'calcom',
  },
  {
    title: 'fix: center align dropdown indicator when menu is open',
    url: 'https://github.com/calcom/cal.com/pull/22262',
    company: 'calcom',
  },
  {
    title: 'fix: prevent footer from overlapping content in SearchDialog',
    url: 'https://github.com/calcom/cal.com/pull/22266',
    company: 'calcom',
  },

  {
    title: 'fix: replace # with {count} in en.json',
    url: 'https://github.com/Mail-0/Zero/pull/1650',
    company: 'Mail-0',
  },
  {
    title: 'fix: hide the remove option for single connection',
    url: 'https://github.com/Mail-0/Zero/pull/1655',
    company: 'Mail-0',
  },

  {
    title: 'fix: mobile menu visible on large screens',
    url: 'https://github.com/CapSoftware/Cap/pull/734',
    company: 'CapSoftware',
  },
  {
    title: 'fix: the SeoPageTemplate component',
    url: 'https://github.com/CapSoftware/Cap/pull/739',
    company: 'CapSoftware',
  },
  {
    title: 'improve: the tools pages',
    url: 'https://github.com/CapSoftware/Cap/pull/741',
    company: 'CapSoftware',
  },

  {
    title: 'UI: improved back icon for command palette',
    url: 'https://github.com/Mail-0/Zero/pull/1991',
    company: 'Mail-0',
  },
  {
    title: 'feat(platform): Update tab on members page',
    url: 'https://github.com/keyshade-xyz/keyshade/pull/951',
    company: 'keyshade-xyz',
  },
  {
    title: 'fix(web): fix broken blog link on the footer > web page',
    url: 'https://github.com/keyshade-xyz/keyshade/pull/980',
    company: 'keyshade-xyz',
  },
  {
    title: 'fix(web): weird black boxes on home page while using firefox',
    url: 'https://github.com/keyshade-xyz/keyshade/pull/973',
    company: 'keyshade-xyz',
  },
  {
    title:
      'feat(platform): Tier limit card to display secrets, variables and environments',
    url: 'https://github.com/keyshade-xyz/keyshade/pull/972',
    company: 'keyshade-xyz',
  },

  {
    title: 'fix: table render issue on blog',
    url: 'https://github.com/openstatusHQ/openstatus/pull/1257',
    company: 'openstatusHQ',
  },
  {
    title: 'openApi spec routes',
    url: 'https://github.com/openstatusHQ/openstatus/pull/1244',
    company: 'openstatusHQ',
  },
  {
    title: 'fixed typo in readme',
    url: 'https://github.com/openstatusHQ/openstatus/pull/1236',
    company: 'openstatusHQ',
  },

  {
    title: 'fix(mail): ensure sender name appears in recipient inbox',
    url: 'https://github.com/Mail-0/Zero/pull/1072',
    company: 'Mail-0',
  },
  {
    title: 'fix: alignment issue in file upload',
    url: 'https://github.com/formbricks/formbricks/pull/5828',
    company: 'formbricks',
  },
  {
    title: '[bug]: Toggle between the themes is not smooth',
    url: 'https://github.com/makeplane/plane/issues/7096',
    company: 'makeplane',
  },
  {
    title:
      'fix(i18n): fixed i18n support for previously untranslated fields (labels)',
    url: 'https://github.com/Mail-0/Zero/pull/1172',
    company: 'Mail-0',
  },
  {
    title: 'fix(ui): fixed labels for mail thread',
    url: 'https://github.com/Mail-0/Zero/pull/1201',
    company: 'Mail-0',
  },
  {
    title: 'chore(ci): replace Bun with pnpm in Husky pre-commit hook',
    url: 'https://github.com/Mail-0/Zero/pull/1202',
    company: 'Mail-0',
  },
  {
    title: 'fix: the issue of compose new mail while on draft folder',
    url: 'https://github.com/Mail-0/Zero/pull/1240',
    company: 'Mail-0',
  },
  {
    title: 'fix: improve email validation regex',
    url: 'https://github.com/Mail-0/Zero/pull/1251',
    company: 'Mail-0',
  },

  {
    title: 'fix(ui): toast',
    url: 'https://github.com/morphik-org/morphik-core/pull/193',
    company: 'morphik-org',
  },
  {
    title: 'fix(ui): chat side bar',
    url: 'https://github.com/morphik-org/morphik-core/pull/195',
    company: 'morphik-org',
  },
  {
    title: 'fix(ui): chat section and chat message',
    url: 'https://github.com/morphik-org/morphik-core/pull/196',
    company: 'morphik-org',
  },
  {
    title: 'fix(ui): fix the default category',
    url: 'https://github.com/Mail-0/Zero/pull/1295',
    company: 'Mail-0',
  },
];

export const metadata: Metadata = {
  title: 'Abhishek | OSS Contributions',
  description: 'My open-source contributions and journey.',
  openGraph: {
    title: 'Abhishek | OSS Contributions',
    description: 'Explore my open-source journey and contributions.',
    url: 'https://i.abhiifour.xyz/career',
    siteName: "Abhishek's Portfolio",
    images: [
      {
        url: 'https://i.abhiifour.xyz/ossv1.png', // put your image in /public and use /og-image.png
        width: 1200,
        height: 630,
        alt: 'Abhishek OSS Contributions',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/ossv1.png'],
  },
};

const images = [
  {
    url: '/antiwork.png',
    link: 'https://github.com/antiwork',
  },
  {
    url: '/cal.png',
    link: 'https://github.com/calcom',
  },
  {
    url: '/zero.png',
    link: 'https://github.com/Mail-0/Zero',
  },
  {
    url: '/morphik.png',
    link: 'https://github.com/morphik-org/morphik-core',
  },
  {
    url: '/cap.png',
    link: 'https://github.com/CapSoftware/Cap',
  },
  {
    url: '/formsbrick.png',
    link: 'https://github.com/formbricks/formbricks',
  },
  {
    url: '/openstatus.png',
    link: 'https://github.com/openstatusHQ/openstatus',
  },
  {
    url: '/keyshade.png',
    link: 'https://github.com/keyshade-xyz/keyshade',
  },
];

export default function CareersPage() {
  // const router = useRouter();
  return (
    <div>
      <h1 className="text-white text-lg mb-6 uppercase tracking-tight">
        Experience
      </h1>
      <CareerCard />
      <h1 className="text-white text-lg py-6 uppercase tracking-tight">
        OSS Contributions <span></span>
      </h1>

      <div className="flex flex-wrap justify-center lg:justify-evenly items-center gap-6 mb-6 ">
        {images.map((img, index) => (
          <a href={img.link} key={index}>
            <Image
              src={img.url}
              width={45}
              height={45}
              className="cursor-pointer rounded-lg overflow-hidden grayscale opacity-80 hover:opacity-100 hover:grayscale-0 transition-all"
              alt="abhi-logo"
              loading="eager"
              draggable={false}
            />
          </a>
        ))}
      </div>

      <ScrollArea className="max-h-[400px]  flex flex-col w-full">
        <div className=" flex flex-col gap-2">
          {contributions.map((contribution, index) => (
            <Opensource
              key={index}
              title={contribution.title}
              company={contribution.company}
              url={contribution.url}
            />
          ))}
        </div>
      </ScrollArea>
      {/* <Opensource/> */}
    </div>
  );
}


import CareerCard from "../_components/CareerCard";
import Opensource from "../_components/OpenSource";

const contributions = [
      { title: "Add opacity to icons and fix separator colors in mail context menu", url: "https://github.com/Mail-0/Zero/pull/1296", company: "Mail-0" },
  { title: "fix(ui): chat section", url: "https://github.com/morphik-org/morphik-core/pull/199", company: "morphik-org" },
  { title: "fix(ui): the navigation sheet theme", url: "https://github.com/Mail-0/Zero/pull/1310", company: "Mail-0" },
  { title: "fix(email): ensure sender display name is correctly shown in outgoing emails", url: "https://github.com/Mail-0/Zero/pull/1312", company: "Mail-0" },
  { title: "add scrollbar and fix theme inconsistencies", url: "https://github.com/morphik-org/morphik-core/pull/204", company: "morphik-org" },
  { title: "feat: show sender details with copy email option in mail sender popover", url: "https://github.com/Mail-0/Zero/pull/1326", company: "Mail-0" },
  { title: "add missing label translations", url: "https://github.com/Mail-0/Zero/pull/1385", company: "Mail-0" },
  { title: "chore: set default mail category to default Value instead of null", url: "https://github.com/Mail-0/Zero/pull/1402", company: "Mail-0" },
  { title: "fix the details popover overflow", url: "https://github.com/Mail-0/Zero/pull/1436", company: "Mail-0" },
  { title: "resolve inconsistencies in translation usage", url: "https://github.com/Mail-0/Zero/pull/1499", company: "Mail-0" },
  { title: "add attachments support to drafts", url: "https://github.com/Mail-0/Zero/pull/1536", company: "Mail-0" },
  { title: "fix thread popover opacity", url: "https://github.com/Mail-0/Zero/pull/1537", company: "Mail-0" },
  { title: "feat: add rich text formatting toolbar", url: "https://github.com/Mail-0/Zero/pull/1563", company: "Mail-0" },

  { title: "fix: no header in case of zero pdf", url: "http://github.com/morphik-org/morphik-core/pull/225", company: "morphik-org" },
  { title: "fix: prevent location input from losing focus after each key stroke", url: "https://github.com/calcom/cal.com/pull/22167", company: "calcom" },
  { title: "fix: the custom icon at out of office empty view", url: "https://github.com/calcom/cal.com/pull/22208", company: "calcom" },
  { title: "fix: center align dropdown indicator when menu is open", url: "https://github.com/calcom/cal.com/pull/22262", company: "calcom" },
  { title: "fix: prevent footer from overlapping content in SearchDialog", url: "https://github.com/calcom/cal.com/pull/22266", company: "calcom" },

  { title: "fix: replace # with {count} in en.json", url: "https://github.com/Mail-0/Zero/pull/1650", company: "Mail-0" },
  { title: "fix: hide the remove option for single connection", url: "https://github.com/Mail-0/Zero/pull/1655", company: "Mail-0" },

  { title: "fix: mobile menu visible on large screens", url: "https://github.com/CapSoftware/Cap/pull/734", company: "CapSoftware" },
  { title: "fix: the SeoPageTemplate component", url: "https://github.com/CapSoftware/Cap/pull/739", company: "CapSoftware" },
  { title: "improve: the tools pages", url: "https://github.com/CapSoftware/Cap/pull/741", company: "CapSoftware" },

  { title: "UI: improved back icon for command palette", url: "https://github.com/Mail-0/Zero/pull/1991", company: "Mail-0" },
  { title: "feat(platform): Update tab on members page", url: "https://github.com/keyshade-xyz/keyshade/pull/951", company: "keyshade-xyz" },
  { title: "fix(web): fix broken blog link on the footer > web page", url: "https://github.com/keyshade-xyz/keyshade/pull/980", company: "keyshade-xyz" },
  { title: "fix(web): weird black boxes on home page while using firefox", url: "https://github.com/keyshade-xyz/keyshade/pull/973", company: "keyshade-xyz" },
  { title: "feat(platform): Tier limit card to display secrets, variables and environments", url: "https://github.com/keyshade-xyz/keyshade/pull/972", company: "keyshade-xyz" },

  { title: "fix: table render issue on blog", url: "https://github.com/openstatusHQ/openstatus/pull/1257", company: "openstatusHQ" },
  { title: "openApi spec routes", url: "https://github.com/openstatusHQ/openstatus/pull/1244", company: "openstatusHQ" },
  { title: "fixed typo in readme", url: "https://github.com/openstatusHQ/openstatus/pull/1236", company: "openstatusHQ" },

  { title: "fix(mail): ensure sender name appears in recipient inbox", url: "https://github.com/Mail-0/Zero/pull/1072", company: "Mail-0" },
  { title: "fix: alignment issue in file upload", url: "https://github.com/formbricks/formbricks/pull/5828", company: "formbricks" },
  { title: "[bug]: Toggle between the themes is not smooth", url: "https://github.com/makeplane/plane/issues/7096", company: "makeplane" },
  { title: "fix(i18n): fixed i18n support for previously untranslated fields (labels)", url: "https://github.com/Mail-0/Zero/pull/1172", company: "Mail-0" },
  { title: "fix(ui): fixed labels for mail thread", url: "https://github.com/Mail-0/Zero/pull/1201", company: "Mail-0" },
  { title: "chore(ci): replace Bun with pnpm in Husky pre-commit hook", url: "https://github.com/Mail-0/Zero/pull/1202", company: "Mail-0" },
  { title: "fix: the issue of compose new mail while on draft folder", url: "https://github.com/Mail-0/Zero/pull/1240", company: "Mail-0" },
  { title: "fix: improve email validation regex", url: "https://github.com/Mail-0/Zero/pull/1251", company: "Mail-0" },

  { title: "fix(ui): toast", url: "https://github.com/morphik-org/morphik-core/pull/193", company: "morphik-org" },
  { title: "fix(ui): chat side bar", url: "https://github.com/morphik-org/morphik-core/pull/195", company: "morphik-org" },
  { title: "fix(ui): chat section and chat message", url: "https://github.com/morphik-org/morphik-core/pull/196", company: "morphik-org" },
  { title: "fix(ui): fix the default category", url: "https://github.com/Mail-0/Zero/pull/1295", company: "Mail-0" },

];


export default function CareersPage() {
    return (<div>
        <h1 className="text-white text-xl mb-6">Career timeline</h1>
        <CareerCard/>
        <h1 className="text-white text-xl py-6">Open Source Contributions</h1>    
        <div className="max-h-[400px] overflow-y-auto flex flex-col gap-1.5 scrollbar">
            {
                contributions.map((contribution, index) => (
                    <Opensource key={index} title={contribution.title} company={contribution.company} url={contribution.url}/>
                ))
            }
        </div>
        {/* <Opensource/> */}
    </div>);
}
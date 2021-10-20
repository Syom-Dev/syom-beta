import React, { FC } from "react";
import { Box, Container, Typography } from "@material-ui/core";

import Layout from "../src/components/Layout";
import SmallSyomHeader from "../src/components/Header";
import { Footer } from "../src/components/Footer";
import SyomLink from "../src/components/SyomLink";

const Paragraph: FC = ({ children }) => (
  <Box mt={2}>
    <Typography component="p">
      {children}
    </Typography>
  </Box>
);
const Heading: FC = ({ children }) => (
  <Box mt={8}>
    <Typography component="h2" variant="h3">
      {children}
    </Typography>
  </Box>
);
const Heading2: FC = ({ children }) => (
  <Box mt={5}>
    <Typography component="h2" variant="h5">
      {children}
    </Typography>
  </Box>
);

const TermsOfSale: FC = () => (
  <Layout>
    <SmallSyomHeader>
    </SmallSyomHeader>

    <Container maxWidth="md">
      <Box mt={2} textAlign="center">
        <Typography component="h1" variant="h2">
              Salgsvilkår
        </Typography>
      </Box>
      <Heading>
        Innledning
      </Heading>
      <Paragraph>
          Dette kjøpet er regulert av de nedenstående standard salgsbetingelser for forbrukerkjøp av varer over Internett. Forbrukerkjøp over internett reguleres hovedsakelig av avtaleloven, forbrukerkjøpsloven, markedsføringsloven, angrerettloven og ehandelsloven, og disse lovene gir forbrukeren ufravikelige rettigheter. Lovene er tilgjengelig på
        {" "}
        <SyomLink href="http://www.lovdata.no/">www.lovdata.no</SyomLink>
.
          Vilkårene i denne avtalen skal ikke forstås som noen begrensning i de lovbestemte rettighetene, men oppstiller partenes viktigste rettigheter og plikter for handelen.
      </Paragraph>
      <Paragraph>
          Salgsbetingelsene er utarbeidet og anbefalt av Forbrukertilsynet.
        {" "}
        <SyomLink href="https://www.forbrukertilsynet.no/lov-og-rett/veiledninger-og-retningslinjer/veiledning-standard-salgsbetingelser-forbrukerkjop-varer-internett">
                For en bedre forståelse av disse salgsbetingelsene, se Forbrukertilsynets veileder her.
        </SyomLink>
      </Paragraph>

      <Heading>
       1. Avtalen
      </Heading>
      <Paragraph>
      Avtalen består av disse salgsbetingelsene, opplysninger gitt i bestillingsløsningen og eventuelt særskilt avtalte vilkår. Ved eventuell motstrid mellom opplysningene, går det som særskilt er avtalt mellom partene foran, så fremt det ikke strider mot ufravikelig lovgivning.
      </Paragraph>
      <Paragraph>
      Avtalen vil i tillegg bli utfylt av relevante lovbestemmelser som regulerer kjøp av varer mellom næringsdrivende og forbrukere.
      </Paragraph>

      <Heading>
      2. Partene
      </Heading>
      <Paragraph>
      Selger er Syom AS, Kransen 14B, 1166, Oslo, syomkontakt@gmail.co, 927905191, og betegnes i det følgende som  selger/selgeren.
      </Paragraph>
      <Paragraph>
Kjøper er den forbrukeren som foretar bestillingen, og betegnes i det følgende som  kjøper/kjøperen.
      </Paragraph>

      <Heading>
      3. Pris
      </Heading>
      <Paragraph>
      Den oppgitte prisen for varen og tjenester er den totale prisen kjøper skal betale. Denne prisen inkluderer alle avgifter og tilleggskostnader. Ytterligere kostnader som selger før kjøpet ikke har informert om, skal kjøper ikke bære.
      </Paragraph>

      <Heading>
      4. Avtaleinngåelse
      </Heading>
      <Paragraph>
      Avtalen er bindende for begge parter når kjøperen har sendt sin bestilling til selgeren.
      </Paragraph>
      <Paragraph>
      Avtalen er likevel ikke bindende hvis det har forekommet skrive- eller tastefeil i tilbudet fra selgeren i bestillingsløsningen i nettbutikken eller i kjøperens bestilling, og den annen part innså eller burde ha innsett at det forelå en slik feil.
      </Paragraph>

      <Heading>
      5. Betalingen
      </Heading>
      <Paragraph>
      Selgeren kan kreve betaling for varen fra det tidspunkt den blir sendt fra selgeren til kjøperen.
      </Paragraph>
      <Paragraph>
    Dersom kjøperen bruker kredittkort eller debetkort ved betaling, kan selgeren reservere kjøpesummen på kortet ved bestilling. Kortet blir belastet samme dag som varen sendes.
      </Paragraph>
      <Paragraph>
    Ved betaling med faktura, blir fakturaen til kjøperen utstedt ved forsendelse av varen. Betalingsfristen fremgår av fakturaen og er på minimum 14 dager fra mottak.
      </Paragraph>
      <Paragraph>
    Kjøpere under 18 år kan ikke betale med etterfølgende faktura.
      </Paragraph>

      <Heading>
      6. Levering
      </Heading>
      <Paragraph>
      Levering er skjedd når kjøperen, eller hans representant, har overtatt tingen.
      </Paragraph>
      <Paragraph>
      Hvis ikke leveringstidspunkt fremgår av bestillingsløsningen, skal selgeren levere varen til kjøper uten unødig opphold og senest 30 dager etter bestillingen fra kunden. Varen skal leveres hos kjøperen med mindre annet er særskilt avtalt mellom partene.
      </Paragraph>

      <Heading>
      7. Risikoen for varen
      </Heading>
      <Paragraph>
      Risikoen for varen går over på kjøper når han, eller hans representant, har fått varene levert i tråd med punkt 6.
      </Paragraph>

      <Heading>
      8. Angrerett
      </Heading>
      <Paragraph>
      Med mindre avtalen er unntatt fra angrerett, kan kjøperen angre kjøpet av varen i henhold til angrerettloven.
      </Paragraph>
      <Paragraph>
     Kjøperen må gi selger melding om bruk av angreretten innen 14 dager fra fristen begynner å løpe. I fristen inkluderes alle kalenderdager. Dersom fristen ender på en lørdag, helligdag eller høytidsdag forlenges fristen til nærmeste virkedag.
      </Paragraph>
      <Paragraph>
Angrefristen anses overholdt dersom melding er sendt før utløpet av fristen. Kjøper har bevisbyrden for at angreretten er blitt gjort gjeldende, og meldingen bør derfor skje skriftlig (angrerettskjema, e-post eller brev).
      </Paragraph>
      <Paragraph>
Angrefristen begynner å løpe:

      </Paragraph>
      <Typography component="span">
        <ul>
          <li>
Ved kjøp av enkeltstående varer vil angrefristen løpe fra dagen etter varen(e) er mottatt.
          </li>
          <li>
Selges et abonnement, eller innebærer avtalen regelmessig levering av identiske varer, løper fristen fra dagen etter første forsendelse er mottatt.
          </li>
          <li>
Består kjøpet av flere leveranser, vil angrefristen løpe fra dagen etter siste leveranse er mottatt.
          </li>
        </ul>
      </Typography>
      <Paragraph>
      Angrefristen utvides til 12 måneder etter utløpet av den opprinnelige fristen dersom selger ikke før avtaleinngåelsen opplyser om at det foreligger angrerett og standardisert angreskjema. Tilsvarende gjelder ved manglende opplysning om vilkår, tidsfrister og fremgangsmåte for å benytte angreretten. Sørger den næringsdrivende for å gi opplysningene i løpet av disse 12 månedene, utløper angrefristen likevel 14 dager etter den dagen kjøperen mottok opplysningene.
      </Paragraph>
      <Paragraph>
      Ved bruk av angreretten må varen leveres tilbake til selgeren uten unødig opphold og senest 14 dager fra melding om bruk av angreretten er gitt. Kjøper dekker de direkte kostnadene ved å returnere varen, med mindre annet er avtalt eller selger har unnlatt å opplyse om at kjøper skal dekke returkostnadene. Selgeren kan ikke fastsette gebyr for kjøperens bruk av angreretten.
      </Paragraph>
      <Paragraph>
      Kjøper kan prøve eller teste varen på en forsvarlig måte for å fastslå varens art, egenskaper og funksjon, uten at angreretten faller bort. Dersom prøving eller test av varen går utover hva som er forsvarlig og nødvendig, kan kjøperen bli ansvarlig for eventuell redusert verdi på varen.
      </Paragraph>
      <Paragraph>
      Selgeren er forpliktet til å tilbakebetale kjøpesummen til kjøperen uten unødig opphold, og senest 14 dager fra selgeren fikk melding om kjøperens beslutning om å benytte angreretten. Selger har rett til å holde tilbake betalingen til han har mottatt varene fra kjøperen, eller til kjøper har lagt frem dokumentasjon for at varene er sendt  tilbake.
      </Paragraph>

      <Heading>
      9. Forsinkelse og manglende levering - kjøpernes rettigheter og frist for å melde krav
      </Heading>
      <Paragraph>
      Dersom selgeren ikke leverer varen eller leverer den for sent i henhold til avtalen mellom partene, og dette ikke skyldes kjøperen eller forhold på kjøperens side, kan kjøperen i henhold til reglene i forbrukerkjøpslovens kapittel 5 etter omstendighetene
        {" "}
        <em>holde kjøpesummen tilbake</em>
, kreve
        {" "}
        <em>oppfyllelse</em>
,
        {" "}
        <em>heve</em>
        {" "}
avtalen og/eller kreve
        {" "}
        <em>erstatning</em>
        {" "}
fra selgeren.

      </Paragraph>
      <Paragraph>
      Ved krav om misligholdsbeføyelser bør meldingen av bevishensyn være skriftlig (for eksempel e-post).
      </Paragraph>

      <Heading2>
      Oppfyllelse
      </Heading2>
      <Paragraph>
          Kjøper kan fastholde kjøpet og kreve oppfyllelse fra selger. Kjøper kan imidlertid ikke kreve oppfyllelse dersom det foreligger en hindring som selgeren ikke kan overvinne, eller dersom oppfyllelse vil medføre en så stor ulempe eller kostnad for selger at det står i vesentlig misforhold til kjøperens interesse i at selgeren oppfyller. Skulle vanskene falle bort innen rimelig tid, kan kjøper likevel kreve oppfyllelse.
      </Paragraph>
      <Paragraph>
      Kjøperen taper sin rett til å kreve oppfyllelse om han eller hun venter urimelig lenge med å fremme kravet.
      </Paragraph>

      <Heading2>
      Heving
      </Heading2>
      <Paragraph>
Dersom selgeren ikke leverer varen på leveringstidspunktet, skal kjøperen oppfordre selger til å levere innen en rimelig tilleggsfrist for oppfyllelse. Dersom selger ikke leverer varen innen tilleggsfristen, kan kjøperen heve kjøpet.
      </Paragraph>
      <Paragraph>
Kjøper kan imidlertid heve kjøpet umiddelbart hvis selger nekter å levere varen. Tilsvarende gjelder dersom levering til avtalt tid var avgjørende for inngåelsen av avtalen, eller dersom kjøperen har underrettet selger om at leveringstidspunktet er avgjørende.
      </Paragraph>
      <Paragraph>
Leveres tingen etter tilleggsfristen forbrukeren har satt eller etter leveringstidspunktet som var avgjørende for inngåelsen av avtalen, må krav om heving gjøres gjeldende innen rimelig tid etter at kjøperen fikk vite om leveringen.
      </Paragraph>

      <Heading2>
      Erstatning
      </Heading2>

      <Paragraph>
      Kjøperen kan kreve erstatning for lidt tap som følge av forsinkelsen. Dette gjelder imidlertid ikke dersom selgeren godtgjør at forsinkelsen skyldes hindring utenfor selgers kontroll som ikke med rimelighet kunne blitt tatt i betraktning på avtaletiden, unngått, eller overvunnet følgene av.
      </Paragraph>

      <Heading>
      10. Mangel ved varen - kjøperens rettigheter og reklamasjonsfrist
      </Heading>
      <Paragraph>
      Hvis det foreligger en mangel ved varen må kjøper innen rimelig tid etter at den ble oppdaget eller burde ha blitt oppdaget, gi selger melding om at han eller hun vil påberope seg mangelen. Kjøper har alltid reklamert tidsnok dersom det skjer innen 2 mnd. fra mangelen ble oppdaget eller burde blitt oppdaget. Reklamasjon kan skje senest to år etter at kjøper overtok varen. Dersom varen eller deler av den er ment å vare vesentlig lenger enn to år, er reklamasjonsfristen fem år.
      </Paragraph>
      <Paragraph>
      Dersom varen har en mangel og dette ikke skyldes kjøperen eller forhold på kjøperens side, kan kjøperen i henhold til reglene i forbrukerkjøpsloven kapittel 6 etter omstendighetene holde kjøpesummen tilbake, velge mellom retting og omlevering, kreve prisavslag, kreve avtalen hevet og/eller kreve erstatning  fra selgeren.
      </Paragraph>
      <Paragraph>
      Reklamasjon til selgeren bør skje skriftlig.
      </Paragraph>

      <Heading2>
      Retting eller omlevering
      </Heading2>
      <Paragraph>
      Kjøperen kan velge mellom å kreve mangelen rettet eller levering av tilsvarende ting. Selger kan likevel motsette seg kjøperens krav dersom gjennomføringen av kravet er umulig eller volder selgeren urimelige kostnader. Retting eller omlevering skal foretas innen rimelig tid. Selger har i utgangspunktet ikke rett til å foreta mer enn to avhjelpsforsøk for samme mangel.
      </Paragraph>

      <Heading2>
      Prisavslag
      </Heading2>
      <Paragraph>
      Kjøper kan kreve et passende prisavslag dersom varen ikke blir rettet eller omlevert. Dette innebærer at forholdet mellom nedsatt og avtalt pris svarer til forholdet mellom tingens verdi i mangelfull og kontraktsmessig stand. Dersom særlige grunner taler for det, kan prisavslaget i stedet settes lik mangelens betydning for kjøperen.
      </Paragraph>

      <Heading2>
Heving
      </Heading2>

      <Paragraph>
Dersom varen ikke er rettet eller omlevert, kan kjøperen også heve kjøpet når mangelen ikke er uvesentlig.
      </Paragraph>

      <Heading>
      11. Selgerens rettigheter ved kjøperens mislighold
      </Heading>
      <Paragraph>
      Dersom kjøperen ikke betaler eller oppfyller de øvrige pliktene etter avtalen eller loven, og dette ikke skyldes selgeren eller forhold på selgerens side, kan selgeren i henhold til reglene i forbrukerkjøpsloven kapittel 9 etter omstendighetene holde varen tilbake, kreve oppfyllelse av avtalen, kreve avtalen hevet samt kreve erstatning fra kjøperen. Selgeren vil også etter omstendighetene kunne kreve renter ved forsinket betaling, inkassogebyr og et rimelig gebyr ved uavhentede varer.
      </Paragraph>

      <Heading2>
      Oppfyllelse
      </Heading2>
      <Paragraph>
      Selger kan fastholde kjøpet og kreve at kjøperen betaler kjøpesummen. Er varen ikke levert, taper selgeren sin rett dersom han venter urimelig lenge med å fremme kravet.
      </Paragraph>

      <Heading2>
Heving
      </Heading2>

      <Paragraph>
      Selger kan heve avtalen dersom det foreligger vesentlig betalingsmislighold eller annet vesentlig mislighold fra kjøperens side. Selger kan likevel ikke heve dersom hele kjøpesummen er betalt. Fastsetter selger en rimelig tilleggsfrist for oppfyllelse og kjøperen ikke betaler innen denne fristen, kan selger heve kjøpet.
      </Paragraph>
      <Heading2>
      Renter ved forsinket betaling/inkassogebyr
      </Heading2>

      <Paragraph>
      Dersom kjøperen ikke betaler kjøpesummen i henhold til avtalen, kan selger kreve renter av kjøpesummen etter forsinkelsesrenteloven. Ved manglende betaling kan kravet, etter forutgående varsel, bli sendt til Kjøper kan da bli holdt ansvarlig for gebyr etter inkassoloven.
      </Paragraph>
      <Heading2>
      Gebyr ved uavhentede ikke-forskuddsbetalte varer
      </Heading2>

      <Paragraph>
      Dersom kjøperen unnlater å hente ubetalte varer, kan selger belaste kjøper med et gebyr. Gebyret skal maksimalt dekke selgerens faktiske  utlegg for å levere varen til kjøperen. Et slikt gebyr kan ikke belastes kjøpere under 18  år.
      </Paragraph>

      <Heading>
      12. Garanti
      </Heading>
      <Paragraph>
      Garanti som gis av selgeren eller produsenten, gir kjøperen rettigheter i tillegg til de kjøperen allerede har etter ufravikelig lovgivning. En garanti innebærer dermed ingen begrensninger i kjøperens rett til reklamasjon og krav ved forsinkelse eller mangler etter punkt 9 og 10.
      </Paragraph>

      <Heading>
      13. Personopplysninger
      </Heading>
      <Paragraph>
      Behandlingsansvarlig for innsamlede personopplysninger er selger. Med mindre kjøperen samtykker til noe annet, kan selgeren, i tråd med personopplysningsloven, kun innhente og lagre de personopplysninger som er nødvendig for at selgeren skal kunne gjennomføre forpliktelsene etter avtalen. Kjøperens personopplysninger vil kun bli utlevert til andre hvis det er nødvendig for at selger skal få gjennomført avtalen med kjøperen, eller i lovbestemte tilfelle.
      </Paragraph>

      <Heading>
      14. Konfliktløsning
      </Heading>
      <Paragraph>
      Klager rettes til selger innen rimelig tid, jf. punkt 9 og 10. Partene skal forsøke å løse eventuelle tvister i minnelighet. Dersom dette ikke lykkes, kan kjøperen ta kontakt med Forbrukerrådet for mekling. Forbrukerrådet er tilgjengelig  på  telefon 23  400  500  eller
        {" "}
        <SyomLink href="http://www.forbrukerradet.no/">www.forbrukerradet.no</SyomLink>
.
      </Paragraph>
      <Paragraph>
      Europa-Kommisjonens klageportal kan også brukes hvis du ønsker å inngi en klage. Det er særlig relevant, hvis du er forbruker bosatt i et annet EU-land. Klagen inngis her:
        {" "}
        <SyomLink href="http://ec.europa.eu/odr">http://ec.europa.eu/odr.</SyomLink>
      </Paragraph>
    </Container>
    <Box mt={8}></Box>
    <Footer />
  </Layout>
);

export default TermsOfSale;

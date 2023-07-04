interface FAQuestion {
  title: string,
  answer: string[]
}

interface FooterElement {
  title: string,
  links: URLLink[]
}

interface URLLink {
  text: string,
  url: string
}

export const AppName : string = "Kaechapon" // Footer | TopBar |

// Footer 
export const AppSubTitle : string = "Gashapon online store"
export const BusinessABN : string = "00 000 000 000"
// fix - feed social media urls
export const SocialMediaLinks : {instagram: string, facebook: string, youtube: string, pinterest: string, twitter : string, tiktok: string} = {
  instagram: "http://localhost:5173",
  facebook: "example",
  youtube: "example",
  pinterest: "example",
  twitter: "example",
  tiktok: "example"
}
export const FooterLinks : FooterElement[] = [
  {
    title: "About us",
    links: [
      {text: "About us", url: "/about"},
      {text: "Media", url: "/media"},
      {text: "How it works?", url: "/guide"}
    ]
  },
  {
    title: "Support",
    links: [
      {text: "FAQ", url: "/faq"},
      {text: "Contact us", url: "/faq#contact"},
      {text: "Feedback", url: "/review"}
    ]
  }
]
// ---------------------------------

// FAQ
export const FAQList : FAQuestion[] = [
  {
    title: "Question 1 - How does it look like when we have big texts, acually, bigger than that, enough so it breaks the line",
    answer: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    ]
  },
  {
    title: "Question 2",
    answer: [
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    ]
  },
  {
    title: "Question 3",
    answer: [
      "Duis sollicitudin, libero non posuere cursus, enim ligula lobortis tellus, at ultricies ipsum diam vitae ligula. Vivamus vestibulum, tortor vel tincidunt congue, purus augue tincidunt justo, ut accumsan justo nibh eget quam. Donec vel venenatis erat. Curabitur mollis elit tortor, ac pretium purus ultricies vitae. Maecenas mi diam, semper non suscipit vel, finibus ac turpis. Etiam posuere finibus finibus.",
      "Maecenas fringilla velit sed magna viverra varius. Aenean sollicitudin risus a nisl egestas, eu lacinia metus efficitur. Etiam tempor tortor eu consequat rhoncus. Suspendisse ornare est rhoncus nulla rutrum convallis. Suspendisse et sapien luctus, rhoncus felis vitae, dapibus sem. Pellentesque dignissim nisl risus, nec ultrices arcu tincidunt ut.",
      "Mauris diam orci, dapibus nec suscipit at, finibus et purus. Curabitur facilisis, augue id ultrices malesuada, erat urna sollicitudin orci, ut elementum ligula diam in nulla."
    ]
  },
]
// ---------------------------------
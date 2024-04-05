import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import favicon from "@/app/favicon.ico";
import LayoutChildren from "@/lib/layoutChildren";
import ProgressCircle from "@/components/ui/scrollCircle";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--plus-jakarta-sans',
})

export const metadata = {
  title: "Architronix",
  description: "Architronix is a next js and tailwind css website",
  icons: {
    icon: `${favicon.src}`,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${plus_jakarta_sans.variable}`} suppressHydrationWarning={true}>
        <div id="page-wapper" className="!relative ">
          {/* ------ body line start */}
          <div className="w-full h-full fixed -z-[1] top-0 left-0 page-lines">
            <div className="container relative h-full">
              <span className="absolute left-3 top-0 h-full w-[1px] bg-secondary_rgba"></span>
              <span className="absolute right-[28%] top-0 h-full w-[1px] bg-secondary_rgba"></span>
              <span className="absolute right-3 top-0 h-full w-[1px] bg-secondary_rgba"></span>
            </div>
          </div>
          {/* ------ body line end */}
          <ProgressCircle />
          <LayoutChildren>
            {children}
          </LayoutChildren>
        </div>
      </body>
    </html>
  );
}

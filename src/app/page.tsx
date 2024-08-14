import Image from "next/image";
import Link from "next/link";
import BrinteLogo from "@/assets/brinteLogo.svg"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <header>
        <Link href={'/'}>
          <Image src={BrinteLogo} alt="Brinte logo" />
        </Link>
        <nav>
          <ul>
            <div>
              <li></li>
            </div>
            <div>
              <li></li>
            </div>
          </ul>
        </nav>
      </header>
      <section>
        <div className="brinte_wrapper">
          <h1>Section 1</h1>
        </div>
      </section>
      <section>
        <div className="brinte_wrapper">
          <h1>Section 1</h1>
        </div>
      </section>
      <footer>
        <h3>Footer</h3>
      </footer>
    </main>
  );
}

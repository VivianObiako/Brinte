import Header from "@/components/shared/Header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
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

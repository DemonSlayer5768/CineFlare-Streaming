import Header from '../Components/header';

export default function Page() {
  return (
    <div>
      <Header />
      <main>
        <h1 className="text-4xl font-bold">Bienvenido a Mi Página de Series</h1>
        <p className="mt-4">Aquí puedes ver tus series favoritas.</p>
      </main>
    </div>
  )
}

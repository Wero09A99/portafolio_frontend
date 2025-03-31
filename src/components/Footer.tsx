export default function Footer() {
    return (
      <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Nombre Desarrollador. Todos los derechos reservados.</p>
        </div>
      </footer>
    );
  }
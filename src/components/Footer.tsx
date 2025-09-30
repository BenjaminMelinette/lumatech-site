export default function Footer() {
    return(
        <footer className="bg-gray-800 text-gray-200 py-8">
            <div className="container mx-auto px-4 text-center">
                <p className="mb-4">&copy; {new Date().getFullYear()} LumaTech. Tous droits réservés.</p>
                <div className="space-x-4">
                    <a href="#" className="hover:underline">Politique de confidentialité</a>
                    <a href="#" className="hover:underline">Conditions d'utilisation</a>
                    <a href="#" className="hover:underline">Contact</a>
                </div>
            </div>
        </footer>
    )
}
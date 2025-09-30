import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSubmitted(true);

        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="py-20 lg:py-32 bg-gray-50">
            <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 lg:px-12 bg-white rounded-3xl shadow-lg p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-900">
                    <span className="text-3xl font-bold text-gray-900">
              Contactez Luma<span className="text-orange-600">Tech</span>
            </span>
                </h2>

                {submitted && (
                <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-800 rounded transform transition-all duration-500 scale-95 opacity-0 animate-pop">
                    <p className="font-semibold">Nous avons bien reçu votre message !</p>
                    <p className="text-sm">Ceci est une démonstration, ce site est fictif.</p>
                </div>
                )}


                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-blue-900" htmlFor="name">
                            Nom
                        </label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Votre nom"
                            required
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-blue-900" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="votre@email.com"
                            required
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-blue-900" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Écrivez votre message ici..."
                            required
                            rows={5}
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    <button
                    type="submit"
                    className="w-full bg-orange-500 text-white font-semibold py-2 rounded hover:bg-orange-600 transition"
                    >
                    Envoyer
                    </button>
                </form>
            </div>
        </section>
    );
}
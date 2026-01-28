"use client";

import React, { useRef } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const KEY = process.env.NEXT_PUBLIC_EMAILJS_KEY;
  const form = useRef<HTMLFormElement>(null);

  const isValidEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    const email = form.current.email.value;
    const message = form.current.message.value;

    if (!isValidEmail(email)) {
      alert("Por favor ingresá un email válido ❌");
      return;
    }

    if (message.length > 300) {
      alert("El mensaje no puede superar los 300 caracteres ❌");
      return;
    }

    emailjs
      .sendForm(
        "service_wti78fp",
        "template_ic4tyxs",
        form.current,
        KEY
      )
      .then(() => {
        alert("Mensaje enviado correctamente ✅");
        form.current?.reset();
      })
      .catch(() => {
        alert("Error al enviar el mensaje ❌");
      });
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-xl bg-[#2b2323]/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-[#6b4f4f]">
        <h2 className="text-3xl font-semibold text-gray-100 mb-2 text-center">
          Contacto
        </h2>

        <p className="text-gray-400 text-center mb-8">
          Escribime y te respondo lo antes posible
        </p>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            className="rounded-lg bg-[#1f1f1f] border border-[#4a3a3a] px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b4f4f]"
          />

          <input
            type="email"
            name="email"
            placeholder="Tu email"
            required
            className="rounded-lg bg-[#1f1f1f] border border-[#4a3a3a] px-4 py-3 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6b4f4f]"
          />

          <textarea
            name="message"
            placeholder="Tu mensaje (máx. 300 caracteres)"
            rows={5}
            maxLength={300}
            required
            className="rounded-lg bg-[#1f1f1f] border border-[#4a3a3a] px-4 py-3 text-gray-200 placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#6b4f4f]"
          />

          <button
            type="submit"
            className="mt-4 bg-[#6b4f4f] text-gray-100 py-3 rounded-lg font-medium hover:bg-[#7a5a5a] transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </main>
  );
};
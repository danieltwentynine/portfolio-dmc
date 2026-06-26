export function isEmailJsConfigured(): boolean {
  const { VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY } =
    import.meta.env;

  return Boolean(
    VITE_EMAILJS_SERVICE_ID?.trim() &&
      VITE_EMAILJS_TEMPLATE_ID?.trim() &&
      VITE_EMAILJS_PUBLIC_KEY?.trim()
  );
}

/** Logotype RusStudy : « Rus » sombre, « Study » violet, point d'accent. */
export default function Wordmark({ size = 'md', inverted = false }: { size?: 'sm' | 'md' | 'lg'; inverted?: boolean }) {
  const scale = size === 'lg' ? 'text-[34px]' : size === 'sm' ? 'text-[18px]' : 'text-[24px]';
  const base = inverted ? 'text-white' : 'text-[var(--rs-ink)]';
  const accent = inverted ? 'text-white/80' : 'text-[var(--rs-primary)]';

  // `dir="ltr"` isolé : sans cela, en arabe, le point final — caractère
  // neutre au sens bidirectionnel — bascule à gauche et le logo se lit
  // « .RusStudy ».
  return (
    <span dir="ltr" className={`inline-block font-bold tracking-tight leading-none ${scale} ${base}`}>
      Rus<span className={accent}>Study</span>
      <span className={accent}>.</span>
    </span>
  );
}
